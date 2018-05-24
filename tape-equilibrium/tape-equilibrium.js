const sumThemAll = (A) => A.reduce((sum, el) => sum + el, 0);

const solution = (A) => {
    const sumAllElementsInArray = sumThemAll(A);
    let tempSum = 0;
    return A.reduce((minAbsolute, el, index) => {
        if (index === A.length -1) return minAbsolute;
        
        tempSum += A[index];
        const sumOfRemaining = sumAllElementsInArray - tempSum;
        if (Math.abs(tempSum - sumOfRemaining) < minAbsolute || index === 0) {
            minAbsolute = Math.abs(tempSum - sumOfRemaining);
        }
        return minAbsolute;
    }, 0);
}