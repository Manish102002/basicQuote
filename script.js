
const quote = document.querySelector("#quote");
const aouther = document.querySelector("#author");
const api_url = "https://api.quotable.io/random";

        async function getQuote (url){
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            quote.innerHTML = data.content;
            aouther.innerHTML = data.author;
        }

        getQuote(api_url);