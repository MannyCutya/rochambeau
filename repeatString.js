const repeatString = function(word, times) {

    if (times < 0) return 'ERROR'
    let string = ''
    for (let i = 0; i < times; i++) {
        string += word
    }
    return string

    //return new Array(count + 1).join(word);

}

module.exports = repeatString