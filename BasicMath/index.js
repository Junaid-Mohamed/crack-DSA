
// taking user input.
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Enter your name', (name)=> {console.log(`Hi, ${name}`); rl.close()})

/**
 * count digits
 */

let n = 7789;

function countDigits(n){
    let count = 0;
    while(n>0){
        count+=1;
        n = Math.floor(n/10);
    }
    return count;
}

// console.log(countDigits(n));

/**
 * reverse digits
 */

var reverse = function(x) {
    let num = 0;
    let isNegative = x < 0;
    x = Math.abs(x); // Work with the absolute value

    while (x > 0) {
        let digit = x % 10;
        num = num * 10 + digit;
        x = Math.floor(x / 10);
    }

        // Restore negativity if needed
        if (isNegative) num = -num;

        // Check for 32-bit integer overflow
        if (num < -(2**31) || num > (2**31 - 1)) return 0;
    
        return num;
};


console.log(reverse(123));
console.log(reverse(-123));

// console.log(Math.round(-0/10,0));

// console.log(-0<0);

/**
 * check for palindrome.
 */

// same as above problem, just check it with input number.

// print all divisors

function printAllDivisors(n){
    let arr = [];
    for(let i=1;i*i<=n;i++){
        if(n%i==0){
            arr.push(i);
            if(n/i != i){
                arr.push(n/i)
            }
        }
    }
    arr.sort((a,b)=>a-b);
    arr.forEach(num=>console.log(num))
}

// printAllDivisors(36);

/**
 * check for Prime
 */

// in place of printing factor, have a counter and increment it, in prev prob.
// if counter is 2, then it is prime number else it is not prime number

/**
 * GCD or HCF
 * 
 * todo - should check how to find LCM
 */

function gcd(a,b){
    let n = Math.min(a,b);
    let gcd = 1;
    for(let i=1;i<=n;i++){
        if(a%i==0 && b%i==0) gcd = i;
    }
    return gcd;
}

// TC -> O(min(a,b));

console.log(gcd(5,15));

function gcdOptimised(a,b){
    while(a>0 && b>0){
        if(a>b) a%=b;
        else b%=a;
    }
    if(a==0) return b;
    return a;
}

//  TC -> O(logɸ(min(a,b)));

console.log(gcd(5,15));

/**
 * Leap year
 * 
 * 1. The year must be a multiple of 400.
 * 2. Alternatively, if the year is a multiple of 4 and not a multiple of 100, it’s also considered a leap year.
 */

function leapYear(year){
    if(year%4 == 0 && year%100 != 0){
        return 'Leap Year';
    }
    return 'Not a Leap Year';
}

console.log(leapYear(2640));

