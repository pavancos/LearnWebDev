import employees from "./employee.js";
//1. Find the names (array of names) of employees of Hyderabad
let hydEmp=employees.filter(emp=>emp.address.city.toLowerCase()==="hyderabad");
let hydEmpNames=hydEmp.map(emp=>emp.name);
console.log("Employees in Hyderabad: ",hydEmpNames);
//2. Find the name and address of employees whose age is between 40 and 50
let oldEmp=employees.filter(emp=>(emp.age>=40&&emp.age<=50));
let oldEmpNames=oldEmp.map(emp=>({name:emp.name, address:emp.address}));
console.log("Employees between 40 and 50 years: ",oldEmpNames);
//3. Find the employees who are not from Hyderabad
let nonHydEmp=employees.filter(emp=>emp.address.city.toLowerCase()!=="hyderabad");
console.log("Employees not in Hyderabad: ",nonHydEmp);
//4. Find the names (array of names) of employees whose skill is "reactjs"
let reactEmp=employees.filter(emp=>emp.skills.includes('reactjs'));
let reactEmpNames=reactEmp.map(emp=>emp.name);
console.log("Employees with skill ReactJs:", reactEmpNames);