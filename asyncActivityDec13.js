//Question 1
function PositiveorNegative(number) {
    console.log('code is working');
    console.log(number);
    if (number >= 1) {
        console.log('this is a positive number')
    } else if (number < 0) {
        console.log('this is a negative number')
    } else if (number == 0) {
        console.log('this is the number 0.(neutral)')
    } else {
        console.log('sorry you cant do that.')
    }
}

PositiveorNegative(7)

//Question 2
//ABSENT!!!!!!!!!!!!!!//


//Question 3
//KEY POINTS
// Create a function that will apply a discount to an item's price
// Based on their membership tier.

function membershipDiscount() {
    console.log("function is working");
    if (member == 'supershopper') {
        console.log('you are a shopper. You get 10 percent off.')
    } else if (member == 'megashopper') {
        console.log('you are a megashopper. You get 20 percent off.')
    } else if (member == 'ultrashoper') {
        console.log('you are a untra shopper. You get 50 percent off.')
    }
}

membershipDiscount();