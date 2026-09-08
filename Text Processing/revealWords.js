function revealWords(replaceingWords, sentence) {
    let wordsArray = replaceingWords.split(', ')
    for (let word of wordsArray) {
        let censore = '*'.repeat(word.length)
        if (sentence.includes('*')) {
            sentence = sentence.replace(censore,word)
        }
    }
    console.log(sentence);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')
