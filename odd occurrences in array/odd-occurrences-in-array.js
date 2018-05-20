const solution = (A) => {
    return A.reduce((unpaired, el) => unpaired ^= el, 0);
}