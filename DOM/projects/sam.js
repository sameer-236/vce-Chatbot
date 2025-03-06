/*const div=document.querySelectorAll(".div");
const body=document.querySelector("body");

//console.log(div);

div.forEach(function (divs){
    console.log(divs);
    divs.addEventListener(`click`,function(e){
        console.log(e.target);
        if(e.target.id==="yellow"){
            body.style.backgroundColor="yellow";
        }
        if(e.target.id==="green"){
            body.style.backgroundColor="green";
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor="blue";
        }
        if(e.target.id==="red"){
            body.style.backgroundColor="red";
        }

    });

});*/


////////////////////////////////////// project  2 /////////////////////////////////////:
/*const form=document.querySelector(`form`);   // form ko select krna pdega becoz calculate button in the form...
//console.log(form);
form.addEventListener(`submit`,function(e){
    e.preventDefault();

   const hgt= parseInt(document.querySelector("#height").value);
   const wgt=parseInt(document.querySelector("#weight").value);
  const res=document.querySelector("#results");
   
   if(hgt==" " || hgt<0 || isNaN(hgt)){
    res.innerHTML="please  give valid height";
    
   }
   else if(wgt==" " || wgt<0 || isNaN(wgt)){
    res.innerHTML="please give  a valid weight";
   }
   else{
    const bmi=(wgt/((hgt*hgt)/10000)).toFixed(3);
    ///// showing results:
    res.innerHTML=`<span>${bmi}</span>`;

   }
} );*/


/*const docu=document.getElementById("div");
//console.log(docu);


//console.log(date.toLocaleTimeString())
setInterval(function (){
    let date=new Date();
    docu.innerHTML=date.toLocaleTimeString();
},1000);*/