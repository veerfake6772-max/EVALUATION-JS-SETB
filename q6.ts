function getPatientInfo<T>(a:T):T{
    return a;
}

console.log(getPatientInfo<string>("Veeresh"));
console.log(getPatientInfo<number>(1));