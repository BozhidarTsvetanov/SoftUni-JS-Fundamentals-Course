function modernTimesofHashTag(input) {
    let words = input.split(' ')
    for (let word of words) {
        if (word.startsWith('#') && /^[a-zA-Z]+$/.test(word.slice(1))) {
          console.log(word.slice(1));
        }
            
        }

    }
modernTimesofHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia') 
