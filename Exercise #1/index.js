// 1 write a variable without initial value
var a;
console.log(a);
// 2 write a variable with initial value
var b="Ayah";
console.log(b);
// 3 write 3 variables in same line without initial value
var c,d,e;
// 4 write 3 variables in same line with initial value
var f="Ayah", j="lana", h="tala";
// 5 write 3 variables with Boolean value
var i=true ,g=false , k=true;
// 6 write a constant
const z="ayah";
// 7 write an empty array without initializing its size
let array=[];
// 8 write an array of number from 1 to 10
let array1=[1,2,3,4,5,6,7,8,9,10];
// 9 write an array of strings has letters from A to J
let array2=["A","B","c","d","e","f","g","h","i","j"];
console.log(array2);
// 10 Write an Object has at least 3 attributes (keys) and give each one a numeric value
let ob1={a:'1',b:'2',c:'3'};
console.log(ob1.a);
// 11 write an object has at least 3 attributes (keys) and give each one a string value
let ob2={a:'Ayah',b:'bayan',c:'jana'};
console.log(ob2.b);
// 12 write an object has at least 3 attributes (keys) and give each one a Boolean value
let ob3={a:true,b:false,c:true};
console.log(ob3.c);
// 13 write an object has at least 3 attributes (keys) and give each one an array value
let ob4= {a:[1,2,3] ,b :["A","B","c"] , c:["d","e","f"]}
// 14 write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
let ob5= {a:{x1:1,x2:2} ,B:{x3:1,x4:2},c:{x5:1,x6:2}};
// 15 Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object
let ob6={a:1,b:'Ayah',c:true,c:[1,2,3,'Aya'],d:{e:1,f:6}};
// 16 Write an array of objects
let array3=[{a:5, b:6},{c:"Ayah",e:"jana"}];
// 17 write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object
let array4= [{a:{c:[1,2,3,{b:"aya"}]}},[{c:{d:[1,2,3,{b:"ayah"}]}}]];
// 18 Write a function to sum two numbers passed in parameters
function sum (n1, n2) {
    return sum= n1 + n2;
 }
 sum(5,2);
 console.log(sum);
// 19 write a function to multiply two numbers
function mult (n3, n4) {
    return mult = n3 * n4;
 }
 mult(5,2);
 console.log(mult);

// 20 write a function to sum two numbers entered by user
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var sum = (a+b);
       console.log('\n');
       console.log('The sum of ',a, ' and ',b, ' is ' , sum,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});

// 21 write a function to multiply two numbers entered by user
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (z) {
   rl.question('Enter  second value : ', function (n) {
  var a = parseInt(z);
  var b = parseInt(n);
        var mult = (a*b);
  
       console.log('\n');
       console.log('The multiply of ',a, ' and ',b, ' is ' , mult,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});


// 22 Write a function to return a value
function myData() { 
    return 123; 
 } 
 console.log(myData()); // 123 
 
 function myValue() { 
 } 
 console.log(myValue()); // undefined 

// 23 Write a function to print a value
function hello(name) {
    console.log("hello " + name);
}
hello(" node js");