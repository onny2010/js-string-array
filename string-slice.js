const anthem = 'Amar Sonar Bangla, Ami Tomai Valobashi';

// deviding by split()
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// dividing by slice('from indexno -to- indexno')
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// diving by substr('from index charecter to next wanted index charecter')
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);


// deviding by substring
const anotherAnotherPart = anthem.substring(11, 15)
// console.log(anotherAnotherPart);

// deviding by concat
const first = 'amader'
const second = 'choto'
const fullString = first.concat(second).concat(' ').concat('Tonni');
console.log(fullString)

// 
const words2 = ['alim', 'bari', 'cameron', 'dada'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
const allJoined = words2.join(', ');
console.log(allJoined)


