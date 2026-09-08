function censoredWords(sentence, wordToReplece) {
   
    let censore = '*'.repeat(wordToReplece.length)
    let newSentence = sentence.replaceAll(wordToReplece, censore)
    console.log(newSentence);
    
}
censoredWords('A small sentence with some words',
'small')
