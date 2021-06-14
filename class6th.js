// var fruite1 = "apple";
// var fruite2 = "Orange";
// var fruite3 = "Guava";


// var fruites = ["apple" , "Orange" , "Guava", 32234, true];

var fruites = ["apple" , "Orange" , "Guava"];

// console.log(fruites);

// console.log(fruites[0]);
// console.log(fruites[2]);
// console.log(fruites[1]);




// fruites.forEach(element => {
//     console.log(element)
// });




// fruites.forEach(element => {
//     console.log(element + " is fruit")
// });







// square of a number 

// var numbers = [2, 3, 4,5,6,7,8,23423423];

// var result;
// numbers.forEach(element => {
//     result = element * element;
//     console.log(result)
// });








// adding and removing element
// fruites.unshift("Stawberry"); // add element at start

// fruites.forEach(element => {
//     console.log(element)
// });


// fruites.unshift("Stawberry");

// fruites.forEach((e , i) => { // i is used for index
//     console.log(i + " - " + e)
// });

// console.log("-------------") // for seperation

// fruites.push("cherry"); // add element at end

// fruites.forEach((e , i) => {
//     console.log(i + " - " + e)
    
// });

// console.log("-------------")
// fruites.shift(); // remove from start

// fruites.forEach((e , i) => {
//     console.log(i + " - " + e)

// });
// console.log("-------------")
// fruites.pop(); // remove from end

// fruites.forEach((e , i) => {
//     console.log(i + " - " + e)

// });

// fruites.splice(1,1);
// fruites.forEach(elem => {
//     console.log(elem)
// })


// fruites.splice(0,2);

// fruites.forEach(elem => {
//     console.log(elem)
// })


// fruites.splice(1,0, "stawberry", "cherry"); // will remove nothing but add 2 fruits from index 1

// fruites.forEach(elem => {
//     console.log(elem)
// })



// fruites.splice(1,1, "stawberry", "cherry"); // will remove orange and add stawberry at its position

// fruites.forEach(elem => {
//     console.log(elem)
// })


// **************by maria*************
var papers = ["maths", "physics", "chemistry", "english"];

// console.log(papers);
// console.log(papers[0]);
// console.log(papers[1]);
// console.log(papers[2]);
// papers.forEach(element => {
    //     console.log(element)
    // });
    // papers.forEach(element => {
        //     console.log(element + " pass")
        // });  //concatenation
        
        
        
        
        // var numsqr = [8, 9, 10];
        // var sqr;
        // numsqr.forEach(num => {
            //     var sqr = num * num;
            //     console.log(sqr)
            // });
            
var papers = ["maths", "physics", "chemistry", "english"];
//add element at start:
papers.unshift("urdu");
papers.forEach(element => {
    console.log(element)
});
//add element at end:
papers.push("computer");
papers.forEach((element, index) => {
    console.log(index +"..."+ element)
});
//remove element at start:
papers.shift();
papers.forEach(element => {
    console.log(element)
});
//remove element at end:
papers.pop();
papers.forEach(element => {
    console.log(element)
});
console.log("**************");
//remove element at center:
papers.splice(2/*index number*/,2/*element delete*/);
papers.forEach(element => {
    console.log(element)
});
console.log("************")
//add element at center:
papers.splice(2/*from here deleting will start*/,3/*till here*/, "calculus" );
papers.forEach(element => {
    console.log(element)
});



