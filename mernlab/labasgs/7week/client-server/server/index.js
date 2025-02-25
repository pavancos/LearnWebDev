import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import { faker } from '@faker-js/faker';
configDotenv();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors('*'));

function createStudent() {
    return {
        username: faker.internet.username(),
        displayName: faker.person.firstName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    };
}

async function retrieveStudents(n) {
    const Students = faker.helpers.multiple(createStudent, {
        count: n
    });
    return Students;
}

app.get('/', (req, res) => {
    res.send('API is runing')
});

app.get('/students', async (req, res) => {
    try {
        let number = req.query.number;
        if (!number) {
            number = 5;
        }
        const students = await retrieveStudents(number);
        res.send({
            error: false,
            payload: {
                message: `${number} Students are Retrieved Successfully`,
                students: students
            }
        })
    } catch (err) {
        console.error("Internal Server Error", err);
        res.send({
            error: true,
            payload: {
                message: "Server Could not Respond"
            }
        })
    }
})

app.listen(PORT, () => {
    console.log(`API is on http://localhost:${PORT}`);
})