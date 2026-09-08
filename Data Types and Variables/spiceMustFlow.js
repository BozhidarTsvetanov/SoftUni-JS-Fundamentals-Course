function spiceMustFlow(startingYield) {
    let dayCount = 0;
    let totalForADay = 0;
    while (startingYield >= 100) {
        dayCount++
        totalForADay += startingYield
        totalForADay -= 26
        startingYield -= 10
    }
    if (totalForADay >= 26) {
        totalForADay -= 26
    }
    console.log(dayCount);
    console.log(totalForADay);
    
    
}
spiceMustFlow(450)
