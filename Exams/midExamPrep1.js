function computerStore(input) {
    let index = 0;
    let totalPrice = 0;

    while (input[index] !== "special" && input[index] !== "regular") {
        let price = Number(input[index]);

        if (price > 0) {
            totalPrice += price;
        } else {
            console.log("Invalid price!");
        }

        index++;
    }

    let taxes = totalPrice * 0.20;
    let finalPrice = totalPrice + taxes;

    if (input[index] === "special") {
        finalPrice *= 0.90;
    }

    if (finalPrice <= 0) {
        console.log("Invalid order!");
        return;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}`);
    console.log(`Taxes: ${taxes.toFixed(2)}`);
    console.log("-----------");
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
computerStore([1023 ,
15,
-20,
-5.50,
450,
20 ,
17.66 ,
19.30,
"regular"
])
