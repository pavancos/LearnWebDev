const students = [
    { name: "ravi", marks: { maths: 89, physics: 70, chemistry: 88 } },
    { name: "bhanu", marks: { maths: 98, physics: 50, chemistry: 68 } },
    { name: "kiran", marks: { maths: 50, physics: 82, chemistry: 94 } }
];

const findH = (sub) => {
    const hiStud = students.reduce((hi, stu) => {
        const marks = stu.marks[sub];
        if (marks > hi.hiM)
            return { hiM: marks, names: [stu.name] };
        else if (marks === hi.hiM)
            hi.names.push(stu.name);
        return hi;
    }, { hiM: 0, names: [] }).names;
    
    return hiStud;
};

const highM = findH('maths');
const highP = findH('physics');
const highC = findH('chemistry');

console.log("Highest in Maths:", highM);
console.log("Highest in Physics:", highP);
console.log("Highest in Chemistry:", highC);
