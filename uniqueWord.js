function Split(str) {
    return str.split(' ');
}
function Join(arr){
    return arr.join(' ')
}
function removeDuplicate_1(arr) {
    if(!arr) return [];
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

function removeDuplicate_2(arr) {

    return [...new Set(arr)];
}

function removeDuplicate_3(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
function getUniqueWords(str){
    return Join(removeDuplicate_1(Split(str)));
    /*
    * return Join(removeDuplicate_2(Split(str)));
    * return Join(removeDuplicate_3(Split(str)));
    */
}
getUniqueWords('easy come easy go');