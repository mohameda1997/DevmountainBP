////////// PROBLEM 1 //////////
let lovesCode = true

if (lovesCode === true) {
  console.log('I love to code!')
} else {
  console.log("Coding has it's challenges.")
}


////////// PROBLEM 2 //////////
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

if (amysAge > brittanisAge) {
  console.log('Amy is older than Brittani')
} else if (brittanisAge > amysAge) {
  console.log('Brittani is older than Amy')
} else {
  console.log('Amy and Brittani are the same age.')
}


////////// PROBLEM 3 //////////
if (amysBirthYear === brittanisBirthYear) {
  console.log('Amy and Brittani were born in the same year.')
} else {
  console.log('Amy and Brittani were born in the same year.')
}


////////// PROBLEM 4 //////////
/* 
  in a conditional block with many choices, only 
  one - the FIRST to match - will be chosen. while 
  90 is technically both greater than 80 and greater 
  than 60, since the program will find the first 
  condition to be true, it will exit the conditional 
  block there. 

  this is a case where it's important to note what 
  order you put your conditions in. if we had put 60 
  first, we would get an unexpected log for a temp 
  like 90.

  additionally, you'll notice that below we just 
  put the `rain` variable in without ===. 
  javascript will evaluate whether `rain` is true
  or false since we put it in the if's parentheses. 
  in other words, `rain` and `rain === true` get
  evaluated the same way by javascript. 
  similarly, `!rain` and `rain === false` will be 
  evaluated the same.

*/
if (temperature > 80 && rain) {
  console.log('Wear a t-shirt and take an umbrella with you today')
} else if (temperature > 60 && rain) {
  console.log('Better wear a rain jacket today')
} else if (temperature < 60 && rain) {
  console.log('Wear a jacket and pack an umbrella')
} else if (temperature > 80 && !rain) {
  console.log('Looks like a day for a tank top')
} else if (temperature > 60 && !rain) {
  console.log('You might want a light jacket today')
} else {
  console.log('It will be a bit chilly out there today')
}

////////// PROBLEM 5 //////////
/*
  as long as this runs 10 times, you can use 
  any number for i. for example, you could start
  at 42 and continue looping while i is less than
  52. 

  you can also use `<=` instead of just `<`
  for example: (let i = 1; i <= 10; i++)
*/
for (let i = 0; i < 10; i++) {
  console.log('hello')
}


////////// PROBLEM 6 //////////
/*
  now that we want specific numbers to log, 
  we could start at 1 

  like with a lot of code, you could have
  done something differently here. maybe 
  you thought you'd start at 0 still and 
  then just log `i + 1` -- well good news, 
  that works too! there are lots of ways to 
  code
*/
for (let i = 1; i < 11; i++) {
  console.log(i)
}

////////// PROBLEM 7 //////////
/* 
  in this one, we're counting down, so we'll
  subtract at the end of each loop and we'll 
  start with the bigger number
*/
for (let i = 10; i > 0; i--) {
  console.log(i)
}

////////// PROBLEM 8 //////////
/*
  make sure you modify score inside your
  loop, otherwise it will run infinitely!
*/
while (score < passingScore) {
  console.log('Your score is not high enough')
  score++
}

////////// PROBLEM 9 //////////

let changeMyMind = true 

if (changeMyMind) {
  changeMyMind = false
} else {
  changeMyMind = true
}

////////// PROBLEM 10 //////////

changeMyMind = !changeMyMind

console.log(changeMyMind)

////////// PROBLEM 11 //////////

while (z > 0) {
  for (let i = z; i > 0; i--) {
    console.log(i)
  }
  z--
}