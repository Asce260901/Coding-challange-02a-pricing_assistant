let productName = "Sanding pad";
let costPerUnit = 26.35;
let basePrice = 59.12;
let discountRate = 0.05;
let salesTaxRate = 0.075;
let fixedMonthlyCost = 1500;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0 ;

console.log( "The product is:" +  productName,);
console.log(`The price after discount:$${discountedPrice}`,);
console.log(`The client pays in total:$${finalPriceWithTax}`,);
console.log(`Your profit:$${profitPerUnit}`,);
console.log("The breakeven units are:" + breakEvenUnits,);
console.log("Is it profitable to the company?:" + isProfitablePerUnit,);