
async function getPokemonData(){
	let pokemonApiUrlBase = "https://pokeapi.co/api/v2/pokemon/"

	let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

	let fullApiUrl = pokemonApiUrlBase + randomPokemonNumber;

	let response = await fetch(fullApiUrl);
	let responseData = await response.json();
	let result = responseData;

	return result;
}

async function putDataOnPage(dataToDisplay){
    document.getElementsByClassName("pokemonName")[0].textContent = dataToDisplay.name;
    let type1Display = document.getElementsByClassName("pokemonType1")[0];
    let type2Display = document.getElementsByClassName("pokemonType2")[0];
    type1Display.textContent = dataToDisplay.types[0].type.name;
    // type1Display.textContent = data.types[0]["type"]["name"];
    if (dataToDisplay.types[1]){
        // if the data includes a 2nd type, set that as well 
        type2Display.textContent = dataToDisplay.types[1].type.name;
    } else {
        type2Display.textContent = "";
    }

    let imageContainer = document.getElementsByClassName("pokemonImage")[0];
    let imageElement = imageContainer.getElementsByTagName("IMG")[0];
    imageElement.src = dataToDisplay.sprites.front_shiny;
}

// Button calls this
async function getAndDisplayPokemonData(){
	let data = await getPokemonData();
	console.log(data);

	putDataOnPage(data);
}

document.getElementById("create-encounter").addEventListener("click", getAndDisplayPokemonData);


// let pokemonButton = document.getElementById("create-encounter");
// pokemonButton.addEventListener("click", getAndDisplayPokemonData);