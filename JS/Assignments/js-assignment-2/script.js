// Creating Variables for Different Data Types
let sellerName = "Muhammad Noman";
let sellerCity = "Peshawar";
let sellerAge = 18;
let watchPrice = 15000;
let isDealFInalized = false;
let pendingTaxAmount = null;
let discountCoupon;

let buyerName = "Amad Afridi";
let buyerCity = "Peshawar";
let buyerAge = 20;
let buyerOffer = Number(prompt("Welcome, Mr. Amad, Kindly Drop Your Offer"));


// Displaying All Information in Console Tab
console.log("Seller Name Type:", typeof sellerName);
console.log("Seller Age Type:", typeof sellerAge);
console.log("Watch Price Type:", typeof watchPrice);
console.log("Finalized Deal Type:", typeof isDealFInalized);
console.log("Pending Tax Amount Type:", typeof pendingTaxAmount);
console.log("Discount Coupon Type:", typeof discountCoupon);

// String Conversion Into a Number
let priceString = "15000";
let convertedPrice = Number(priceString);
console.log("Converted String to Number:", convertedPrice, "Type:", typeof convertedPrice);

// Number Conversion Into a String
let convertedOfferString = String(buyerOffer);
console.log("Converted Number to String:", convertedOfferString, "Type:", typeof convertedOfferString);

let termsAgreedString = "true";
let convertedAgreement = Boolean(termsAgreedString);
console.log("Converted String to Boolean:", convertedAgreement, "Type:", typeof convertedAgreement);

// Invalid Number Conversion: Converting a Non-Numeric String Into a Number
let stringConversion = Number(buyerCity);
console.log("Converted City 'Peshawar' to Number:", stringConversion, "| Type:", typeof stringConversion);

// Boolean Conversion Method
let booleanFromZero = Boolean(0);
let booleanFromOne = Boolean(1);
console.log("Converted 0 to Boolean:", booleanFromZero, "| Type:", typeof booleanFromZero);
console.log("Converted 1 to Boolean:", booleanFromOne, "| Type:", typeof booleanFromOne);

// Conditional Statement: Totally Depends on Buyer's Offer
console.log("Marketplace Deal Status");
if (buyerOffer === watchPrice) {
    isDealFinalized = true;
    console.log(buyerName + " bought the watch from " + sellerName + " for Rs. " + watchPrice);
} else {
    let difference = watchPrice - buyerOffer;
    console.log("Deal Declined! " + buyerName + "'s offer is Rs. " + difference + " short of " + sellerName + "'s asking price.");
}

document.write("<h1>Marketplace Deal Status</h1>");
if (buyerOffer === watchPrice) {
    isDealFInalized = true;
    document.write("Deal Done! " + buyerName + " bought the watch from " + sellerName + " for Rs. " + watchPrice);
} else {
    let difference = watchPrice - buyerOffer;
    document.write("Deal Declined! " + buyerName + "'s offer is Rs. " + difference + " short of " + sellerName + "'s asking price.");
}