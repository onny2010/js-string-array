// sorting elements
const numbers = [4, 5, 7, 3, 1, 2, 9, 8, 6];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// sorting elements of string
const friends = ['kabliwala', 'josim', 'rajjak', 'anwar', 'deepjol', 'fahim', 'chameli', 'eti', 'bobby'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reverseFriends = friends.reverse();
// console.log(reverseFriends);
const sortedReverseFriends = friends.sort().reverse();
console.log(sortedReverseFriends);


// number sorting fun
const bigNumbers = [66, 58, 28, 92, 81, 35, 3, 8, 9];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);