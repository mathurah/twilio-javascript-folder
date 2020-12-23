//getting the input
const number = process.argv[2]

function factorial(number){
    //base case
    if(number === 0) return 1; 

    //recursive call, multiply itself and continue decreasing the number by 1
    return number* factorial(number - 1);
}

console.log(factorial(number))