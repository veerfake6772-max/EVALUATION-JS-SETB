class Patient{
     id;
     name;
     age;
     disease;

     constructor(id,name,age,disease){
        this.id = id;
        this.name= name;
        this.age = age;
        this.disease = disease;

     }
     displayInfo(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
        console.log(this.disease);
        
     }

 
}
const ob = new Patient(1,"Veer",22,"Fever");
ob.displayInfo();