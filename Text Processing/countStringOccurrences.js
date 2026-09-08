function countStringOccurrences(sentance, wordToCount) {
    let words = sentance.split(' ')
    let counter = 0
    for (let element of words) {
        if (element === wordToCount) {
            counter++
        }
    }
    console.log(counter);
    
}
countStringOccurrences('This is a word and it also is a sentence',
'is')
