import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../pokemonActions";
import axios from "axios";
import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon details:", error);
      });
  }, [pokemon.url]);

  const getTypeClass = (type) => {
    switch (type) {
      case "water":
        return "water-type";
      case "fire":
        return "fire-type";
      case "grass":
        return "grass-type";
      case "poison":
        return "poison-type";
      case "flying":
        return "flying-type";
      case "bug":
        return "bug-type";
      case "normal":
        return "normal-type";
      case "ground":
        return "ground-type";
      case "electric":
        return "electric-type";
      case "fairy":
        return "fairy-type";
      default:
        return "";
    }
  };

  return (
    <div
      className={styles.pokemon_card}
      onClick={() => dispatch(selectPokemon(pokemon.url))}
    >
      {pokemonDetails ? (
        <div className={styles.content}>
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
              alt={pokemonDetails.name}
            />
            <div>
              <b>{pokemon.name}</b>
            </div>
          </div>

          <div className={styles.types}>
            {pokemonDetails.types.map((type, index) => (
              <p
                key={index}
                className={styles[`${getTypeClass(type.type.name)}`]}
              >
                {type.type.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PokemonCard;
