// 1. create two new variables that makes a for loop with a for loop increments up from 1 to 10. 
// The for loop must use the two variables.

let MIN_1 = 1
let MAX_1 = 10 

for (let index = MIN_1; index <= MAX_1; index++) {
    game.splash("counting to 10: " + index)
}

// 2. create two new variables with a for a loop that counts from 11 to 20
// The for loop must use the two variables.

let MIN_2 = 11
let MAX_2 = 20 

for (let index2 = MIN_2; index2 <= MAX_2; index2++) {
    game.splash("counting from 11-20: " + index2)
}


// 3. create two new variables with a for loop that counts down from 5 to 0
// The for loop must use the two variables.

let MIN_3 = 0
let MAX_3 = 5 

for (let index3 = MAX_3; index3 >= MIN_3; index3--) {
    game.splash("countdown from 5 to 0: " + index3)
}

// 4. create two new variables for loop to make a countdown from 100 to 0, skiping 10 numbers each time
// The for loop must use the two variables.

let MIN_4 = 10
let MAX_4 = 100

for (let index4 = 100; index4 >= 0; index4 -= MIN_4) {
    game.splash("counting down from 100 to 0, by 10s: " + index4)
}

