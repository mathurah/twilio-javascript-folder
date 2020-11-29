const number = process.argv[2]
//creating if statements separating each case
for (let i = 1; i <= number; i++)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('🛰', i)
    }
    else if (i % 3 === 0) {
        console.log('👽', i);
    } else if (i % 5 === 0) {
        console.log('🚀', i);
    } else {
        console.log('💩', i);
    }