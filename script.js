const jokeElement = document.getElementById("joke");
const newJokeButton = document.getElementById("new-joke");

document.addEventListener("DOMContentLoaded", function () {
    newJokeButton.addEventListener("click", function () {
        fetchJoke();
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
