import employees from "./employee.js";
//3. Find the employees who are not from Hyderabad
let nonHydEmp=employees.filter(emp=>emp.address.city.toLowerCase()!=="hyderabad");
console.log("Employees not in Hyderabad: ",nonHydEmp);