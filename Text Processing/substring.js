function substring(str, startIndex, count) {
    let endNum = startIndex + count
    let resout = str.substring(startIndex, endNum)
    console.log(resout);
    
}
substring('ASentence', 1, 8)
