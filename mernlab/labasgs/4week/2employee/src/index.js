const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
app.use(express.json());
let employees;
app.get('/', (req, res) => {
    res.send({
        error: false,
        message: "Welcome to Employee Server"
    })
})
app.get('/getEmployees', async (req, res) => {
    try {
        employees = await JSON.parse(fs.readFileSync('./Employees.json', 'utf-8'));
        res.send({
            error: false,
            data: employees,
            message: "Data is fetched Successfully"
        })
    } catch (err) {
        res.end(JSON.stringify({
            message: "Unable to Read File",
            error: true
        }))
    }
})
app.post('/createEmployee', async (req, res) => {
    try {
        employees = await JSON.parse(fs.readFileSync('./Employees.json', 'utf-8'));
        let data = req.body;
        employees.push(data);
        fs.writeFileSync('./Employees.json', JSON.stringify(employees));
        res.send({
            error: false,
            message: "Employee is created Successfully"
        })
    } catch (err) {
        res.end(JSON.stringify({
            message: "Unable to Read File",
            error: true
        }))
    }
});
app.put('/updateEmployee', async (req, res) => {
    try {
        employees = await JSON.parse(fs.readFileSync('./Employees.json', 'utf-8'));
        let data = req.body;
        let empId = data.empId;
        let index = employees.findIndex((emp) => emp.empId === empId);
        employees[index] = data;
        fs.writeFileSync('./Employees.json', JSON.stringify(employees));
        res.send({
            error: false,
            message: "Employee is updated Successfully"
        })
    } catch (err) {
        res.end(JSON.stringify({
            message: "Unable to Read File",
            error: true
        }))
    }
})
app.delete('/deleteEmployee', async (req, res) => {
    try {
        employees = await JSON.parse(fs.readFileSync('./Employees.json', 'utf-8'));
        let empId = req.body.empId;
        employees = employees.filter((emp) => emp.empId !== empId);
        fs.writeFileSync('./Employees.json', JSON.stringify(employees));
        res.send({
            error: false,
            message: "Employee is deleted Successfully"
        })
    } catch (err) {
        res.end(JSON.stringify({
            message: "Unable to Read File",
            error: true
        }))
    }
})
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})