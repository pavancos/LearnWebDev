class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getSalary(){return this.salary}
}
const employee1 = new Employee('Abc', 30, 50000);
const employee2 = new Employee('Def', 35, 60000);
const employee3 = new Employee('Ghi', 25, 45000);
const employee4 = new Employee('Jkl', 28, 55000);
const employee5 = new Employee('Mno', 40, 70000);

console.log(employee1.name," Salary:", employee1.getSalary());
console.log(employee2.name," Salary:", employee2.getSalary());
console.log(employee3.name," Salary:", employee3.getSalary());
console.log(employee4.name," Salary:", employee4.getSalary());
console.log(employee5.name," Salary:", employee5.getSalary());