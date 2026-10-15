"use strict";
class Department {
    departmentName;
    departmentId;
    floorNumber;
    constructor(departmentName, departmentId, floorNumber) {
        this.departmentName = departmentName;
        this.departmentId = departmentId;
        this.floorNumber = floorNumber;
    }
    showInfo() {
        console.log(this.departmentName);
        console.log(this.departmentId);
        console.log(this.floorNumber);
    }
}
const department = new Department("Surgery", 1, 3);
department.showInfo();
