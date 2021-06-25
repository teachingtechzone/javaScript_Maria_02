


// var count = 0;

// for(var i = 1 ; i < 5; i++){
//     count = count + 1; 
// }

// console.log(count)

// var a = 5; 
// for (let index = 0; index < 6; index++) {
//     a = a + a;    
// }

// console.log(a)

// Functions

// function add(){
//     console.log(4 + 5);
// }

// add();
// add();
// add();


// function addValues(num1, num2) {
//     console.log(num1 + num2);
// }


// addValues(4,8)
// addValues(4,0)
// addValues(4,10)



// function addValues(num1, num2) {
//     console.log(num1 * num2);
// }


// addValues(4,8)
// addValues(4,0)
// addValues(4,10)

// function Addvaluebyreturn(num1, num2) {
//     return num1 + num2;
// }

// console.log(Addvaluebyreturn(2,5))



// var myval = Addvaluebyreturn(2,4);
// console.log(myval)


// function calculate(num1, op , num2) {
//     if(op == "*"){
//         return num1 * num2;
//     }
//     else if(op == "-"){
//         return num1 - num2;
//     } 
//     else if(op == "/"){
//         return num1 / num2;
//     } 
//     else if(op == "+"){
//         return num1 + num2;
//     } 
// }

// var calculatedValue = calculate(2, "/" , 5);
// console.log(calculatedValue);

// var ans ;
// function calculate(num1, op , num2) {
//     if(op == "*"){
//       var ans =  num1 * num2;
//     }
//     else if(op == "-"){
//        var ans = num1 - num2;
//     } 
//     else if(op == "/"){
//       var ans = num1 / num2;
//     } 
//     else if(op == "+"){
//        var ans = num1 + num2; // +, -, *, / are given condition on which it will work
//     } 
    
//     else{
//       var ans = "wrong operator used";
//     }

//     return ans; //ans will store value in function named calculate
// }

// var calculatedValue = calculate(2, "*" , 5);
// console.log(calculatedValue);


// by maria

// function values(num1, operator, num2){
//     if(operator == "+"){
//         var final = (num1+num2)
//     }
//     else if(operator == "-"){
//         var final = (num1 - num2)
//     }
//     else if(operator == "*"){
//         var final = (num1 * num2)
//     }
//     else if(operator == "/"){
//         var final = (num1 / num2)
//     }
//     else if(operator == "^"){
//         var final = (num1 ^ num2)
//     }
//     else{
//         var final = ("wrong operator is used")
//     }
//     return final;
// }
// var hello = values(5, "*", 3);
// console.log(hello);


// variable scope
// var variablename = 6 ; // global variable
// function mynumber() {
//     var localvariable = 7; // local variable
//     console.log(variablename);
//     console.log(localvariable);
// }

// mynumber();

// console.log(variablename);
// console.log(localvariable);



// var variablename = 6 ; // global variable
// function mynumber() {
//     var localvariable = 7; // local variable
//     console.log(variablename);
//     console.log(localvariable);

//     for(var i = 0 ; i <= 2 ; i++){
//         console.log("in for loop" , variablename)
//         console.log("in for loop" , localvariable)
//     }
// }

// mynumber();

// console.log(variablename);
// console.log(localvariable);