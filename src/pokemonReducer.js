import { FETCH_POKEMON_SUCCESS, SELECT_POKEMON } from "./pokemonActions";

const initialState = {
  pokemonList: [],
  selectedPokemonUrl: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_SUCCESS:
      return { ...state, pokemonList: action.pokemonList };
    case SELECT_POKEMON:
      return { ...state, selectedPokemonUrl: action.pokemonUrl };
    default:
      return state;
  }
};

export default pokemonReducer;
