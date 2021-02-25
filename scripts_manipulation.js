let word = "Parallelepiped"
wordlenght = word.length
console.log(`The word ${word} has ${wordlenght} characters`)
console.log(`The number 99999 has ${String(99999).length} digits`)
// Note: we can use ".replace()" and ".split()" in the exact same syntax as in Python


phrase = "The cake is a lie"
query1 = "cake"
query2 = "Cake"
console.log(`Searching a substring in a string tests: ${phrase.includes(query1)}, ${phrase.includes(query2)}`)


phrase_array = phrase.split(query1)
console.log(`Splitting the string: ${phrase_array}`)
phrase_array = Array.from(phrase)
console.log(`Turning the string into an array: ${phrase_array}`)
phrase_array.push(", but it exists")
console.log(`Appending to the array: ${phrase_array}`)
//Other methods available in w3schools.com


//Operators, comparators and assigners are the same as in python
//Logical operators are the same as in C++ (&&, ||, !)


let temperature = 36.9
if(temperature >= 37.5){
    console.log("Intense fever")
} else if(temperature > 37 && temperature <= 37.5){
    console.log("Moderate fever")
} else {
    console.log("Healthy")
}
//switch case also works the same as in C++


function sayMyName(name = ''){
    if(name == ''){
        throw 'Nome é obrigatório'
    } else {
        console.log(name)
    }
}
try {
    sayMyName()
} catch(e) {
    console.log(e)
}


for(let i = 5; i>0; i--){
    if(i == 5){
        continue
    }
    console.log(i)
}
let i = 5
while(i > 0){
    console.log(i)
    i--
}

arr = ["Felipe", "Mayk", "Pelicano"]
for(let a of arr){
    console.log(a)
    //values
}
for(let a in arr){
    console.log(a)
    //indexes or properties
}