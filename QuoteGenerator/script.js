const URL = "https://cat-fact.herokuapp.com/facts";
const newquote = document.querySelector("#quote");
const btn = document.querySelector("#btn");



const getQuotes = async () => {
    let response = await fetch (URL);
    let data = await response.json();
    newquote.innerText = data[0].text;
}

btn.addEventListener("click" ,getQuotes);