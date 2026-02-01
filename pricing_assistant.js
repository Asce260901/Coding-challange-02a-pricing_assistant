let productName = "Sand"
let costPerUnit = 26.35;
let basePrice = 59.12;
let discountRate = 0.05;
let salesTaxRate = 0.075;
fixedMonthlyCost = 1500;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0 ;

console.log( "Product:" +  productName,)
console.log(`Price after discount:$${discountedPrice}`,) 
console.log(`Final Price:$${finalPriceWithTax}`,)
console.log(`Profit:$${profitPerUnit}`,)
console.log("Break Even Units:" + breakEvenUnits,)
console.log("Is Profitable?:" + isProfitablePerUnit,)