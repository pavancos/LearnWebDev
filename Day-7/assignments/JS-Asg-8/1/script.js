import employees from "./employee.js";
//1. Find the names (array of names) of employees of Hyderabad
let hydEmp=employees.filter(emp=>emp.address.city.toLowerCase()==="hyderabad");
let hydEmpNames=hydEmp.map(emp=>emp.name);
console.log("Employees in Hyderabad: ",hydEmpNames);