window.onload = () => {
    // populate arrays for diferent suits and card numbers.
    let suits = ["&#9829", "&#9824", "&#9827", "&#9830"] // hearts, spades, clubs, diams.
    let cardNums = [];
    
    for (let i = 1; i < 11; i++)
        cardNums.push(i);
    cardNums.push("J", "Q", "K");

    // append number to the num div
    let num = document.getElementById("num");
    let n = document.createTextNode(cardNums[Math.floor(Math.random() * cardNums.length)]);
    num.appendChild(n);

    // appen symbol (as <p>) to a div
    let symbols = document.getElementsByClassName("symbol");
    let s = suits[Math.floor(Math.random() * suits.length)];

    switch(s){
        case "&#9829":
            for (let i = 0; i < symbols.length; i++){
                symbols[i].innerHTML = `<p class="hearts">${s}</p>`;
            }
            break;
        case "&#9824":
            for (let i = 0; i < symbols.length; i++){
                symbols[i].innerHTML = `<p class="spades">${s}</p>`;
            }
            break;
        case "&#9827":
            for (let i = 0; i < symbols.length; i++){
                symbols[i].innerHTML = `<p class="clubs">${s}</p>`;
            }
            break;
        case "&#9830":
            for (let i = 0; i < symbols.length; i++){
                symbols[i].innerHTML = `<p class="diams">${s}</p>`;
            }
    }
}
