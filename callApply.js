let normalPerson = {
    firstName: "Al Nasimul",
    lastName: "Haque",
    salary: 20000,
    getFullName: function (){
        console.log(this.firstName,this.lastName);
    },

    chargeBill: function(amount){
        this.salary = this.salary - amount;

        return this.salary;
    } 
}

let heroPerson = {
    firstName: "Hero",
    lastName: "Alom",
    salary: 15000
}

// use of call function in object


normalPerson.chargeBill.call(heroPerson,2000);

// use of apply function in object

normalPerson.chargeBill.apply(heroPerson,[5000]);


// person.getFullName();

// person.chargeBill(150);

// console.log(person.salary);

// person.chargeBill(10000);

// console.log(person.salary);
console.log(heroPerson);
console.log(heroPerson.salary);
