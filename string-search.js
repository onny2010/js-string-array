const products = [
    'Dell hardcore i29 200Gb laptop',
    'iphone 1Tb camera flashlight Phone',
    'yellow laptop with black cmaera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HC low price Phone Dell',
    'Dell purple color phone with Laptop',
    'Dell phone with Laptop'
];

const searching = 'Dell';

// searching by indexOf()
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

// searchingby includes()
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

// searching by startsWith()
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output);