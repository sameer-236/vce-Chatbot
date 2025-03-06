/*isLoggedIn=2;
if(isLoggedIn==true){
    console.log("user loggedIn");
}else{
    console.log("no");
}


/////////////////////////////  else if  ladder ////////////////////////////////////////////////
a=100;
b=89;
c=90;
if(a>b && a>c){
    console.log("a is greater");

}
else if(b>a && b>c){
    console.log("b is greater");
}
else{
    console.log("c is greater");
}


////////////////////////////////////  SWITCH CASE   //////////////////////////////////////////:
let month=9;
switch (month) {
    case 1:
        console.log("this is january");
        break;
    case 2:
        console.log("this is feb");
        break;
    case 3:
        console.log("this is march");
        break;
    case 4:
        console.log("this is april");
        break;
    case 5:
        console.log("this is may");
        break;
    case 6:
        console.log("this is june");
        break;
    case 7:
        console.log("this is july");
        break;
    case 8:
        console.log("this is august");
        break;
    case 9:
        console.log("this is sept");
        break;
    case 10:
        console.log("this is october");
        break;
    case 11:
        console.log("this is november");
        break;
    case 12:
        console.log("this is december");
        break;

    default:
        console.log("yha nhi hai.......")
        break;
}*/



////////////////////////////////////   Checking  array and object empty  ////////////////////////////:
/*let emptyArr=[];
if(emptyArr.length==0){
    console.log("empty array");
}


let emptyObj={};
if(Object.keys(emptyObj).length==0){
    console.log("empty obejct");
}*/



///////////////////////////////////////////////  TERNARY   OPERATOR /////////////////////////////////:>
// SYNTAX:>
//condition ? true : false

//const p=100;
//p <=80 ? console.log("hello") : console.log("hi");



////////////////////////////////////////  LOOPS  //////////////////////////////////////////////////
/*for(let i=0 ; i<=10; i++){
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    const element = i;
    console.log(element);
}*/

///////////////////////////////////  NESTED  FOR ////////////////////////////////////
/*for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){

        console.log( i*j);
    }
}*/


/*myArr=["sameer","sam","malik","hi",89];
console.log(myArr.length)
for(i=0;i<myArr.length;i++){
    console.log(myArr[3]);
}*/

/*for(num=1;num<=10;num++){            //// BREAK statemrnt //////
    if(num==4){
        break;
    }
    console.log(num);
    
}


for(num=10;num>=1;num--){
    if(num==5){
        continue;                   ///// CONTINUE  ///////
    }
    console.log(num);
}*/



/*index=0;
while(index<=10){                          /// WHILE  LOOP  //////////
    console.log(`index is ${index}`);
    index++;
}



do{
    console.log(`number is: ${score}`)
    score++
} while(score <= 10);*/



////////////////////////////////////// FOR  OF  LOOP /////////////////////////////////////////////:>
/*lst=["sameer","sam","aalo"];
for(num of lst){
    console.log(num)
}


let str="Hello Sameer!";
for (const element of str ) {
    console.log(`so,your char is....${element}`);
    
}*/

////////////// MAP  :>
/*const map= new Map();
 map.set("name","xyz")
 map.set("Pno","1234456778")
 map.set("age",45)
 map.set("city","ewrwrrerer")
 console.log(map)
 

const Newmap=new Map();
Newmap.set("rupee","India");
Newmap.set("dollar","USA");
Newmap.set("rouble","russia");
Newmap.set("dinar","dubai");

console.log(Newmap.keys());
console.log(Newmap.values());
console.log(Newmap.get("dinar"))

for (const [keys,values] of Newmap) {
    console.log(keys,values);

    
}*/


/////////////////////  WE CAN'T USE  FOR OF LOOP for OBJECTS  SO WE USE FOR IN LOOP  ////////////////////////

//  for  in   loop:
/*let myObj={
    js:"javascript",
    py:"python",
    cpp:"c++",
    rb:"ruby"

}
for (const key in myObj) {
    //console.log(key)
    //console.log(myObj[key]);
    console.log(`${key} is shortcut for ${myObj[key]}`);
    
}*/

//////////  FOR  IN  LOOP  for  ARRAYS  ///////////////////////:>
let myArr=["sameer",45,"malik",2];
for(const key in myArr){
    //console.log(key);        //  for printing keys
    console.log(myArr[key]);    //////  for printing values
}



const Newmap=new Map();
Newmap.set("rupee","India");
Newmap.set("dollar","USA");
Newmap.set("rouble","russia");
Newmap.set("dinar","dubai");

for(const map in Newmap){
    console.log(map);
}
//////////////////////////////  we cannot use for in loop  in maps ///////////////////:>

/////  for each loop ///////:
let array=["hello","hi","tata","bye"];         
array.forEach(function (val)  {            // hme isme callback  function dena hota h function ka name nhi dete//
    console.log(val);
    
});

  //////////   method 2  by arraow function :>
arr=[56,90,78,56,4];
arr.forEach(( val) =>{
    console.log(val)
});


