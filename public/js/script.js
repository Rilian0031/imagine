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

// write a function that will add a participant to our google classroom
const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (email === undefined || email === null) {
    return 'No email provided';
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided'
  }
    // Add email to participants
    participants.push(email);
    return 'Participant added';
}

addParticipant('rilian0031@gmail.com');
addParticipant('joli@gmail.com');
addParticipant();
participants;


// // Arrays in Javascript
// const users =[
//   {
//     username: 'rilian',
//     password: '8956',
//     email:'rilian0031@gmail.com'
    
//   },
//   {
//   username: 'rilijoli',
//     password: '69655',
//     email:'rilian0031@gmail.com'
//   }
// ]

// // Write a function that will take a user with firstname, lastname and return fullname;


// Array Methods in JavaScript


function fullName(user) {
  return {
    ...user,
      fullName: `${user.firstname} ${user.lastname}`
  };
}


const user = {
firstname: 'Blac',
lastname: 'Drax'
}
fullName (user);


// Array map
const users = [
{firstname: 'Blac', lastname: 'Monster'},
{firstname: 'Opiod', lastname: 'Grinder'},
{firstname: 'lopiod', lastname: 'Under'},
{firstname: 'Above', lastname: 'Joestar'},
{firstname: 'Luffy', lastname: 'Perndrakon'},
]


users.map(fullName);


// Square of Numbers


function square (number) {
return number ** 2;
}


square(9)


const numbers = [9,6,3,8,5];
numbers.map(square)


// Array filter
function isEven(number) {
return number % 2 === 0;
}


isEven(9)
numbers.filter(isEven);

// const user = {
//   email: 'kokomoney@gmail.com',
//   password: '1234'
// }

function resetPassword(email, newPassword){
// Check if email and new password was provided
  if (!email || !newPassword){
    return 'Email or password not provided';
  }
  // 
  if (email === user.email){
    user.password =newPassword;
    return 'Password reset successful'
  }

// Check if provided email is correct
if (email !== user.email) {
  return 'Incorrect email'
}
  
}


user;
resetPassword('kokomoney@gmail.com', 6790);
user;

















