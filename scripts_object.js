const person = {
    name: 'Juuj',
    age: 15,
    weight: 70.6,
    isAdmin: false
}
console.log(person)
console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} quilos`)


const animal_array = [
    'Lion',
    'Monkey',
    {name: 'Cat', age: 3}
]
console.log(animal_array[0])
console.log(animal_array[2].name)


function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " is walking!"
    }
}
Juuj = new Person("Juuj")
console.log(Juuj.walk())