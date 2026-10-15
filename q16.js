function book(doctor){
if (!doctor) {
    console.log("Unavailable");
    
}else{
console.log("Available ");
}


}

try {
    book(false)
} catch (error) {
    console.log(error.message);
    
}