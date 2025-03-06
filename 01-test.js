/*console.log("sam")
let a=34
console.log(a)
a=67
console.log(a)
const sam="sameeer"
console.log(sam)
let num=344
//console.log(typeof num)           // type conversion in js...
/*let change=String(num)
console.log(typeof change)*/

/*let name="sam"
console.log(typeof name)
change=Number(name)
console.log(typeof change)

console.log(3+5)

a=4
b=5
//console.log((a+=b))
a++
console.log((a))
b=b+5
console.log((b))*/


// Declaration  of object :>
/*my_obj={
    name:"sameer",
    age:21,
    gender:"male"
}
console.log(my_obj)

my_obj2={
    name:"sameermalik",
    rollno:207,
    universityRollNo:8060855

}
console.log(my_obj2)


//  Declaration of array:>
array=["hello","hi","hoo","hkou"]
console.log(array)*/

/*let obj={
    ciy:"delhi",
    cit:"mumbai",
    city:"Rohtak"
}
console.log(obj)
console.log(typeof obj)

let num=new Number(100)
console.log(num)*/

                                // NUMBER  METHODS:>
/*num=100;
//console.log(num.toFixed(2))
//str=num.toString()
//console.log(str.length)
//console.log(typeof str)
console.log(num.toExponential())
console.log(num.toPrecision(2))

console.log(Number.parseFloat("10"))
hello=Number.parseInt("10 years")
console.log(hello)
console.log(typeof hello)

num=Number.isSafeInteger(10)
console.log(num)*/

//console.log(Math)
//a=90
//console.log(Math.sin(90))
//console.log(Math.cos(90))
//console.log(Math.round(90.786556678))
//console.log(Math.random()*100)+1

                          // Declaration of Time:>
let d=new Date();
console.log(d)

const date=new Date(2025,3,12)
console.log(date)

let dat=new Date(2024,5,1,10,23,23)
/*console.log(dat)
console.log(dat.getDay())
console.log(dat.getHours())
console.log(dat.toDateString())
console.log(dat.getMilliseconds())
console.log(dat.getSeconds())*/
console.log(dat.toLocaleTimeString())
/*console.log(dat.toString())
console.log(dat.toLocaleString())
console.log(dat.toISOString())
console.log(dat.getMinutes())
console.log(dat.getFullYear())
console.log(dat.getHours())


///////////////////////////////// ARRAYS IN JAVASCRIPT:>///////////////////////////////////////////////////////////

/*let myArr=[34,56,79,90,67,"python","hello","javascript"]
console.log(myArr);
//console.log(myArr[5]);
//let newArr = new Array(1,4,7,8) 
//console.log(newArr) 
console.log(myArr.length) 
console.log(myArr.toString())
console.log(typeof myArr) 
console.log(myArr.at(4))
p=myArr.pop()
console.log(myArr)
myArr.push("sameer")
console.log(myArr) 
myArr.push(6,7,8,"sam")
console.log(myArr)*/  

/*let fruits=["Banana","Apple","Mango"]
s=fruits.shift()
console.log(fruits);
t=fruits.unshift("lemon")
console.log(fruits)*/

/*const fruits=["banana","apple","lemon"]
let splice=fruits.splice(1,3);  // splice method removes an element and returns new array...
console.log(fruits)

let cars=["mahindra","scorpio","alto","tata"]
s=cars.slice(0,2)
console.log(s)
console.log(cars) /// slice method original array m koi change nhi krta....


const marvel_heroes=["thor","superman","batman","captain","hulk"];
const india_heroes=["shaktiman","man","hero"];
//marvel_heroes.push(india_heroes);
//console.log(hero);
console.log(marvel_heroes);
let hero=marvel_heroes.concat(india_heroes)  //// Concat method
console.log(hero)*/

                                  ///////// Spread Method:>/////
/*let hero2=[...marvel_heroes,...india_heroes]     /// this is called  spread method
console.log(hero2);

let data1=["sameer",21,"btech"];
let data2=["sam",22,"bca"];
let spread=[...data1,...data2];
console.log(spread);*/


/*const newarr=[6,7,[5,6,"sam"],5,78,["sam","sameer",7,[67,78,["sam"]]],78,89];
const flat=newarr.flat(4);      /// flat method
console.log(flat)*/


//////////////////////////////////////////// Check something array or not ///////////////////////////////////////////////////
/*console.log(Array.isArray("sameer"))
console.log(Array.from("sameer Malik"))  /// Make Array by from()////////////////////////////
console.log(Array.isArray([56,78,"sam"]))*/


for(i=1;i<=5;i++){
    console.log(" ")

    
    for(j=1;j<=i-1;j++){
        console.log("X");
        
    }
   
   
   
}