var newNumber = 0;
console.log("Recursion Program");

function SumOfNumbers(number) {
    // decrease the number value
     newNumber = newNumber + number ;
     number--;

    // base case
    if (number > 0) {
        SumOfNumbers(number);
    }
    else
    console.log("sum of number: " + newNumber);

}

SumOfNumbers(4);