Employees = []
function employee(id,name,position,department){
    this.id = id;
    this.name=name;
    this.position=position;
    this.department=department;
}
function addEmployee(id,name,position,department){
    employ = new employee(id,name,position,department);
    Employees.push(JSON.stringify(employ));
    console.log("employee add Succesfully");
}
function listEmployees(){
    for(let emp of Employees){
        emp = JSON.parse(emp)
        console.log(emp["name"])
    }
}
function findEmployee(id){
    let found = false;
    for(let emp of Employees){
        emp = JSON.parse(emp)
        if (emp["id"] == id){
            console.log(emp);
            found = true;
        }
    }
    if ( found == false) {
    console.log( "no employee with that id");
} }
function updateEmployee(id, newName,newPosition,newDepartment){
    let found = false;
    for(let emp of Employees){
        emp = JSON.parse(emp)
        if (emp["id"] == id){
            emp["name"]= newName;
            emp["department"] = newDepartment;
            emp["position"] = newPosition;
            let new_emp = JSON.stringify(emp);
            index = Employees.indexOf(JSON.stringify(emp))
            Employees.splice(index,1,new_emp)
            console.log("Updated Successfully");
            found = true;
        }
    }
    if ( found == false) {
    console.log( "no employee with that id");
}
}
function deleteEmployee(id){
    let found = false;
    for(let emp of Employees){
        emp = JSON.parse(emp)
        if (emp["id"] == id){
        Employees.splice(Employees.indexOf(JSON.stringify(emp)),1)
        console.log("Succesfully Deleted");   
        found = true;
        }
    }
    if ( found == false) {
    console.log( "no employee with that id");
}    
} 
addEmployee(1,"Abrham","Student","CS");
addEmployee(2,"Yishak","Student","CS");
addEmployee(3,"Meron","Student","CS");
listEmployees();
updateEmployee(3,"Yonatan","Teacher","IS");
listEmployees();
findEmployee(2);
deleteEmployee(2);
console.log(Employees);


