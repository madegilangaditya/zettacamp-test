// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  let mid = Math.floor(input.length/2);
  let numsInput = input.sort((a,b) => a - b);
  let result = 0;
  if(input.length % 2 !== 0){
    result = numsInput[mid]; 
  }else{
    result =  (numsInput[mid-1] + numsInput[mid]) / 2 ;
  }

  return result;
  
}

console.log(result(input));