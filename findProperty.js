let person1 = {
    name: "sadaf",
    id: 2
}

let person2 = {
    name: "mahfuz",
    id : 1
}

// let person3 = {
//     name: "Marzan",
//     id: 2
// }


let persons = [];

persons.push(person1);
persons.push(person2);
//persons.push(person3);

//console.log(persons);

personFind = persons.find(person => person.id === 2);

personFind.name = "Marzan";

//console.log(personFind);
//console.log(persons);

const{ name, id } = person1;

console.log(name);