/*let obj={
    name:"sameer",
    class:"btech",
    RollNO:207,
    Address:"Prem chowk",
    City:"Rohtak"
}
console.log(obj);
console.log(obj.name);   /// ACESSS METHOD 1
console.log(obj.City);

console.log(obj["class"])////// ACESSS METHOD 2////////

console.log(typeof obj["name"]);
console.log(obj["name"]);*/




/*const car_obj2={
    name:"scorpio",
    model:"Mahindra",
    modelNo:45667,
    price:300330,
    Wheels:"4 Wheeler"

}
console.log(car_obj2["model"])
console.log(car_obj2["modelNo"])
console.log(car_obj2.Wheels)

car_obj2.name="bolero";   ////// CHANGE VALUE IN  OBJECT///////:>
car_obj2.price=56666;
console.log(car_obj2)

Object.freeze(car_obj2)   /// freeze() method for freezing the object that we will not change:>
car_obj2.name="sameer";
car_obj2.Wheels="2 Wheeler";
console.log(car_obj2);*/

//////////////////////////////////// Declaration of object method 2/////////////////////
/*let your_obj={}   /// non  singleton method
your_obj.id="123@.com"
your_obj.name="sameer"
your_obj.password=78878
console.log(your_obj)*/


//////////////////    NESTED OBJECT//////////////////////////:>
const regularUser={
    email:"123334@.com",
    fullname:{
        username:{
            firstname:"sameer",
            lastname:"malik"
        }

    }
}

console.log(regularUser.email);
console.log(regularUser.fullname.username.lastname);  // accessing nested object

console.log(regularUser.fullname.username.firstname);



obj1={1:"a",2:"b"}
obj2={
    3:"c",4:"d"
}
let obj3=Object.assign(obj1,obj2)  /// Merge 2 objects
console.log(obj3);

//////////// WE CAN MERGE TWO OBJECT BY SPREAD METHOOD LIKE ARRAYS:>
let obj4={...obj1,...obj2}
console.log(obj4)


//////// PRINTING ALL  KEYS AND VALUES//////////////:>
console.log(regularUser);
console.log(Object.keys(regularUser.fullname));
console.log(Object.values(regularUser.fullname.username));




