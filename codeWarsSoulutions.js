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

    // There is a bus moving in the city, and it takes and drop some people in each bus stop.

    // You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
    
    // Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
    
    // Take a look on the test cases.
    
    // Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
    
    // The second value in the first integer array is 0, since the bus is empty in the first bus stop.

    const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)
    // Build a function that returns an array of integers from n to 1 where n>0.

    // Example : n=5 --> [5,4,3,2,1]
    const reverseSeq = n => {
      let arr = [];
        for (let i=n; i>0; i--) {
          arr.push(i);
          } return arr;
      };
      
//       Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


      function oddOne(arr){
        return arr.reduce((a, c) =>  a ^c)
      }
      // You receive an array with your peers' test scores. Now calculate the average and compare your score!

      // Return True if you're better, else False!
      
      
      let betterThanAverage = (classPoints, yourPoints) =>
   ((classPoints.reduce((a, c) => a + c, 0) + yourPoints) / (classPoints.length +1)) < yourPoints 
//    Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s){
  let arr = s.split(' ')
  arr.sort((a, b) => a.length - b.length)
   return arr[0].length
 }

//  Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

// In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.
function factory(x){
  let num = x 
    return function(arr){
      return arr.map(x => x * num)
    }
    
}
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
  return words.join(' ').trim()
};

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n){
  let arr = []
    for(let i = 1; i <= 500000;i++){
      if(n%i === 0){
        arr.push(i)
      }
    } return arr.length
}
// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0
const sequenceSum = (begin, end, step) => {
  let sum = 0 
 for(let i = begin; i<=end;i+=step){
      sum += i
 }
  return sum 
};

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
  let newArr = []
 arr.forEach((x, i) => {
   if(i ==0 || i %2 ==0){
     newArr.push(arr[i])
   }
 })
  return newArr 
 } 
 //Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseParty(arr){
    return arr.reverse()
}
console.log(reverseParty([1, 2, 3]))
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function squaresVsCubes(arrA, arrB){
    return arrA.reduce((a,c) => a + Math.pow(c, 2)) > arrB.reduce((a, c) => a + Math.pow(c, 3))
    
}
console.log(squaresVsCubes([2, 4, 6], [1, 2, 3]))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function returnMulti(arr){
    return arr.filter((x, i) => x % i == 0)
}
console.log(returnMulti([22, -6, 32, 82, 9, 25]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function numSum(arr){
    return arr.reduce((a,c) => a + Number(c),0)
}
console.log(numSum([2, '6', 5, '9']))
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.


function openOrSenior(data){
  let results = []
  data.forEach(x => {
    if(x[0] >= 55 && x[1] > 7){
      results.push('Senior')
    } else{
      results.push('Open')
    }
  })
  return results 
  }
  // There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

  // input
  // customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
  // n: a positive integer, the number of checkout tills.
  // output
  // The function should return an integer, the total time required.

  // Note that the bellow solution is not mine but copied here as a study help 
  
  function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

