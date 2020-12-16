function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

function romanToInt(number){
    const conversion = {M: 1000, "D": 500, "C": 100, "L":50, "X":10, "V":5, "I":1} //mapping the values, each roman numeral responds to an integer value

    let arrayOfNumbers = number.split(''); //separating each letter inputted

    let total = 0; //the total is the integer we are going to return at the end
    let currentValue, nextValue; //two pointers, one at the current value, and the other looking at the next value beside it. We will use these pointers to check if the next value is greater or less

    for(let i = 0; i < arrayOfNumbers.length; i++){ //iterating through each roman numeral in the string
        currentValue = conversion[arrayOfNumbers[i]]; //storing the current value
        nextValue = conversion[arrayOfNumbers[i+1]]; //storing the next value

        if(currentValue < nextValue){ //comparing the next and current value, for example if it is XI or IX - 9, you are subtracting the number less than at the front. 
            total -= currentValue; 
        } else {
            total += currentValue
        }
    }
    return total;
}

function intToRoman(num){
	const obj = {0:['M',1000], 1:['D', 500], 2:['C', 100], 3:['L', 50], 4:['X', 10], 5:['V', 5], 6:['I', 1]}; //an object mapping to all the possible roman numeral values
	let arr = [];
	for (let i in obj){ //iterating through all the elements in the object
		let count = 0; //counting the number of letters we've reached
		if (num >= obj[i][1]){
			count = Math.floor(num / obj[i][1]);
			num -= count*obj[i][1];
			if (count===4 && (obj[i][0]==='C'||obj[i][0]==='X'||obj[i][0]==='I')){
				if(arr[arr.length-1]===obj[i-1][0]){
					arr.pop();
					arr.push(obj[i][0], obj[i-2][0]);
					continue;	
				}
				arr.push(obj[i][0], obj[i-1][0]);
				continue;
			}
			for (let j=1; j<=count; j++){
				arr.push(obj[i][0])
			}
		} 
	}
	return arr.join(''); //going to return the final number as a string
}

function get_args(){
    //getting the user input from the command line, all the inputs past index 1
    return process.argv.slice(2)
}

function calculate(){
    //storing the array from the get_args function in op
    let op = get_args();
    let result = 0; //initailizing the result to 0, this will be returned at the end
    const operandOneNumber = isNumber(op[0]); //boolean checking if its a number
    const operandTwoNumber = isNumber(op[2]) //boolean checking if the other one is a number
    let operandOne, opearandTwo; 

    //if statements checking if it's a number, if it's false convert roman numeral to number
    if(!operandOneNumber){
        operandOne = romanToInt(op[0])
    } else {
        operandOne = parseFloat(op[0])
    }

    if(!operandTwoNumber){
        operandTwo = romanToInt(op[2])
    } else {
        operandTwo = parseFloat(op[2])
    }
    const operator = op[1];//the operation done 

    switch(operator){
        //a switch case for all the operator cases provided
        case "+":
            //if it is a +, it will add the two operands
            result = operandOne + operandTwo; 
            break;
        case "-":
             //if it is a -, it will subtract the two operands
            result = operandOne - operandTwo;
            break; 
        case "x":
             //if it is a x, it will multiply the two operands and store that in result, instead of x it is * in js
            result = operandOne*operandTwo;
            break;
        case "/":
             //if it is a /, it will divide the two operands
            result = operandOne/operandTwo;
            break;
        case "^":
             //if it is a ^, it will multiply operand1 by the power of operandTwo, using the Math.pow function
            result = Math.pow(operandTwo, operandTwo);
            break;
        case "%":  //storing the remainder when dividing opearndOne by OperandTwo
            result = operandOne%operandTwo;
            break;
    }

    let resultArray = [];
    resultArray.push(result, intToRoman(result))
    //returning the result and turning it into a string
    return resultArray.join(', '); 
}

console.log(calculate());