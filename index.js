const fs=require('fs')
var employees=[];
const  xmljs=require('xml-js');
employees.push({
    id:1,
    name:'Sounoussy',
    salary:20000
});

employees.push({
    id:2,
    name:'Diallo',
    salary:25000
});

employees.push({
    id:3 ,
    name:'Alpha',
    salary:55000
});
var employeesList={employee :employees}
var jsonData=JSON.stringify(employeesList);
console.log(jsonData);
var options={compact : true, space : 4};
var xmlData=xmljs.js2xml(employeesList,options);

fs.writeFileSync('data.json',jsonData );
fs.writeFileSync('data.xml',xmlData );