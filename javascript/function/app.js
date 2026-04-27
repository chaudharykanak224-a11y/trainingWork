// what is the difference between show and show()

// function show(){
//     console.log("name")
// }
// // console.log(show())                   output name undefined
//     show()

// role of return keyword in function 

let a = function addition (a , b){
    // return a +b;                                           if we dont write return it gives unndefined
    console.log("result is", a+b);

};
// sum(10,20)
console.log('  sum(10,20):', a(10,20))
