let normalPerson = {
    firstName: "Jalal",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
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
    salary: 20000
}

let friendlyPerson =  {
    firstName: "Mahfuzur",
    lastName: "Rahman",
    salary: 30000
}

let heroChargeBill = normalPerson.chargeBill.bind(heroPerson);

let friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);

heroChargeBill(2000);

friendlyChargeBill(15000);

console.log(heroPerson.salary);

console.log(normalPerson.salary);

console.log(friendlyPerson.salary);