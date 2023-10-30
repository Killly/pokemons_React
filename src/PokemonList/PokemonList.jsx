import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonSuccess } from "../pokemonActions";
import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css";

function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess(response.data.results));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch, limit]);

  const handleLoadMore = function () {
    setLimit((prev) => prev + 12);
  };

  return (
    <div className={styles.pokemon_list}>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
      <div className={styles.load} onClick={handleLoadMore}>
        Load More
      </div>
    </div>
  );
}

export default PokemonList;
