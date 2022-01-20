import React, { useState } from "react";

import piedraImg from "../assets/images/juego/piedra.jpg";
import papelImg from "../assets/images/juego/papel.jpg";
import tijeraImg from "../assets/images/juego/tijera.jpg";

import "./PiedraPapel.css";

const PiedraPapel = () => {
  const [jugador, setJugador] = useState();
  const [piedra, setPiedra] = useState();
  const [papel, setPapel] = useState();
  const [tijera, setTijera] = useState();

  // const resultadoGlobal = 'Piedra';
  const [resultado, setResultado] = useState();

  function getTijera() {
    let tijera = "tijera";
    // let tijera = document.getElementById('tijera')
    // console.log(tijera)
    setJugador(tijera);
    // console.log(tijera)
  }

  function getPiedra() {
    let piedra = "Piedra";
    setJugador(piedra);
  }

  function getPapel() {
    let papel = "Papel";
    setJugador(papel);
  }
     let computador;



//   function PiedraPapelTijera(jugador, computador) {
//     // Piedra
//     if (jugador === "Piedra" && computador === "Tijera") {
//       setResultado("Ganaste. Piedra rompe la tijera");
//       console.log("Ganaste. Piedra rompe la tijera");
//     } else if (jugador === "Piedra" && computador === "Papel") {
//       setResultado("Perdiste. Papel envuelve a la piedra");
//     } else if (jugador === "Piedra" && computador === "Piedra") {
//       setResultado(`Elegiimos la misma ${piedra}, juguemos de nuevo"`);
//     }
//     // Tijera
//     else if (jugador === "Tijera" && computador === "Papel") {
//       setResultado("Ganaste. Tijera corta el papel.");
//     } else if (jugador === "Tijera" && computador === "Piedra") {
//       setResultado("Perdiste. Piedra rompe la tijera.");
//     } else if (jugador === "Tijera" && computador === "Tijera") {
//       setResultado("Lo mismo, juguemos de nuevo");
//     }
//     // Papel
//     else if (jugador === "Papel" && computador === "Piedra") {
//       setResultado("Ganaste. Papel envuelve a la piedra");
//     } else if (jugador === "Papel" && computador === "Tijera") {
//       setResultado("Perdiste. Tijera corta el papel");
//     } else if (jugador === "Papel" && computador === "Papel") {
//       setResultado("Lo mismo, juguemos de nuevo");
//     } else {
//       console.log("Me falta hacer esto");
//     }
//   }

//   let nuevoResultado = PiedraPapelTijera(jugador, computador);

  return (
    <>
      <h2>Piedra, papel y tijera</h2>
      <p>Haz clic en las imagenes y elije</p>
      <div className="option-selector">
        <img
          src={piedraImg}
          alt="piedra"
          id="piedra"
          onClick={() => getPiedra()}
        />
        <img
          src={papelImg}
          alt="piedra"
          id="papel"
          onClick={() => getPapel()}
        />
        <img
          src={tijeraImg}
          alt="piedra"
          id="tijera"
          onClick={() => getTijera()}
        />
      </div>
      <p>Elegiste: {jugador}</p>
      <p>La computadora eligio: {computador}</p>;
      <button type="button">Jugar</button>
      {/* <p>Elegiste: {nuevoResultado}</p> */}
    </>
  );
};

export default PiedraPapel;
