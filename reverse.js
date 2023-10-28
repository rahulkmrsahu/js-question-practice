//WAP in JS 



let str = "Rahul is good boy"

let n = str.length // to find the length of the string

//console.log(n)

let reverseStr = ""

for (let i = n - 1; i >= 0; i--) { // Reverse for loop 
    reverseStr += str[i];
}

console.log(reverseStr) // print the reverse outPut: luhar