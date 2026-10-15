

const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"jsevaluation"
})

function connectDB(){
    db.connect((err)=>{
        if (err) {
            console.log(err);
            
        }else{
            console.log("connected");
            
        }
    })
}
connectDB();

function displayData(){
    try {
        db.query("select * from emp",(err,data)=>{
        if (err) {
            console.log(err);
            
        }else{
            console.log(data);
            
        }
    })
    } catch (error) {
        console.log(error);
        
    }
    
}
displayData();

function insertData(name,salary){
    try {
        const user = {name,salary};
        db.query("insert into emp set?",user,(err)=>{
        if (err) {
            console.log(err);
            
        }else{
            console.log("inserted");
            
        }
    })
    } catch (error) {
        console.log(error);
        
    }
    
}


insertData("Veer",450000);

function updateData(name,salary,id){
    try {
    
        db.query("update emp set name=?, salary =? where id = ?",[name,salary,id],(err)=>{
        if (err) {
            console.log(err);
            
        }else{
            console.log("Updated");
            
        }
    })
    } catch (error) {
        console.log(error);
        
    }
    
}
// updateData("Jerry",10000,4);

function deleteData(id){
    try {
    
        db.query("delete from emp where id = ?",[id],(err)=>{
        if (err) {
            console.log(err);
            
        }else{
            console.log("deleted");
            
        }
    })
    } catch (error) {
        console.log(error);
        
    }
    
}

// deleteData(5);
// displayData();
