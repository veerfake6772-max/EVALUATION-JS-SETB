
const arr = (1000,200,150)
function calculateBill(){
    return (arr.reduce((sum,arr)=>{
    return sum+=arr
},0))
}
calculateBill(arr)
