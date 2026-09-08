function wordsTracker(input) {
let occurrences = {};
let wordsToFind = input.shift().split(' ')

for (let element of wordsToFind) {
    occurrences[element] = 0;
}
for (let element of input) {
    if (element in occurrences) {
        occurrences[element]++
    }
}
let entries = Object.entries(occurrences).sort((a,b) => b[1] - a[1])
for (let [word, timesOccurred] of entries) {
    console.log(`${word} - ${timesOccurred}`);
    
}

}
wordsTracker([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
])
