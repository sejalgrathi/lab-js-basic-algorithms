// Iteration 1: Names and Input

let hacker1="Ravi";
let hacker2="John";
console.log("The driver's name is ${hacker1}");
console.log("The navigator's name is ${hacker2}");
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has ${hacker1.length} characters.");
}
else if(hacker1.length < hacker2.length)
  console.log("It seems that the navigator has the longest name, it has ${hacker2.length} characters.");
}
else{
  console.log("Wow, you both have equally long names, ${hacker1.length} characters!");
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals
let newDriverName = "";
for(let i=0; i < hacker1.length; i++) {
  newDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriverName.trim());
console.log(hacker1.toUpperCase().split("").join(" "));

//3.2 Print all the characters of the navigator's name, in reverse order.

let newNavigatorName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}
console.log(newNavigatorName);
console.log(hacker2.split('').reverse().join(''));

// 3.3 Depending on the lexicographic order of the strings, print:

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 
