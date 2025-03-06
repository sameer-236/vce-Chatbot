/* const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
       // console.log("async task is completed...")
        resolve();
    },1000)                      // resolve and then are interrrelated....//
 });
 promise.then(function(){
   // console.log("promise  consumed...")
 })



 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("45"+5);
        resolve();
    },1000)
   
 }).then(function(){
    console.log("promise consumed  when promise resolved..");
    
 });



 let promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sam",password:2344})  // in resolve() also pass values/// 
    },1000)

 });
 promiseThree.then(function(user){  // user is parameter that hold value of resolve/////
    console.log(user);

 });


 let promiseFour=new Promise(function(resolve,reject){
    error=false;
    if(!error){
        resolve({username:"asdhj",password:45668});
        return username;
    }else{
        reject("ERROR  OCCURED....")
    }
 });
 promiseFour.then(function(user){
    console.log("resolved succesfully...");
    console.log(user.username)
 }).catch(function(error){
    console.log(error);
 });



 /*const promiseFive=new Promise(function(resolve,reject){
   setTimeout(function(){
      let error=true;
      if(!error){
         resolve({username:"sameer",password:12333});
      }else{
         reject(`error:ERROR`);
      }
   },1000)
 });
 async function consumepromiseFive(){
  try{
   const response=await promiseFive
   console.log(response)

  }
  catch (error){
   console.log(error);

  }
 };*/



 /*async function getAllusers(){
   try{
   const response= await fetch("https://jsonplaceholder.typicode.com/users")
   const data= await response.json()
   console.log(data);
   }
   catch(error){
      console.log("E:",error);
   }
   
   
 }
 getAllusers();*/



                  //////////////  OOP's  // OBJECT///////////////////////////////////:
 let user={
   username:"samer",
   password:122333,
   IsLogged:true,
  
 }
console.log(user.username);  






