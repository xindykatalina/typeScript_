class Person{

    first_name:string;
    last_name:string;
    twitter_user:string;

    constructor(){

        this.first_name = "Sindy";
        this.last_name = "Sanchez";
        this.twitter_user = "@xindykatalina";
    }

    setLastName(last_name:string){
        this.last_name = last_name;
    }
}

var myPerson = new Person();
myPerson.setLastName("critiancho");
myPerson.first_name = "katalina";

console.log(myPerson);