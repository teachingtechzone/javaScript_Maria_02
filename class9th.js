// // Write a JavaScript program that accept two integers and display the larger.
// var a = prompt("what is your first number");
// var b = prompt("what is your second number");

// var num1 = parseInt(a);
// var num2 = parseInt(b);

// if(num1 > num2){
//     console.log(num1 + " is greater than " + num2)
// }
// else if(num1 == num2){
//     console.log(num1 + " is equal to " + num2)
// }
// else if(num1 < num2){
//     console.log(num1 + " is less than " + num2)
// }

// console.log(4%2)


// var a = 7;
// if ( a%2 == 0 ){
//     console.log( a + " is even ")
// }
// else if ( a%2 !== 0 ){
//     console.log( a + " is odd ")
// }


// const a = prompt("Enter your number");
// if(a % 2 == 0) {
//     console.log(a + " is even ");
// }
// else {
//     console.log(a + " is odd ");
// }

// for (var i = 0; i <= 200; i++){
//     if (i%2 == 0 ){
//     console.log( i + " is even ")
// }
// else {
//     console.log( i + " is odd ")

// }
// }


// 
// for(var i = 1; i <= 10; i++){
//     if (i == 5 ){
//         console.log("this is 5")
//     }

// }



// list karachi , hyderabad , punjab
// yes this city is in pakistan
// var cityInPakistan = ['karachi' , 'hyderabad' , 'punjab'];
// var userCity = prompt("Write your city name");
// console.log(cityInPakistan[1])


// var userCity = "hyderabad";
// if(userCity == cityInPakistan[1]){
    //     console.log("yes this city is in pakistan")
    // }
    // else{
        //     console.log("no this city is not in pakistan")
        // }
        
        // for(var i = 0 ; i < cityInPakistan.length ; i++){
            
            //     if(userCity == cityInPakistan[i]){
                //     console.log("yes this city is in pakistan")
                // }
                
                // else{
                    //     console.log("no this city is not in pakistan")
                    // }
                    
                    // }

var cityInPakistan = ['karachi' , 'hyderabad' , 'lahore'];
var userCity = prompt("write your city name");

var check = false;
for(var i = 0 ; i < cityInPakistan.length ; i++){
    
    if(userCity == cityInPakistan[i]){
        check = true;
    }

}

if(check == true){
    console.log('yes this city present in pakistan')
}
else{
    console.log("no this city is not present in pakitan")
}