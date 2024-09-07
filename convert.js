// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}


// with remaining inch
function inchToFeet2(inch){
    const feet = parseInt(inch / 12);
    const remainingInch = inch % 12;
    return `${feet} ft ${remainingInch} inch`;
}

const shovoHeight = inchToFeet(75);
// console.log(shovoHeight);
const shovoHeight2 = inchToFeet2(18);
// console.log(shovoHeight2);




// miles to Kilometer
function mileToKilo(mile){
    const kilometer = mile * 1.60934; 
    return `${kilometer.toFixed(1)} Kilometer`;
}

console.log(mileToKilo(11)); 