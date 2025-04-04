const palindrom = (word) => {
    const reverse = word.toLowerCase().split("").reverse().join("");
    if (reverse === word.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrom('SULII'));
console.log(palindrom('SILIS'));

