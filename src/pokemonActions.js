export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const SELECT_POKEMON = "SELECT_POKEMON";

export const fetchPokemonSuccess = (pokemonList) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemonList,
});

export const selectPokemon = (pokemonUrl) => ({
  type: SELECT_POKEMON,
  pokemonUrl,
});
