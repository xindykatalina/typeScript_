var Person = (function () {
    function Person() {
        this.first_name = "Sindy";
        this.last_name = "Sanchez";
        this.twitter_user = "@xindykatalina";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastName("critiancho");
myPerson.first_name = "katalina";
console.log(myPerson);
