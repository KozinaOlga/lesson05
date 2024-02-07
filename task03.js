'use strict';
/*
const str = 'Привет мир';
const newStr = str.split('').reverse('').join('');
console.log(newStr);
*/


const getReverseStr = str => {
    str = 'Привет мир';
    const newStr = str.split('').reverse('').join('');

    return newStr;
};

const resultNewStr = getReverseStr ('newStr');
console.log('resultNewStr: ', resultNewStr);
