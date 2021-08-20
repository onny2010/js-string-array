const myName = 'ami';
// SyntaxError: Unexpected identifier
/* for (let i = 0; i < 10 i++) {
    console.log(i)
} */


try {
    myName = 'tumi'
}
catch (error) {
    console.log('geting error:', error);
}
console.log(100);
console.log(myName);
