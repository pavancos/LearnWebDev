import employees from "./employee.js";
let hydEmp=employees.filter(emp=>emp.address.city.toLowerCase()==="hyderabad");
let hydEmpNames=hydEmp.map(emp=>emp.name);
console.log(hydEmpNames);