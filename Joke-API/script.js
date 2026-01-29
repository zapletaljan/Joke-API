const jokeElement = document.getElementById("joke");
const newJokeButton = document.getElementById("new-joke");
const copyJokeButton = document.getElementById("copy-joke");

document.addEventListener("DOMContentLoaded", function () {
    newJokeButton.addEventListener("click", function () {
        fetchJoke();
    });
    copyJokeButton.addEventListener("click", function () {
        navigator.clipboard.writeText(jokeElement.textContent);
    });
});

function fetchJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => response.json())
        .then(data => {
            displayJoke(data);
        })
}
function displayJoke(data) {
    jokeElement.textContent = data.joke;
}
