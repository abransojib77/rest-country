const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
// loadQuotes();

const displayQuotes = quote => {

    const div = document.getElementById('puote')
    div.innerText = quote.quote
}


