const dec2bin = (dec) => (dec >> 0).toString(2);
const binaryToCharsArray = (binaryString) => binaryString.split('');

const longestGap = (binaryArray) => {
    let zerosCount = 0;
    return binaryArray.reduce((maxLen, el) => {
        if (el === '0') {
            zerosCount++;
        } else { 
            if(zerosCount > maxLen) {
                maxLen = zerosCount;;
            }   
            zerosCount = 0
        }
        return maxLen;
    }, 0);   
}

const solution = (N) => {
    return longestGap(binaryToCharsArray(dec2bin(N)));
}