const isFirstElementOne = (array) => array[0] === 1;

const sortArray = (array) => array.sort((a, b) =>  a - b);

const isCorrectNextValue = (array, currentIndex) => currentIndex + 1 < array.length &&
                                                    array[currentIndex] + 1 === array[currentIndex + 1];

const solution = (A) => {
    // if array length is one I am expecting element at pos 0 to be 1 or 2. If it's 1 returns 2, the opposite instead.
    if (A.length === 1) {
        return !isFirstElementOne(A) ? 1 : 2;
    }
    const sortedArray = sortArray(A);
    // if after the array sort the first element is not 1, we got the missing element.
    if (!isFirstElementOne(sortedArray)) {
        return 1;
    }
    // in case no missing value, the missing value is the last one + 1
    let missingElement = sortedArray[sortedArray.length - 1] + 1;
    for (let i = 0; i < sortedArray.length; i++) {
        if (!isCorrectNextValue(sortedArray, i)) {
            missingElement = sortedArray[i] + 1;
            break;
        }
    }
    return missingElement;
}