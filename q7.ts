class Department {
    departmentName: string; departmentId: number; floorNumber: number;
    constructor(departmentName: string, departmentId: number, floorNumber: number) {
        this.departmentName = departmentName;
        this.departmentId = departmentId;
        this.floorNumber = floorNumber;

    }
    showInfo(){
        console.log(this.departmentName);
        console.log(this.departmentId);
        console.log(this.floorNumber);

        
    }
}
const department = new Department("Surgery",1,3);
department.showInfo();
