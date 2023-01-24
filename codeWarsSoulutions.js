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
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
function likes(names) {
  if(names.length === 0){
    return 'no one likes this'
  } else if(names.length >= 4){
    let num = names.length - 2
    return `${names[0]}, ${names[1]} and ${num} others like this`
  } else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if(names.length == 2){
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length == 1){
      return `${names[0]} likes this`
  }
    
  }
//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.


  var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
//Write a function that produces an array with the numbers 0 to N-1 in it.
    const arr = N => {
      let arr = []
      for(let i = 0; i< N; i++){
        arr.push(i)
      }
      return arr
    };
    // Given a string of words, you need to find the highest scoring word.

    // Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
    
    // You need to return the highest scoring word as a string.
    
    // If two words score the same, return the word that appears earliest in the original string.
    
    // All letters will be lowercase and all inputs will be valid.

    //this code is not mine and is here for study purposes
    function high(s){
      let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
      return s.split(' ')[as.indexOf(Math.max(...as))];
    }
    // Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.


    function solution(nums){
      return nums === null ? [] : nums.sort((a, b) => a - b)
     }
     //Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
     function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1.
function index(array, n){
  return array.length <= n ? -1 : Math.pow(array[n], n)
}
//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. 
function plural(n) {
  return n === 1 ? false : true
    
  
}

//Given an integral number, determine if it's a square number:
var isSquare = function(n){
  let square =  Math.sqrt(n)
  return Number.isInteger(square)

}
//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
function replace(s){
  return s.replace(/[aeiouAEIOU]/g, '!')
}
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

 
function move (position, roll) {
  return position + roll * 2
}
//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
function strCount(str, letter){  
  let sum = 0
  let arr = str.split('')
  arr.forEach(x => {
    if(x === letter){
      sum += 1
    }
  })
  return sum 
}
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url){
  let arr = url.split('')
  if(arr.includes('#')){
    let newArr = arr.slice(0, arr.indexOf('#'))
    return newArr.join('')
    } else{
      return url
    }
}
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (enteredCode == correctCode) && (Date.parse(currentDate) <= Date.parse(expirationDate))
}
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter
const areaOrPerimeter = function(l , w) {
  if(l === w){
    return l*w
  } else{
    return (l +w) * 2
  }
};
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
  return string.replace(/[aeiou]/g, '')
  
  }
//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.


  function dutyFree(normPrice, discount, hol){
    let savings = normPrice *  (discount / 100)
    let bottles = hol / savings
    return Math.floor(bottles)
    }
//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
    function minValue(values){
      let filtered = values.filter((x, i) => values.indexOf(x) === i)
      let sorted = filtered.sort((a, b) => a - b)
      let results = sorted.join('')
      return Number(results)
    }

    //Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
    function XO(str) {
      let arr = str.split('')
      let os = 0
      let xs = 0
      arr.forEach(x => {
        if(x === 'o' || x === 'O'){
          os++
        } else if(x === 'x' || x === 'X'){
          xs++
        } 
      })
    return os === xs
  }
  //If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
  function friend(friends){
    let realFriends = []
    friends.map(x =>{
      if(x.length === 4){
        realFriends.push(x)
      }
    })
    return realFriends
    }
    //Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
function unusualFive() {
  let word = 'returnFive'
  return word.indexOf('n')
}
//Given a string str, reverse it and omit all non-alphabetic characters.
function reverseLetter(str) {
  let replaced = str.replace(/[^a-zA-Z]/gi, "")
  return replaced.split('').reverse().join('')
  
}
//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.


function findDifference(a, b) {
  return Math.abs(a.reduce((x,y) => x *y) - b.reduce((x,y) => x *y))
}
//Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  return s.replace(/[0-9]/gi, '')
 }
//There is an array with some numbers. All numbers are equal except for one. Try to find it! Find the unique number
 function findUniq(arr) {
  let arr1 = arr.filter((x, i, a) => a.indexOf(x) === a.lastIndexOf(x))
  return arr1[0]
 }
 //You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.


 function smallEnough(a, limit){
  let arr = []
 a.forEach(x => {
   if(x <= limit){
     arr.push(x)
   }
 })
  return arr.length === a.length 
}
//Write a small function that returns the values of an array that are not odd.

function noOdds( values ){
  let evens = values.filter(x => x % 2 == 0)
  return evens 
 }

 //Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

 function sumOfMinimums(arr) {
  let sum = []
  let sorted = arr.map(x => x.sort((a,b) => a -b))
    sorted.forEach(x =>{
      sum.push(x[0])
    })
 return sum.reduce((a,c) => a +c)
}

//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(str){
  let lower = []
  let upper = []
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 97 ){
      lower.push(str[i])
    } else{
      upper.push(str[i])
    }
  }
  if(upper.length === lower.length){
    return str.toLowerCase()
  } else if(upper.length > lower.length){
    return str.toUpperCase()
  } else{
    return str.toLowerCase()
  }
}

//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
  let team1 = 0
  let team2 = 0
  array.forEach((x,i,a) =>{
    if(i % 2 == 0){
      team1 += a[i]
    } else{
      team2 += a[i]
    }
  })
  
  return [team1, team2]
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  let obj = {}
  let count = 0
  numbers.forEach(x =>{
    if(!obj[x]){
      obj[x] = 1 
    } else{
      obj[x] += 1
    }
  })
    let results = Object.keys(obj).find(key => obj[key] === 1)
    return Number(results)
 }
// write a function that converts roman numerals to regular numbers
 function romanNumerals(str){
  let convo = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  let sum = 0
  let arr = str.split('')
  for(let i = 0; i < arr.length; i++){
    let cur = arr[i]
    let curConvo = convo[cur]
    let next = arr[i +1]
    let nextConvo = convo[next]

    if(curConvo < nextConvo){
       sum -= curConvo
    } else{
      sum += curConvo
    }
  }
    return sum 
}
//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(arr){
  return arr.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a)
}

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  let obj = {}
  for(let char of string){
    if(!obj[char]){
      obj[char] = 1
    }else{
      obj[char] += 1
    }
  }
  return obj
}

//Your task is to write function factorial.

function factorial(n){
  return n <= 1 ? 1 : n * factorial(n-1) ;
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num){
  let count = 0
  while(`${num}`.length > 1){
    count++
    num = `${num}`.split('').reduce((a, b) => a * b)
  }
  return count
}

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

// Determine the total number of digits in the integer (n>=0) given as input to the function.
function digits(n) {
  let arr = n.toString().split('')
  return arr.length
}

//Create a function that takes a string and returns the string ciphered with Rot13.

function rot13(string){
  let a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
  return string.replace(/[a-z]/gi, c => b[a.indexOf(c)])
 }
//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.


function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
  let arr = []
    for( let i = numbers[0]; i<=numbers[numbers.length -1]; i++){
      arr.push(i)
    }
    return arr
  }
//   Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.


  function stairsIn20(s){
    let year = s.flat(1)
    return year.reduce((a,b) => a + b) * 20
   }

   //Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
   function listSquared(m, n) {
    let arr = []
   for(let i = m; i <= n; i ++){
     let temp = 0
     for(let j = 1; j <= i; j++){
       if(i % j === 0){
         temp += j * j
       }
       }
       if(Math.sqrt(temp) % 1 === 0){
         arr.push([i,temp])
       }
   }
   return arr 
 }
//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
 function addLength(str) {
  let arr = str.split(' ')
  let result = arr.map(x => x = x + ' ' + `${x.length}` )
  return result
}