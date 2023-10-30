import React from "react";
import { useSelector } from "react-redux";
import DetailedPokemon from "../DetailedPokemon/DetailedPokemon";
import styles from "./PokemonDetails.module.css";

function PokemonDetails() {
  const selectedPokemonUrl = useSelector((state) => state.selectedPokemonUrl);

  return (
    <>
      {selectedPokemonUrl && (
        <div className={styles.pokemon_details}>
          <DetailedPokemon url={selectedPokemonUrl} />
        </div>
      )}
    </>
  );
}

export default PokemonDetails;
