class InvalidPatientException extends Error{
    constructor(message){
        super(message)
        this.message="Invalid Id"
    }
}
    
function Patient(id){
if (id !="2") {
    throw new InvalidPatientException("Invalid Id")
}else{
    console.log("Valid ");
    
}
}

try {
    Patient("1");

} catch (error) {
    console.log(error.message);
    
    
}