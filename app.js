"use strict"

const cardsSection = document.getElementById("cardsSection");
let rowCardsSection = document.getElementById("rowCardsSection");


const apiUrl = "https://hp-api.herokuapp.com/api/characters";

async function getCharacters() {
    const apiRequest = await fetch(apiUrl);
    const characters = await apiRequest.json();
    return characters;
}
async function renderCharacters() {
    const characters = await getCharacters();
    characters.forEach((singleCharacter = null, indexOfCharacter) => {
        if(indexOfCharacter < 11) {
            const characterCard = `
                <div class="col-4">
                    <div class="card">
                        <img src="${characters[indexOfCharacter].image}" class="card-img-top" alt="character">
                        <div class="card-body">
                            <h5 class="card-title">${characters[indexOfCharacter].name} character</h5>
                            <p class="card-text">${characters[indexOfCharacter].name}<br>${characters[indexOfCharacter].actor}</p>
                        </div>
                    </div>
                </div>
            `;
            rowCardsSection.innerHTML += characterCard;
        }
    })
}

getCharacters();
renderCharacters();


