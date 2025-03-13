function printNReverse(i,n){
    if(i>n) return;
    printNReverse(i+1,n)
    console.log(i);
}

printNReverse(1,3); // print N-1

function printN(i,n){
    if(i<1) return;
    printN(i-1,n);
    console.log(i); 
}

// printN(4,4); // print 1-N

/**
 * sum of n numbers using recursion.
 */

// these are the  patterns you need to foucs.

// parameterised 

function summation(i,sum){
    if(i<1){
        console.log(sum);
        return;
    }
    summation(i-1,sum+i);
}

summation(5,0);

//  functional.

function sum(n){
    if(n==1) return 1;
    return n+sum(n-1);
}

console.log(sum(3));

//  factorial

function factorail(n){
    if(n==1) return 1;
    return n * factorail(n-1);
}

console.log(factorail(5));

function factorial(i,prod){
    if(i==1){
        console.log(prod);
        return;
    }
    return factorial(i-1, prod*i);
}

factorial(3,1);