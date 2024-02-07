'use strict';

const foo = () => {
    for (let a = 1; a <= 10; a++) {
        console.log('--------------------');
        for (let m = 1; m <= 10; m++){
            if (m > 10) return;
            console.log(`${a} в ${m} степени = ${a ** m}`);
        }
    }
}

foo();