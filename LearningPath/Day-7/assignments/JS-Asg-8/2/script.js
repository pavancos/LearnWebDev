import employees from "./employee.js";
//2. Find the name and address of employees whose age is between 40 and 50
let oldEmp=employees.filter(emp=>(emp.age>=40&&emp.age<=50));
let oldEmpNames=oldEmp.map(emp=>({name:emp.name, address:emp.address}));
console.log("Employees between 40 and 50 years: ",oldEmpNames);