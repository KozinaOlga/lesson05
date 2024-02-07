'use strict';

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return number !== 1;

}

const res = isPrime(911);
console.log('res: ', res);


const isPrimeTwo = (max) => {
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) console.log(i);
    }
}

isPrimeTwo(151);


