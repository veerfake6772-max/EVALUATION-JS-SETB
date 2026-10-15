
class Receptionist {
    name;
    employeeid;
    department;
    experience;
    constructor(name, employeeid,department,experience) {
        this.name = name;
        this.employeeid = employeeid;
        this.department = department;
        this.experience = experience
    }
    displayInfo() {
        console.log(this.name);
        console.log(this.employeeid);
        console.log(this.department);
        console.log(this.experience);
    }
}
const receptionist = new Receptionist("Veer", 101, "Nerrology", "4 years");
receptionist.displayInfo();
