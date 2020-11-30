const number = process.argv[2]
//Iniitialize a for loop that iterates from 1 up to the number.
for (let i = 1; i <= number; i++)
//At every iteration, having a condition to check if its divisible by the following numbers
    if (i % 3 === 0 && i % 5 === 0) { //if it is divisible by 3 and 5
        console.log('🛰', i)
    }
    else if (i % 3 === 0) { // if it's divisible by 3
        console.log('👽', i);
    } else if (i % 5 === 0) { //if it's divisible by 5
        console.log('🚀', i); 
    } else { //if it's not divisible by either
        console.log('💩', i);
    }