const student = {
    name: 'Pavan',
    rollNo: '22501A05E0',
    marks:[98,89,92,90,94],
    getAvg:function(){
        return (this.marks.reduce((ac,e)=> ac+e)/5);
    },
    address:'Srinagar Colony'
};
console.log(student.getAvg());