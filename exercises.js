//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  if (x > y) {
  return x;}
  else {
  return y;}
  //if they are the same return either one
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  if (language === 'German') {
	return('Guten Tag!');}
    else if  (language === 'English') {
		return('Hello!');}
    else if (language === 'Spanish') {
			return('Hola!');}
		else {
			return('Hello!');}
  
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if (num === 5 || num ===10) {
	return true;}
  else {
	return false;}
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num >20 && num <50) {
	return true;}
  else {
	return false;}
  }

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  if (Math.floor(num) === num) {
	return true;}
  else {
	return false;}
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  var fiz3 = false;
  if (num % 3 === 0) {
	fiz3 = true;}
  if (num % 5 === 0) {
		if (fiz3)  {
			return 'fizzbuzz';}
		else {
			return 'buzz';}
	}
	if (fiz3) {
		return 'fizz';}
	else {
		return num;}  //why does having close bracket on line below make fizzBuxx(10) === 10?
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
	var intvers = Math.round(num);
	var halftime = Math.ceil(num / 2);	//only need to check up to half num
	if (intvers < 2) {
		return false;
	}
	if (intvers === 2) {
		return true;
	}
	if ((intvers % 2) === 0)	{
		return false; // this eliminates all evens more quickly
	}
	for (var i = 3; i <= halftime; i += 2) {	//only need to check odd numbers
		if ( (intvers % i) === 0 ) {
			return false;
			}
	}
	return true;
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
  for (var i=0; i < arr.length; i++) {
	arr[i] = arr[i] + 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
	arr.unshift(item);
	return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
	for (var strg = '', i = 0; words[i]; i++ ) {
		if (i === 0) {
			strg = words[0];
		}
		else {
			strg = strg + ' ' + words[i];
		}
  }
  return strg;
}

function contains(arr, item) {

function ruthere(element, index, array) {
	return element === item;
}
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
	return arr.some(ruthere);
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
	var sum = 0;
	for (var i=0; i < numbers.length; i++) {
		sum = sum + numbers[i];
	}
return sum;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
	var sum = 0;
	for (var i=0; i < testScores.length; i++) {
		sum = sum + testScores[i];
	}
return sum / i;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
	var max = 0;
	for (var i=0; i < numbers.length; i++) {
		if (max < numbers[i]) {
			max = numbers[i];
		}
	}
return max;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
