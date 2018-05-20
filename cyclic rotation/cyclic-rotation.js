const shiftRightArray = (array) => {
    const clone = [...array];
    clone.unshift(clone.pop());
    return clone;
}

const solution = (A, K) => {
   if(A.length === 0 || K === 0){
     return A; 
   }
   let shiftedArray = [...A];
   [...Array(K).keys()].forEach(() => shiftedArray = shiftRightArray(shiftedArray));
   return shiftedArray;
}