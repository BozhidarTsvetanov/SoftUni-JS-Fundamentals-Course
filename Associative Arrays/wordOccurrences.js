function wordOccurrences(input) {
    let map = new Map()

    for (let word of input) {
        if (map.has(word)) {
            let current = map.get(word)
            current++
            map.set(word, current)
        } else {
            map.set(word, 1)
        }
    }
    let sorted = Array.from(map.entries())
    sorted.sort((a,b) => b[1] - a[1])
    for (let [word, current] of sorted) {
        console.log(`${word} -> ${current} times` );
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])
