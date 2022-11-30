


const pokemonList = document.getElementById('pokemonList')
const loardMoreButton =document.getElementById('loardMoreButton')

const maxRecord = 151;
const limit = 10;
let offset = 0;



function loadPokemonItens( offset, limit) {    
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
   const newHtml = pokemons.map((pokemon) =>`
        <li class="pokemon ${pokemon.type}">
                <span class="number"> ${pokemon.number} </span> 
    <span  class="name"> ${pokemon.name} </span> 

    <div class="detail">
    <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <img src="${pokemon.photo}" alt=" ${pokemon.name} ">
    </div>
</li> 
` ).join('')
   pokemonList.innerHTML += newHtml


})

}

loadPokemonItens(offset, limit)

loardMoreButton.addEventListener('click', () => {
    offset += limit
    const qtRecordNexPage = offset + limit

    if (qtRecordNexPage >= maxRecord) {
        const newList = qtRecord - maxRecord
        loadPokemonItens(offset, newList)

        loardMoreButton.parentElement.removeChild(loardMoreButton)
        
    } else(
        loadPokemonItens(offset, limit)
    )
    loadPokemonItens(offset, limit)
})


