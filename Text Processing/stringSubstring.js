function stringSubstring(word, text) {
    text = text.toLowerCase()
    word = word.toLowerCase()

    words = text.split(' ')
   if (words.includes(word)) {
        console.log(word);
        return;
   }else{
        console.log(`${word} not found!`);
    
   }
}
stringSubstring('javascript',
'JavaScript is the best programming language')
