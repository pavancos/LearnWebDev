import employees from "./employee.js";
//4. Find the names (array of names) of employees whose skill is "reactjs"
let reactEmp=employees.filter(emp=>emp.skills.includes('reactjs'));
let reactEmpNames=reactEmp.map(emp=>emp.name);
console.log("Employees with skill ReactJs:", reactEmpNames);