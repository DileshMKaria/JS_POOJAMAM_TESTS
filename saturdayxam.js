let Myname = "Dilesh";
{
    console.log(Myname)
}
// primitive type
// Boolean
var x = 34;
var y = 56;
z = x < y;
document.getElementById('res').innerHTML = z;

// string
// string method in javascript
let mylovelystring = "smart boy is good boy";
console.log(mylovelystring.length);
d = mylovelystring.replace("smart", "cute");
// d = mylovelystring.replace("good", "bad");
console.log(d, mylovelystring);

//  Number
let length =16;
let weight = 7.5;
console.log(length);
console.log(weight);

// undefined
let =undefined;
console.log(undefined);

// function fruits();
// {
// const  fruits = ["Apple", "banana", "chickoo", "kiwi"];
// console.log(fruits);
// }

// even odd number
//  let number = prompt("enter number");
//  if (number % 2 == 0){
//     console.log("number is even");
//  }
//  else
//  {
//     console.log("number is odd")
//  }

//  let fruits =["mango,banana tometo"];
//  console.log(fruits)


// looop
for(i = 1;i <=10; i++){
    console.log(i)
}

const girls = ["prachi","pragati","bhumi","sonu"];
girls.push("manasi");
console.log(girls);
delete girls[0];
console.log(girls);

// sort
const girl4 = ["aarchi","pragati","bhumi","sonu"];
girl4.sort();
console.log(girl4);

// 3 reverse
 
const arr1= ["khyati","swati","nyati"]
arr1.reverse(function(a,b){
    return a-b
})
console.log(arr1)
