function addNumbers(num) {
    // console.log(arguments[2]);           /* arguements =array like object */
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // arguments.push(45);                  /* push is not a function on arguments  */

    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(28, 35, 28, 35, 143);
// console.log(sum);


// arguments
function getFullName(name) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'songket', 'bin', 'Hanif', 'songket')
console.log(name);