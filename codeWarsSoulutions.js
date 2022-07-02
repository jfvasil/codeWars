// Given a non-negative integer, 3 for example,  
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.
    function countSheep (num){
        let str = ''
        for(let i = 1; i < num; i++){
        str += `${i} sheep...`
        } return str
    } 
   /* Make a function that will return a greeting statement that uses an input;
   your program should return, "Hello, <name> how are you doing today?".*/
   function greet(name){
    return `Hello, ${name} how are you doing today?`
    } 
    /*Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
    You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/
    function liter(time){
        let liters = Math.floor(time* .5)
        return liters 
    } console.log(liter(3))

    /*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
    function makeNegative(num){
        if(num === 0){
            return num
        }   else if(Math.abs(num) - num ===0){
            return -num
        } else{
            }    return num
        }
        // Write a function which calculates the average of the numbers in a given list.

        // Note: Empty arrays should return 0.
        
        
        function find_average(array) {
            let sum = 0
            if(array.length === 0){
              console.log(0)
            } else{
            array.forEach((x, i) => sum += array[i])
            console.log(sum / array.length)
          }
          } 
          myArray = [4, 7, 8]
    
// remove the first and last letter of a given string 
function removeFirstLast(string){
    return string.slice(1, -1)
  }
  //Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let myArray = [43, 87, 98, 90, 78, 45, 32]

function multiplyArray(array){
    let product = 1
    array.forEach((x , i) => product *= x)
    return product
}

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
  }
  //You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


  function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }
  //Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
//   Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

  const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

//   In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.


    return count+"/"+s.length;
  function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;