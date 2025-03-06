(function sayMyName(name){
    console.log(`my name is sameer ${name}`);

})("sam");


(myFunc=(a,b)=>{
    c=a+b;
    return c;
})
console.log(myFunc(3,6));



//////////  ARROW  FUNCTION WITH  IIFE //////////:>
((name)=>{
    console.log(`your name is  ${name}....!`)
               
})("sam");
