function fetchRecord(details){
    console.log("Details Found");
    

}
function getDetails(details){
return fetchRecord(details);
}
try {
    getDetails(details);
} catch (error) {
    console.log("Server Error");
    
}