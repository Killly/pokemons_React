import React from "react";
import PokemonList from "./PokemonList/PokemonList";
import PokemonDetails from "./PokemonDetails/PokemonDetails";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <PokemonList />
      <PokemonDetails />
    </div>
  );
}

export default App;
