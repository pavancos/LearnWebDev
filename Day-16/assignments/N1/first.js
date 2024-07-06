let marks = [96, 95, 89, 79, 90];

function calcTotalMarks(marksArray) {
    return marksArray.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { marks, calcTotalMarks };