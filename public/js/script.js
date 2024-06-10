const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let username = 'Lilian';
let age = 19;
let present = false;

// objects
const person = {
    username: 'lilian',
    age: 19,
    present: false,
    child: {
        name: 'joli',
        friend: {
            name: 'jeli'
        }
    }
}

console.log(person.username);
person.age = 20;
console.log(person);


// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  const bottles = [bottle1, bottle2];
  bottles;
  bottles.push(bottle1)
  bottles.push(bottle2)
  bottles
  bottles[1].color; 
  
  const date = new Date();
  date.getDay();


  
  // If/Else
//   const age = 18
  if(age >= 18) {
    'You are true';
  } else {
    'You are false';
  }
  
  //  For loop
  for (let i = 0; i<=5; i+=1) {
    console.log('We did it', i);
  }
  
  // Functions
// Defining a function
function login(username,password) {
  // Validate username and password
  if (!username || !password) {
    return 'Username or password not provided'
  }
  // Verify username and password
  if (username == 'rilian' && password == '1234') {
    return 'user is logged in'
  } else {
    return 'Invalid username or password'
  }
}
// Invoking a function
login('rilian', );



// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
43 - 12;
45 / 7;
5 * 3;
14 % 3;

Math.floor(45 / 24);
45 % 24
Math.random() * 1000;
Math.max(34,32,37)


// Strings in Javascript
// Concatenation
const firstName = 'Lilian';
const lastName = 'Ziwu';
const middleName = 'Awo';
firstname +  ' ' + middlename + ' ' + lastname;
// Template literal

`${firstname} ${middlename} ${lastname}`;

// String Methods

let fullname = 'lilian Ziwu'
fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(3)
fullName.slice(0,6)
fullName.split("")
fullName.replace("lilian" ,"Joli")
fullName.indexOf("ian")

// string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GhS${amount}`)
amount.toString()

