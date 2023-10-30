import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./DetailedPokemon.module.css";

function DetailedPokemon({ url }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemonDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemonDetails) {
    return null;
  }

  const { name, types, sprites, id, stats, weight } = pokemonDetails;

  return (
    <div className={styles.detailed_pokemon}>
      <img src={sprites.front_default} alt={name} />
      <h2>
        {name} #{id}
      </h2>
      <table>
        <tbody>
          <tr>
            <td>Types:</td>
            <td>{types.map((type) => type.type.name).join(", ")}</td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td>
              {stats.map((stat) =>
                stat.stat.name === "attack" ? stat.base_stat : ""
              )}
            </td>
          </tr>
          <tr>
            <td>Defense:</td>
            <td>
              {stats.map((stat) =>
                stat.stat.name === "defense" ? stat.base_stat : ""
              )}
            </td>
          </tr>
          <tr>
            <td>HP:</td>
            <td>
              {stats.map((stat) =>
                stat.stat.name === "hp" ? stat.base_stat : ""
              )}
            </td>
          </tr>
          <tr>
            <td>SP Attack:</td>
            <td>
              {stats.map((stat) =>
                stat.stat.name === "special-attack" ? stat.base_stat : ""
              )}
            </td>
          </tr>
          <tr>
            <td>SP Defense:</td>
            <td>
              {stats.map((stat) =>
                stat.stat.name === "special-defense" ? stat.base_stat : ""
              )}
            </td>
          </tr>
          <tr>
            <td>Speed:</td>
            <td>
              {stats.map((stat) =>
                stat.stat.name === "speed" ? stat.base_stat : ""
              )}
            </td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailedPokemon;
