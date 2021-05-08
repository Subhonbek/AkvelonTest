function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}

function reverseNumber(n) {
    n = String(n);
    let result = '';
    for (let i = n.length - 1; i >= 0; i--) {
        result += n[i];
    }
    return result;
}

function convertToDecimal(binary) {
    return parseInt(binary, 2);
}

function reverseBits(num) {
    console.log(convertToDecimal(reverseNumber(convertToBinary(num))));
}

reverseBits(1000000)