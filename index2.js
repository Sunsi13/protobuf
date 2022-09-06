const schema=require('./employee_pb');
const fs=require('fs');

var e1=new schema.Employee();
e1.setId(1);
e1.setName('Oumar');
e1.setSalary(8800);
var e2=new schema.Employee();
e2.setId(2);
e2.setName('Hadi');
e2.setSalary(2990);
var e3=new schema.Employee();
e3.setId(3);
e3.setName('habib');
e3.setSalary(3000);

let employees=new schema.Employees();
employees.addEmployee(e1);
employees.addEmployee(e2);
employees.addEmployee(e3);
const dataProto=employees.serializeBinary();
console.log(dataProto);
fs.writeFileSync('data.proto',dataProto);


