var x = 0;

if (typeof x !== "number") {
    console.log("Unesena vrijednost nije broj! Ponovi unos.");
} else {
    if (x === 0) {
        console.log("Uneseni broj je 0.");
    } else {
        if (x % 2 == 0) {
            console.log("Broj", x, "je paran broj.");
        } else if (x % 2 !== 0) {
            console.log("Broj", x, "je neparan broj.");
        }
    }
}