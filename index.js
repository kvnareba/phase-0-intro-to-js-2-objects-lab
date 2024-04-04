// Write your solution in this file!

const employee = {
    name: "George"
    streetAddress: "430 main street"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee{key} = value;
    return updatedEmployee;
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAdress", "432 town street");
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee{key} = value
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee = {...employee};
    delete deleteEmployee{key};
    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee{key};
    return employee;
}
    
}