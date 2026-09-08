function mirrorWords(input) {
    let patern = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g
    let mirrorWords = []
    let matchWords = []
    let validWord = patern.exec(input)

    while (validWord) {
        let word = validWord[0]

        if (word.includes('#')) {   
            word = word.split('#')
            let word1 = word[1]
            let word2 = word[3]
            let reverse = word2.split('').reverse().join('')
            if (word1 === reverse) {
                mirrorWords.push(`${word1} <=> ${word2}`)
                matchWords.push(word)
            }else{
                matchWords.push(word)
            }
        }else if (word.includes('@')) {
            word = word.split('@')
            let word1 = word[1]
            let word2 = word[3]
            let reverse = word2.split('').reverse().join('')
            if (word1 === reverse) {
                mirrorWords.push(`${word1} <=> ${word2}`)
                matchWords.push(word)
            }else{
                matchWords.push(word)
            }
        }
        validWord = patern.exec(input)
    }
    if (matchWords.length === 0) {
        console.log("No word pairs found!");
    }else{
        console.log(`${matchWords.length} word pairs found!`);
        
    }
    if (mirrorWords.length === 0 ) {
        console.log("No mirror words!");
    }else{
        console.log("The mirror words are:");
        console.log(mirrorWords.join(', '));
        
        
    }

}
mirrorWords([
'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)
