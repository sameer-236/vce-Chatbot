/*const marks=[56,67,78,89,90];
const result=marks.filter(myMarks)
console.log(result);


function myMarks(marks){
    return marks<=80;
}

let arr=[1,7,5,3,6,7,3];
let res=arr.filter((num)=>
     num > 4
)
//console.log(arr);
console.log(res);


const books=[
    {title:"Book One",genre:"History",publish:"1983"},

    {title:"Book two",genre:"History",publish:"1985"},

    {title:"Book three",genre:"fiction",publish:"1990"},

    {title:"Book four",genre:"History",publish:"1945"},

    {title:"Book five",genre:"fiction",publish:"1967"},

    {title:"Book six",genre:"nonfiction",publish:"1983"},

    {title:"Book seven",genre:"History",publish:"1985"},

    {title:"Book eight",genre:"physics",publish:"1983"},

]
let mybook=books.filter((num)=>num.genre ==="History")
console.log(mybook);
let userbook=books.filter((num)=> num.publish <=2000 && num.publish>=1986)
console.log(userbook)
    //console.log(num.genre);


///////////////////////////////  MAP METHOD//////////////////
mynum=[1,2,3,4,5,6,7,8,9,10];
const map=mynum.map((num)=> num + 10)////////  isme bhi  callback  function dena hota hai.....
console.log(map);    


///////  CHAINING  IN JS .//////////////

mynum=[1,2,3,4,5,6,7,8,9,10];
const chain=mynum.map((num)=> num *10) .map((num)=> num +2) .filter((num)=> num>=30);    // that is called chaining....
console.log(chain);*/



////////////////////////////  REDUCE   METHOD  ////////////////////////////
let num=[1,2,3];  /// here acc is accumulator and currval is currentvalue becoz reduce()method takes these two....
const red=num.reduce( function (acc,currval){ 
    console.log(`acc is ${acc} and currval is ${currval}`);   
return acc+currval;  
},0)
console.log(red);


let num2=[1,2,3,4,5];
let red2=num2.reduce(( acc,item) => acc+item,0)
//console.log(`acc: ${acc} item: ${item}`);
console.log(red2);

let shoppingCart=[
    {
        product:"shirt",
        price:233
    },
    {
        product:"pant",
        price:333
    },
    {
        product:"pajama",
        price:500
    
    },
    {
        product:"coat pant",
        price:5067

    },

]
let red3=shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(red3);






        


