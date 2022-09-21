function calculateBill(total, tax = 0.13, tip = 0.15) {
    // tax = tax || 0.13;
    //tip = tip || 0.15;
    return total + (total * tax) + (total * tip);
}
const totalBill = calculateBill(100, undefined, 0.17)
console.log(totalBill);