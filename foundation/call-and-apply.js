// How would you implement this:

//     const array = [1,2,3];
     
//     function getMaxNumber(arr){
//       //code here  
//     }

//     getMaxNumber(array) // should return 3

const array = [1,2,3];
    
function getMaxNumber(arr){
    //code here
    // return Math.max.call(null, ...arr);
    // return Math.max(...arr);
    return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array)); // should return 3