//#Primitive
// 7 types string, Number, Boolean, null, undefined, Symbol, 



//javaScript is dynamically typed

// const isLoggedIn=false
// const outsideTemp=null

// const id=Symbol('123')
// const anotherId=Symbol('123')// both are unique value

// const bigNumber=3444555656959549n

//Rrefrence type non primitive 
// Arrays, objects, Functions

// const heros=["shaktiman","nagraj","doga"];
// //objects
// let myObj={
//     name:"saurabh",
//     age:21,
// }

//functions

//  const myFun=functions()
//  {
//     console.log("Hello World");
    
//  }

//  console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack( primitive-- copy), heap (non primitive--refrence)

// let myUtName="saurabhTiwari"
// let anotherNAme=myUtName
// console.log(anotherNAme);

// anotherNAme="hitesh"
// console.log(myUtName);
// console.log(anotherNAme);

let userOne={
    name: "saurabh",
    email: "saurabh.google.com"
}
let userTwo=userOne

userTwo.email="hitesh.google.com"

console.log(userOne.email);
console.log(userTwo.email);

// All primitive values goes to stack








 
