
try {
    const fees = 1200;
    if (fees > 1000) {
        throw new Error("Fees Exceeded")
    }

} catch (error) {
    console.log(error.message);
    
    
}