/*class Car{
    constructor(name,year,model){

        this.name=name;
        this.year=year;
        this.model=model;
    }

}
const vechile=new Car("mahindra",2010,"mahindra");
const vechile1=new Car("safari",2010,"tata");

console.log(vechile);*/



/*class vechile{
    constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;

    }

    age(){   /// method ///////
        const date=new Date();
        return date.getFullYear()-this.year;
    }
} 
const vec=new vechile("tata",55677,2014);
console.log(vec);
console.log(vechile.age());*/


/*class teacher{
    constructor(name,sec){
        this.name=name;
        this.sec=sec;

    }
    islogged(){
        console.log(`techer ${this.name} is loggedin`);
    }
}

class student extends teacher{      //  INHERITANCE  extends used///
    constructor(name,rollno){
        super(name);
        this.rollno=rollno;
    }
    addcourse(){
        console.log(`${this.name}`);
    }
}

const obj =new student("sameeer",207);  /// OBJECT///

obj.addcourse()

////////////////// see  any  property of /////
let descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);


let object={
    chai:"black chai",
    price:233,
}
console.log(object);
des=Object.getOwnPropertyDescriptor(object,"chai");
console.log(des);

//// we can  change  enumearble and so on properties....//
Object.defineProperty(object,"chai",{
    enumerable:false,
    writable:false,
})
const ab=Object.getOwnPropertyDescriptor(object,"chai");
console.log(ab);*/


 /////////  gettter  and  setter///////////////
class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()      // get is to access the property of object..//
    }
    set email(value){
        this._email=value.toUpperCase()   ///  set is to change the value of object..//
    }
    

}
const use = new user("abc.k","7689");
console.log(use.email);







