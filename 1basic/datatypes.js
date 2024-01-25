// there are 2 types of Datatypes
// primitive (call by value)
// non-primitive (call By Reference)

// 7 primitive datatypes
// number , string , boolean , null , undefined , symbol , Bigint
let number = 1
let string = "hello"
let bool = true
let nullvalue = null
let kartik;
const id = symbol('123')
let bignumber = 34567890n;

// const newid = symbol('123')

// console.log(id === newid);

// console.log(typeof syblvalue);


// 3 non-primitive datatypes
// Array , Object,  function

const hero = ["marvel", "dc" ,"south"] //array

 const objectvalue = {
    name:'kartik',
    age: 66,
    Myjob: 'web',
}

const Myfunction = function(){
    console.log("hello world")
}
console.log(typeof hero)
console.log(typeof objectvalue)
console.log(typeof Myfunction)