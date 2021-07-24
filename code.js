/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 * 
1. create two different types of objects using constructor functions and prototype methods:
 a Traveler and a Wagon.

2. A Traveler has a few properties:
    a name (string) that must be provided as a parameter to the constructor
    an amount of food (number) with an initial value of 1
    an isHealthy (boolean) to indicate whether they are sick, with an initial value of true

3. A Wagon has a few properties as well:
    a capacity (number) that must be provided as a parameter to the constructor, sets the maximum number of passengers the wagon can hold
    a passengers list (array) which is initially empty

 */

// Create your Objects here.

function Traveler (name, food, isHealthy) {
    this.name = name
    this.food = 1
    this.isHealthy = true
}

function Wagon (capacity, passengers){
    this.capacity = capacity
    this.passengers = []
}

/*Operations
Write the following prototype methods:

1. Traveler.prototype.hunt()
    Increase the traveler's food by 2.
*/
Traveler.prototype.hunt = function() {
    this.food += 2
}

/*
2. Traveler.prototype.eat()
    Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the traveler is no longer healthy.
*/
Traveler.prototype.eat = function () {
    if (this.food <= 0) {
        this.isHealthy = false
    }
    else{
        this.food -= 1
    }
}

/*
3. Wagon.prototype.getAvailableSeatCount()
    Return the number of empty seats, determined by the capacity set when the wagon was created, compared to the number of passengers currently on board.
*/
Wagon.prototype.getAvailableSeatCount = function () {
    this.capacity -= this.passengers.length
    if (this.capacity <= 0) {
        return 0
    }
    else{
        return this.capacity
    }
}
/*
4. Wagon.prototype.join(traveler)
    Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
*/
Wagon.prototype.join = function (traveler) {
    
    if (this.passengers.length <= this.capacity) {
        this.passengers.push(traveler)
    }
   
}
/*
    Wagon.prototype.shouldQuarantine = function ()
    Return true if there is at least one unhealthy person in the wagon. Return false if not.
*/

Wagon.prototype.shouldQuarantine = function (){


    for (let index = 0; index < this.passengers.length; index++) {
        if (this.passengers[index].isHealthy === false) {
            return true
        }
            
    }
    return false
}

/*
6. Wagon.prototype.totalFood()
    Return the total amount of food among all occupants of the wagon.
*/
Wagon.prototype.totalFood = function () {
    let total = 0 
    let wagonFood = this.passengers.map(passenger => passenger.food)

    for (let index = 0; index < wagonFood.length; index++) {
        total += wagonFood[index]
        return total
    }
}
