function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "please provide an array"
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'shamol', 'sabbir', 'sagor', 'arifujjaman'];
const myBigBuddy = megaFriend(247);
// console.log(myBigBuddy);

// bu using indexOf
if (friends.indexOf('Fox') != -1) {
    console.log('Lion exists')
}
else {
    console.log("Fox doesn't exists")
}

// bu using includes
if (friends.includes('Lion') == true) {
    console.log('Lion exists using includes');
}

// by using concatination / concat
const first = [1, 2, 3];
const second = [4, 5, 6, 7, 8, 9];
const combined = first.concat(second);
console.log(combined);