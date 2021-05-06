//recursive computation
function factorialRecursive(n) {
    if (n === 0) return 0;
    else if (n < 0) return -1;

    return (n != 1) ? n * factorialRecursive(n - 1) : 1;
}

function factorialFor(n) {
    if (n === 0) return 0;
    else if (n < 0) return -1;

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= n - i;
    }
    return result;
}

console.log(factorialFor(17))
console.log(factorialRecursive(0))
console.log(factorialFor(1))
console.log(factorialRecursive(5))