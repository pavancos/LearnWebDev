let Data = require('./first');
let student = {
    name: 'Pavan',
    semester: 5,
    marks: Data.marks,
    totalMarks: Data.calcTotalMarks(Data.marks)
};
module.exports = { student };