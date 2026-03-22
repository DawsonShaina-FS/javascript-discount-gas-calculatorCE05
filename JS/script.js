//initial alert welcoming the user 
alert("Hello and welcome to the Discount Double Check!");

//alert explaining what is going to be done
alert("I'm going to ask you for the price of two items, then calculate your total including any discounts that apply!");

//prompting the user for the cost of the first item
let firstItem = parseFloat(prompt("What is the cost of the first item?", "Ex: 2.50"));

//prompting the user for the cost of the second item
let secondItem = parseFloat(prompt("What is the cost of the second item?", "ex: 4.00"));

//calculating and capturing the total in a variable
let total = firstItem + secondItem;

//alerting the user to an invalid input 
if (isNaN(firstItem) || isNaN(secondItem)) {
    alert("Invalid input, please enter valid numbers.");
}
else if (total >= 100) {
    let finalCost = 0.90 * total;
    document.querySelector("#finalTotal").innerHTML = `Your total purchase is ${finalCost.toFixed(2)} which includes a 10% discount!`;
    document.querySelector("#finalTotal").className = "firstclass";
}
else if (total >= 50 && total < 100) {
    let finalCost = 0.95 * total;
    document.querySelector("#finalTotal").innerHTML = `Your total purchase is ${finalCost.toFixed(2)} which includes a 5% discount!`;
    document.querySelector("#finalTotal").className = "firstclass";
}
else if (total < 50) {
    let finalCost = total;
    document.querySelector("#finalTotal").innerHTML = `Your total purchase is ${finalCost.toFixed(2)}.`;
    document.querySelector("#finalTotal").className = "secondclass";
}

//FUEL CALCULATOR

alert("Lets find out if you can cross the desert with your current gas level, or if you need to stop for gas!")

let tankCapacity = parseInt(prompt("What is the maximum number of gallons your car's gas tank can hold?"));

let currentGas = parseFloat(prompt("How full is your gas tank (in %"));

let mPG = parseInt(prompt("How many miles per gallon does your car get?"));

let milesLeft = tankCapacity * (currentGas / 100) * mPG

