// For Loop = A type of loop that iterates through
// a list.

// A list has a finite loop; it has a start point
// and an end point; these are typically the first
// and last item in the list.

groceryList = ['apple', 'mango','water','cereal','beef']


// ++ = add 1
let i =0
for (i; i < groceryList.length; i++) {
    console.log("this is a " + groceryList[i])
   }

let gradeBookList = [80, 70, 74, 68, 93, 92]

let x =0
for (x; x < gradeBookList.length; x++) {
//way 1//let newGrade = gradeBookList[x] + 5
 //console.log(newGrade)

//way 2//console.log(gradeBookList[x]+ 5)

// 'if you want to add 5 to every grade in the list over 75'

if (gradeBookList[x] < 75) {
    gradeBookList[x] + 5
    }
    console.log(gradeBookList[x])
}