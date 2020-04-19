let person = {
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

person.getFullName();

person.chargeBill(150);

console.log(person.salary);

person.chargeBill(10000);

console.log(person.salary);