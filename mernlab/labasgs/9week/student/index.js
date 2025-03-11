import express from 'express';
import { configDotenv } from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

configDotenv();
const LOCAL_DB = process.env.LOCAL_DB;
const CLOUD_DB = process.env.CLOUD_DB;
const PORT = process.env.PORT || 3000;

const localDBClient = new MongoClient(LOCAL_DB);
const cloudDBClient = new MongoClient(CLOUD_DB);

const app = express();
app.use(express.json());

async function connectDB(client) {
    await client.connect();
    return client.db('student').collection('students');
}

function createRoutes(path, client) {
    app.post(`/${path}/students`, async (req, res) => {
        try {
            const collection = await connectDB(client);
            const result = await collection.insertOne(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.get(`/${path}/students`, async (_, res) => {
        try {
            const collection = await connectDB(client);
            const students = await collection.find().toArray();
            res.json(students);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.put(`/${path}/students/:id`, async (req, res) => {
        try {
            const collection = await connectDB(client);
            const { id } = req.params;
            const result = await collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: req.body }
            );
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.delete(`/${path}/students/:id`, async (req, res) => {
        try {
            const collection = await connectDB(client);
            const { id } = req.params;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
}

createRoutes('local', localDBClient);
createRoutes('cloud', cloudDBClient);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));