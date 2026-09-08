function vacation(groupCount, groupTupe, day ) {

let price = 0;
let totalPrice = 0;

switch (day) {
    case 'Friday':
        if (groupTupe === 'Students') {
            price = 8.45            
        }else if (groupTupe === 'Business') {
            price = 10.90 
        }else if (groupTupe === 'Regular') {
            price = 15 
        }
        break;
    case 'Saturday':
        if (groupTupe === 'Students') {
            price = 9.80            
        }else if (groupTupe === 'Business') {
            price = 15.60 
        }else if (groupTupe === 'Regular') {
            price = 20 
        }
        break;
    case 'Sunday':
        if (groupTupe === 'Students') {
            price = 10.46            
        }else if (groupTupe === 'Business') {
            price = 16 
        }else if (groupTupe === 'Regular') {
            price = 22.50 
        }
        break;

}
if (groupTupe === 'Students' && groupCount >= 30) {
    totalPrice = (price * groupCount) * 0.85
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}else if (groupTupe === 'Business' && groupCount >= 100) {
    totalPrice = price * (groupCount - 10)
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}else if (groupTupe === 'Regular' && (groupCount >= 10 && groupCount <= 20) ) {
    totalPrice = (price * groupCount ) * 0.95
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}else{
    totalPrice = (price * groupCount)
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}

}
vacation(40,

"Regular",

"Saturday")
