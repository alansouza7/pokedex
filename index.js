const pokemons = [
    {
        name: 'Charizard',
        height: "5' 07",
        weight: 199.5,
        type: 'Fire',
        image: 'charizard.png',
        hp: 78,
        atk: 84,
        def: 78,
    },

    {
        name: 'Alakazan',
        height: "4' 11",
        weight: 105.8,
        type: 'Psychic',
        image: 'alakazan.png',
        hp: 55,
        atk: 50,
        def: 45,
    },

    {
        name: 'Gengar',
        height: "4' 11",
        weight: 189.3,
        type: 'Ghost',
        image: 'gengar.png',
        hp: 60,
        atk: 65,
        def:60,
    },

    {
        name: 'Totodile',
        height: "2' 00",
        weight: 20.9,
        type: 'Water',
        image: 'totodile.png',
        hp: 50,
        atk: 65,
        def: 64,
    },

    {
        name: 'Sandslash',
        height: "3' 03",
        weight: 65.0,
        type: 'Ground',
        image: 'sandslash.png',
        hp: 75,
        atk: 100,
        def: 110,
    },

    {
        name: 'Arcanine',
        height: "6' 03",
        weight: 341.7,
        type: 'Fire',
        image: 'arcanine.png',
        hp: 90,
        atk: 110,
        def: 80,
    },
]


const screenPokemons = document.getElementById('screen')
const mainImgScreen = document.getElementById('main-img-screen')
const logo = document.getElementById('logo')



function renderPokemons(){
    let pokemonsString = ``
    for (const pokemon of pokemons) {
        pokemonsString += `<div  class="pokemons">
        <img id='${pokemon.name}' src="images/${pokemon.image}" alt="${pokemon.name}">
       </div>`
    }
    screenPokemons.innerHTML = pokemonsString
}
renderPokemons()


screenPokemons.addEventListener("click", selectedPokemon)

function selectedPokemon(e){
    if(e.target.id){
        let pokemonId = document.getElementById(e.target.id)
        const pokemonArray = pokemons.filter(function(pokemon){
            return pokemon.name.includes(pokemonId.id)
        })
        if(pokemonArray[0]){
            mainImgScreen.innerHTML = `<img src="images/${pokemonArray[0].image}" alt="">`
    
            screenPokemons.innerHTML = `<div id="modal" class="modal">
            <div class="modal-img">
                <img src="images/${pokemonArray[0].image}" alt="${pokemonArray[0].name}">
            </div>
            <div class="modal-info">
                <p class="name-info">${pokemonArray[0].name}</p>
                <p class="type-info">${pokemonArray[0].type}</p>
            </div>
        
            <div class="hp-attack-def">
                <p class="hp">HP: ${pokemonArray[0].hp}</p>
                <p class="atk">ATK: ${pokemonArray[0].atk}</p>
                <p class="def">DEF: ${pokemonArray[0].def}</p>
            </div>
        </div>`
        }
        }
    }
    
  
logo.addEventListener("click", function(){
    renderPokemons()
    mainImgScreen.innerHTML = `<img src="images/pokemon-logo-png.png" alt="pokemon logo">`
})