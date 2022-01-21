import React, { useState } from "react";

import piedraImg from "../assets/images/juego/piedra.jpg";
import papelImg from "../assets/images/juego/papel.jpg";
import tijeraImg from "../assets/images/juego/tijera.jpg";

import "./PiedraPapel.css";

const PiedraPapel = () => {
  const posibilidades = ["Piedra", "Papel", "Tijera"];
  const [jugador, setJugador] = useState();
  const [resultado, setResultado] = useState();
  // const [piedra, setPiedra] = useState();
  // const [papel, setPapel] = useState();
  // const [tijera, setTijera] = useState();

  const papelImagen = document.getElementById("papel");
  const piedraImagen = document.getElementById("piedra");

  const getImageName = () => {
    if (jugador === "Piedra") {
      console.log("Hiciste clic en piedra");
    } else if (jugador === "Tijera") {
      console.log("Hiciste clic en tijera");
    } else if (jugador === "Papel") {
      console.log("Hiciste clic en papel");
    }
  };

  getImageName();

  const juegoComputadora = Math.floor(Math.random() * posibilidades.length);

  let computador = posibilidades[juegoComputadora];

  function jugar() {
    if (
      (jugador === "Piedra" && computador === "Piedra") ||
      (jugador === "Papel" && computador === "Papel") ||
      (jugador === "Tijera" && computador === "Tijera")
    ) {
      console.log("Empate");
      setResultado("Empate");
    } else if (
      (jugador === "Piedra" && computador === "Tijera") ||
      (jugador === "Tijera" && computador === "Papel")
    ) {
      setResultado("Gana Jugador");
    } else if (
      (jugador === "Piedra" && computador === "Papel") ||
      (jugador === "Tijera" && computador === "Piedra") ||
      (jugador === "Papel" && computador === "Tijera")
    ) {
      setResultado("Gana Computador");
    } else {
      console.log(
        `Este resultado no lo tengo, jugador eligio ${jugador} y computadora eligio ${computador}`
      );
    }
  }

  return (
    <>
      <h2>Piedra, papel y tijera</h2>
      <div className="game-container">
        <div className="box-resultados">
          <p>Elegiste: {jugador}</p>
          <p>La computadora eligio: {computador}</p>
          <p>El resultado fue {resultado}</p>
          <button type="button" onClick={jugar}>
            Jugar
          </button>
        </div>
        <div className="image-container">
          <img
            src={piedraImg}
            alt="piedra"
            id="piedra"
            onClick={(e) => setJugador("Piedra")}
          />
          <img
            src={papelImg}
            alt="papel"
            id="papel"
            onClick={(e) => setJugador("Papel")}
          />
          <img
            src={tijeraImg}
            alt="tijera"
            id="tijera"
            onClick={(e) => setJugador("Tijera")}
          />
        </div>
      </div>
    </>
  );
};

export default PiedraPapel;
