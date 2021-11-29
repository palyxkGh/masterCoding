function reverseAString(str) {
    // input check
    if(!str || str.legth < 2 || typeof str !== 'string'){
        return 'hmm that is not good'
    }
    // const backwards = str.split('').reverse();
    // return backwards.join('');
    // OR
    // const backwards = [];
    // for (let i = backwards.length - 1; i >= 0; i--) {
    //     backwards.push(str[i]);
    // }
    // return backwards.join('');
//    OR
//     return [...str].reverse().join('');
}

