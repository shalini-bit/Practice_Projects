const URL = "https://api.quotable.io/random";
const newquote = document.querySelector("#quote");
const newauthor = document.querySelector("#author");
const btn = document.querySelector("#btn");




const getQuotes = async () => {
    let response = await fetch (URL);
    let data = await response.json();
    newquote.innerText = data.content;
    newauthor.innerText = "-" + data.author;
}

btn.addEventListener("click" ,getQuotes);