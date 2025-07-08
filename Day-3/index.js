let students =[
    {name:"Ali" , marks: 45},
    {name:"reema" , marks: 5},
    {name:"kohli" , marks: 45},
];

console.log("Passed")
let passed = students.filter( (x) => x.marks >= 35).forEach(x=>console.log(x))
console.log("Failed")
let failed = students.filter(x=>x.marks<35).forEach(x=>console.log(x))