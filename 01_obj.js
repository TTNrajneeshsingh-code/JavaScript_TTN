// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");


var f = function() {
    return ;
}

console.log(f());

var obj = {
    b : '2',
    c:  '3' ,
    a : '1',
    d : '4'
}


console.log(Object.keys(obj))

for (var key in obj){
    console.log(`key = ${key} value ${obj[key]}`)
}


console.log()

obj['b'] = '1'
obj['c'] = '2'
obj['a'] ='3'
obj['d'] = '4'

for (var key in obj){
    console.log(`key = ${key} value ${obj[key]}`)
}


console.log()

var obj1 = {
    'b2' : 2,
    'c3':  3,
    'a1' : 1,
    'd4' : 4,
}


for (var key in obj1){
    console.log(`key = ${key} value ${obj1[key]}`)
}

console.log()

var obj2= {
    '2b' : 'b',
    '3c' : 'c',
    '1a' : 'a',
    '4d' : 'd'
    
}


for (var key in obj2){
    console.log(`key = ${key} value ${obj2[key]}`)
}

var obj3= {
    abc : '1'
}

obj3.efg = '3';
obj3['whjw'] = '2';



for (var key in obj3){
    console.log(`key = ${key} value ${obj3[key]}`)
}

console.log(obj3)


// *********************************************************************

var x = {
    x1 : 123,
}, y = {
    y2 : 456
}


var obj4 = {a : 1 , b: 2}

obj4[x] = 111

obj4[y] = 222

console.log(obj4[x]);

//Object literal ,constructor ,  singleton
// Object.create


const mySym = Symbol("KEY1")


const jsUser = {
    firstName : "Rajneesh",

    "full Name" : "Rajneesh Singh",
    age : 22,
    location : "Noida",
    email : "abc@gmail.com",

    isLoggedIn : false,
    lastLoginDays : ['Mon','Tues'],

    // mySym : "myKey1",

    [mySym] : "myKey1",

    

}


console.log(jsUser.firstName)
console.log(jsUser['full Name'])
// console.log(typeof jsUser.mySym , jsUser.mySym)
console.log( jsUser[mySym])

jsUser.email = "raj@gmail.com";
// Object.freeze (jsUser)

jsUser.email = "rohan@gmail.com"
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(jsUser.greeting())