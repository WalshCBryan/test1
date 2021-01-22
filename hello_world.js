let test="hello world"

console.log(test)

function runit(string) {
    console.log(string);
}

function add(num1, num2) {
    return (num1 + num2);
}

function multiply(num1, num2){
    return (num1 * num2);
}

function divide(num1, num2){
    if (num2 == 0) {  
        console.log("cannot divide by zero ya dingus") } 
    else {
    return (num1 / num2);
}}

let phrase = "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.";
let splitphrase = new Array();

function split() {
splitphrase = phrase.split(" ");
document.write(splitphrase.join(" <br> "));
}



function addTheNums([nums]){
    var total = 0;
    for(i = 0; i < nums.length; i++){
    total += nums[i]; }
    return total;
}
