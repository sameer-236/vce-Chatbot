/*function sayMyName(){
    console.log("sameer");
}
sayMyName();
sayMyName();




function add(a,b){
    //c=a+b;
    return c=a+b;

}
add(78,80);   /// function calling with parameters////
console.log(c);



/*function userLoggin(username){
    return `${username} just logged in`;

}
console.log(userLoggin("sameeerMalik"));
console.log(userLoggin("sam"));*/


/*function sameer(a,b){
    return `your sum is:${a+b}....... `;    /// backtick method///

}
console.log(sameer(1,2));


////////////////////////////////  INTRESTING TOPIC IN FUNCTION///////////////////////////////////////
function values(...num1){     // WRAP OPERATOR USED WHEN WE HAVE MORE VALUES OR ARGUMNENT BUT ONE PARAMETER//////
    return num1
}
console.log(values(200,400,500,600));


////////////////////////////// PASSING OBJECT IN A FUNCTION//////////////////
/*let my_obj={
    username:"Sameer",
    price:2333
}*/
/*function getFromObj(AnyObject){
    return `USERNAME IS:${AnyObject.username}  and   PRICE IS:${AnyObject.price}.......!`

}
console.log(getFromObj(my_obj={
    username:"Sameer",
    price:2333}));    // giving argument object


/////// passing  array  in function://////////// /////////////:>   
myArr=["superman",78,45,90]
function getFromArray(AnyArray){
    return AnyArray[1];
    
}
console.log(getFromArray(myArr));*/
    


//////////////////////////////////////////// SCOPE//////////////////////////////////
/*function parent(){
    let username="sameer"
    console.log("This is parent function" );

        function child(){
           // let name="sam";
            console.log("hello" + username)
            console.log("this is child");
        }
        child()
        console.log(username);
}

parent()*/




///////////////////  THIS  KEYWORD   AND     ARROW  FUNCTION   //////////////////////////////
let user={
    username:"sam",
    firstname:"sam",
    lastname:"malik",
    fullname: function(){
        console.log( this.firstname + " "+ this.lastname);
    }
    
}
user.fullname()

console.log(this);



          /////////////////////////////   ARROW    FUNCTION   /////////////////////////////////
const arrow_func=() => {
    console.log("This is arrow function");

}
arrow_func();


let func=(num1,num2) => {
    c=num1+num2;
    return c;

}
console.log(func(5,6));


let another_fun=(num1,num2)=> (num1+num2)
console.log(another_fun(45,89));


let arrowFunction=(a,b)=>( c=a*b)
   
console.log(arrowFunction(34,6));
