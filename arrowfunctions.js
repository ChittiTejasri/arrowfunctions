// Arrow function:without Input and Without Return.
// 1.Print a Welcome Messages.
let message = () => {
    console.log("Welcome to Programming")
};
message()
// ----------------------------------------------------------------

// 2.Print Multiplies of 6 from 1 to 6.
console.log("-----Print Multiplies of 6 from 1 to 6-----------")
let multipliesofSix = () => {
    for(let i = 6; i <= 60; i = i + 6){
        console.log(i);
    }
};
multipliesofSix();
// --------------------------------------------------------------------

// 3.Print Strong Numbers from 1 to 500.
console.log("--------Print Strong Numbers from 1 to 500----------")
let StrongNumbers = () => {
    for(let n = 1; n <= 500; n++){
        let temp =n;
        let sum = 0;

        while(temp > 0){
            let digit = temp % 10;
            let fact = 1;
            for(let i = 1; i<= digit; i++){
                fact = fact * i
            }
            sum = sum + fact;
            temp = Math.floor(temp / 10);
        }
        if(sum == n){
            console.log(n)
        }
    }
}
StrongNumbers();

// ----------------------------------------------------------------------------


// Arrow function:with Input and without Return.
//4.covert days into Hours.
console.log("-----------covert days into Hours------------------")
let daysToHours = (days) => {
    console.log("Hours =",days * 24);
};
daysToHours(5)

// -----------------------------------------------------------------------

//5.Calculate Total Price After Tax.
console.log("---------Calculate Total Price After Tax------------")
let totalprice = (price,tax) => {
    let taxAmount = price * tax / 100;
    let total = price + taxAmount;

    console.log("TaxAmount =",taxAmount);
    console.log("Total =",total);
};
totalprice(1000,18)

// ------------------------------------------------------------------------------

// 6.Check whether three angle from a Traingle.
console.log("---------Check whether three angle from a Traingle---------------")
let threeAngle = (a,b,c) => {
    if(a + b + c === 180 && a > 0 && b > 0 && c > 0){
        console.log("Valid Traingle")
    } else {
        console.log("Not a Valid Traingle")
    }
};
threeAngle(60,70,50);

// ---------------------------------------------------------------------

// Arrow function:Without Input and With Return.
// 7.Return the Number of Days in a Week
console.log("---------Return the Number of Days in a Week------------")
let daysinweek = () => {
    return 7;
};
let result = daysinweek();
console.log("Days in Week =",result)

// ---------------------------------------------------------------

// 8.Find the sum of multiplies of 5 from 1 to 50.
console.log("--------------Find the sum of multiplies of 5 from 1 to 50-------------------------")
let sumMultiplies = () => {
    let sum = 0;
    for (let i = 1; i <= 50; i = i + 1){
        if(i%5===0){
            sum = sum + i
        }
    }
    return sum;
};
let res = sumMultiplies()
console.log("Sum =",res)

// -----------------------------------------------------------------------------------------

// 9.Return Number of Digits in a Fixed Number.
console.log("------------Return Number of Digits in a Fixed Number-----------------")
let countDigits = () => {

    let n = 987654321;
    let count = 0;

    while(n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    return count;
};

let ans = countDigits();

console.log("Number of Digits =", ans);

//----------------------------------------------------------------------------

// Arrow function:With Input and With Return.
// 10.Convert Kilograms to Grams
console.log("--------Convert Kilograms to Grams-----------")
let kgToGram = (kg) => {
    return kg * 1000;
};

let answer = kgToGram(4);

console.log("Grams =", answer);

// ----------------------------------------------------------------

// 11.Calculate the Perimeter of a Rectangle
console.log("----------Calculate the Perimeter of a Rectangle----------")

let rectanglePerimeter = (length, width) => {
    return 2 * (length + width);
};

let rectangle = rectanglePerimeter(12, 8);

console.log("Perimeter =", rectangle);

// --------------------------------------------------------------------------

// 12.Find the HCF of Three Numbers
console.log("--------Find the HCF of Three Numbers---------")
let hcfThree = (a, b, c) => {

    let hcf = 1;

    let smallest = Math.min(a, b, c);

    for(let i = 1; i <= smallest; i++) {

        if(a % i === 0 && b % i === 0 && c % i === 0) {
            hcf = i;
        }
    }

    return hcf;
};

let hcf = hcfThree(24, 36, 48);

console.log("HCF =", hcf);
