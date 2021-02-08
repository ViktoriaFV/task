const students = [
    {name: 'Olha', gender: 'female'},
    {name: 'Oleh', gender: 'male'},
    {name: 'Kristi', gender: 'female'}
];
function result(students){
    
    const result = {};
    

    const studentsFemale = students.filter((student) => student.gender.includes('female'));
    const studentsMale = students.filter((student) => student.gender.includes('male')) ;

 result ['female', 'male'] = {studentsFemale, studentsMale};
 result ['male'] = studentsMale;
 return result;
}

 console.log(result(students));