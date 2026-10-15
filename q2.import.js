const {consultationFee,Patient,calculateBill} = require("./Q1")
console.log(consultationFee);
const ob = new Patient();
ob.showDetails("Veer");
console.log(calculateBill(1000));

