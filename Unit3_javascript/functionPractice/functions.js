// What is a function?
'A function is a set of instructions that performs a specific task'
'or job'

// Functions come in 2 variations:
// built-in functions - instructions that are pre-written into coding language, 
// ALL we need to do is pass in data.

// examples
var className= 'Coding class'
console.log(className)

// user-defined functions - Custom instructions written by engineers
// to make code that performs specific tasks.

//How do we write a user-definded function?

function exampleFunction(){
    console.log('The function script is connected.')
}


// in order to have a function work, we need to call it.
// the above code is the function definition- MEANING- it's only
// telling the computer the instructions- NOT to actually run it.

// we access or call a function by writing its name.
exampleFunction()

let accountBalance = 1000;

function depositMoney() {
    var newBalance = accountBalance + 200;
    console.log(newBalance)
    document.getElementById('data').innerHTML = newBalance;
}