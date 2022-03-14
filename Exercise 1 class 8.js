//Exercise 1 class 8
//Create a function that takes a "base number" as an argument. 
//This function should return another function that takes a new argument 
//and returns the sum of the "base number" and the new argument.

var exponent = function(a, n) 
{
    if (n = 0)
        {
         return 1;
        }
     else
    {
    return a * exponent(a, n-1)
    }
};
console.log(exponent(4,2))