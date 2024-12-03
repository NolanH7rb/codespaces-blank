// Anatomy of a function

// curly brackets = this
// called a parameter. we pass data
// inside of the functions paramters

// parameter = placeholder for data

// data = just means data types
//function pizzaParty( name, Topping ) {
   // console.log(' congrats ' + name + ' you have been invited to the pizza party ')
    //console.log("your custom pizza will have " + Topping + " on it.");
//}


//pizzaParty("Nolan", "peppers")

// Conditioal Statements in  JS

// Conditionalstatemants are written using
// the "If" and "ELSE" keywords. This allows
// use to make decisions based on data 
// our function recieves.

function pizzaPartyInvitation(name) {
let guest = 'Mike';
if (name != guest) {
    console.log("this name is not on the list");
 } else {
    console.log('welcome to the party');
 }
}
pizzaPartyInvitation('Nolan')




// Activity