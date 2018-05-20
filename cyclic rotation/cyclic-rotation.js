const solution = (A, K) => {
   if(A.length === 0 || K === 0){
     return A; 
   }

   let shiftArray = [];
   
   const shiftRightArray = (array) => {
       const clone = [...array];
       clone.unshift(clone.pop());
       return clone;
   }
   
   for(let i = 0; i < K ; i++) {
       if(i === 0) {
           shiftArray = shiftRightArray(A);
       } else {
           shiftArray = shiftRightArray(shiftArray);
       }
   }
   return shiftArray;
}