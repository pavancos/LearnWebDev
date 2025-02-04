const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let students;

    let method = req.method;
    let endpoint = req.url;
    if (method === 'GET' && endpoint === '/') {
        res.end(JSON.stringify({
            message: 'Welcome to the homepage',
            error: false
        }));
    }
    if (method === 'GET' && endpoint === '/getStudents') {
        try {
            students = await JSON.parse(fs.readFileSync('./Students.json', 'utf-8'));
        } catch (err) {
            res.end(JSON.stringify({
                message: "Unable to Read File",
                error: true
            }))
        }
        res.end(JSON.stringify({
            message: 'Data is successfully fetched',
            data: students,
            error: false
        }));
    }
    if (method === 'POST' && endpoint === '/createStudent') {
        try {
            students = await JSON.parse(fs.readFileSync('./Students.json', 'utf-8'));
        } catch (err) {
            res.end(JSON.stringify({
                message: "Unable to Read File",
                error: true
            }))
        }
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let data = JSON.parse(body);
            students.push(data);
            fs.writeFileSync('./Students.json', JSON.stringify(students));
            res.end(JSON.stringify({
                message: 'Student is successfully created',
                error: false
            }));
        });
    }
    if (method === 'PUT' && endpoint === '/updateStudent') {
        try {
            students = await JSON.parse(fs.readFileSync('./Students.json', 'utf-8'));
        } catch (err) {
            res.end(JSON.stringify({
                message: "Unable to Read File",
                error: true
            }))
        }
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let data = JSON.parse(body);
            let index = students.findIndex((student) => student.rollno === data.rollno);
            students[index] = data;
            fs.writeFileSync('./Students.json', JSON.stringify(students));
            res.end(JSON.stringify({
                message: 'Student is successfully updated',
                error: false
            }));
        });
    }
    if (method === 'DELETE' && endpoint === '/deleteStudent') {
        try {
            students = await JSON.parse(fs.readFileSync('./Students.json', 'utf-8'));
        } catch (err) {
            res.end(JSON.stringify({
                message: "Unable to Read File",
                error: true
            }))
        }
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let data = JSON.parse(body);
            let index = students.findIndex((student) => student.rollno === data.rollno);
            students.splice(index, 1);
            fs.writeFileSync('./Students.json', JSON.stringify(students));
            res.end(JSON.stringify({
                message: 'Student is successfully deleted',
                error: false
            }));
        });
    }

})




server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})