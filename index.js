async function main(curancy = "USD") {
    try {
        const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=bf32e781a4e343cf86c79145402285ff&symbols=${curancy}&base=usd`);
        const data = await response.json();
        console.log(data);

        const response2 = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=bf32e781a4e343cf86c79145402285ff");
        const data2 = await response2.json();

        selectCurancy(data2);

        printUah(data, curancy);

    } catch (err) {
        console.error(err);
        document.querySelector("h1").innerText = "Not found currency";
    }
}

function printUah(data, curancy) {
    const input = document.getElementById("amount").value;

    const rate = data.rates[curancy];

    const convertedAmount = (input * rate).toFixed(2);

    const exchangeElement = document.getElementById("exchange");
    exchangeElement.innerHTML = `${input} USD = ${convertedAmount} ${curancy}`;
    document.querySelector("h1").innerText = `USD TO ${curancy.toUpperCase()}`;

    exchangeElement.classList.add("fade-in");

    setTimeout(() => {
        exchangeElement.classList.remove("fade-in");
    }, 500);
}

function selectCurancy(data2) {
    const data = new Map(Object.entries(data2.rates));
    const select = document.querySelector("select");


    for (const item of data.keys()) {
        const option = document.createElement("option");
        option.innerText = item;
        select.appendChild(option);
    }

    select.addEventListener("change", () => {
        const selectedCurrency = select.value;
        document.querySelector("h1").innerText = " ";
        main(selectedCurrency);
    });

    document.querySelector("input").addEventListener("keyup", () => {
        const selectedCurrency = select.value;
        printUah(data2, selectedCurrency);
    });
}

main();
