console.log('testing1')

//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3['shakes'][0]['oberwise'])



function show_fav_foods(fav_foods){
    for (let key in fav_foods){
        if ((typeof fav_foods[key]) === "object" ) {
            for (let food of fav_foods[key]) {
                console.log(food)
            }
        }
        else {
            console.log(fav_foods[key])
        }
    }
}


show_fav_foods(person3)

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Use an arrow to create the printInfo method
    printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    addAge = () => {
        this.age += 1
    }
}

const person1 = new Person('Bob', 20)
const person2 = new Person('Jill', 22)

console.log(person1.printInfo())
console.log(person2.printInfo())

person1.addAge()
person1.addAge()
person1.addAge()

console.log(person1.printInfo())



// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverSstandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/


// I promise to fetch the driver standings from ergast

// Two possible outcomes:

    // 1) The promise is completed or 'resolved'

    // 2) The promise is failed or 'rejected'




// #1 using callbacks
fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
// .then handles fulfilling the promise
.then((response) => {
    console.log(response.status)
    return response.json()
})
.then((data) => {
    console.log(data)
})
// .catch handles rejection
.catch((error) => {
    console.error(error)
})


// #2 using async/await
const ergastData = async () => {
    try{
        const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error(`there was a problem: ${error}`)
    }
}

ergastData()





// codewars

// Probem #1 - Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// Solution:

// var number=function(array){
//     let newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//       newArray.push((i+1) + ": " + array[i])
//     }
    
//     return newArray
//   }






// Problem #2 - Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131

// Solution:

// function points(games) {
//     let total_pts = 0
    
//     for(let game of games){
//       console.log('game')
//       if (game[0] > game[2]){
//         total_pts += 3
//       }
//       else if (game[0] == game[2]){
//         total_pts += 1
//       }
//     }
//     return total_pts
//   }



