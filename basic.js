
function rs(str){

// var str1 = str.split("");
// var str2 = str1.reverse();
// var str3 = str2.join("")
// return str3
 
//return str.split("").reverse().join(" ")

 var rev = "";

for(var i = str.length-1; i>=0; i--){
    rev += str[i];
    }
    return rev;
}

console.log(rs("aravind"))

//Palindrome

// function pal(str){

// 	let reg = /[\W_]/g
	
// 	let str1 = str.replace(reg,"")
//     str1.toLowerCase();
// 	let str2 = str1.split().reverse().join("")

// 	console.log(str1)
// 	console.log(str2)
	
// 	if(str2 === str1)
// 	return true
// 	return false

// }


//    console.log(pal("Sute*$etus"))

//Factorial

// function facto(num){

//     var resultoffact = 1;
//     for(i=num; i>=1; i--){
//              resultoffact *= i;
//           }
//           return resultoffact
// }
// console.log(facto(3))

//Arrays

// const arr = [6, 3, 7, 10, 4]
// const arr1 = arr.map()

// console.log(arr1)

// // Passing function as a parameter parameters

// function add(a, b) {
//     return a + b ;
// }

// //let sum = add;

// function average( a,b,c,t) {
//     return  t(a,b,c)/ 2;
// }

// let result = average(10, 20, 30, add);

// console.log(result);

