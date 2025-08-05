const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 50;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;

let addInsurance = true;

/** calculate shipping cost*/
if ((userAge < 21) && hasParentsApproval === false) {
     isOrderValid === false;
     console.log("invaild Order");
}

else if ((userAge <= 21) && hasParentsApproval === true) {
     shippingCost = shippingCost -5;
     console.log(`Since parent has approved, shipping cost is reduced by 5. New shipping cost is ${shippingCost}`);
}

else if ((userAge >= 65) ||  (userAge >= 21 && (hasPromoCode || hasParentsApproval === true || cartValue > 300 || points > 500))) {
     shippingCost = 0;
     isOrderValid === true;
     console.log(`Since parent has approved, shipping cost is reduced to 0. New shipping cost is ${shippingCost}`);;
}


/** take account of insurance */
if (addInsurance  && isOrderValid && hasPromoCode === false) {
     shippingCost += INSURANCE_COST
     isOrderValid === true;
}

console.log(shippingCost);


