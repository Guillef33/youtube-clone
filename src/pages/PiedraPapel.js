import React, { useState } from 'react'

import piedra from '../assets/images/juego/piedra.jpg'
import papel from "../assets/images/juego/papel.jpg";
import tijera from "../assets/images/juego/tijera.jpg";

import './PiedraPapel.css'


const PiedraPapel = () => {

    const [jugador, setJugador] = useState();
    // const resultadoGlobal = 'Piedra';
    const [resultado, setResultado] = useState();


    function getTijera() {
     console.log('Clic')
      let tijera = 'Tijera';
      setJugador(tijera);
    }

    function getPiedra() {
      let piedra = "Piedra";
      setJugador(piedra);

    }

    function getPapel() {
      let papel = "Papel";
      setJugador(papel);



    }

function PiedraPapelTijera (jugador, computador) {
  // Piedra
  if (jugador === "Piedra" && computador === "Tijera") {
    setResultado("Ganaste. Piedra rompe la tijera");
    console.log("Ganaste. Piedra rompe la tijera");
  } else if (jugador === "Piedra" && computador === "Papel") {
     setResultado("Perdiste. Papel envuelve a la piedra")
  } else if (jugador === "Piedra" && computador === "Piedra") {
    setResultado(`Elegiimos la misma ${piedra}, juguemos de nuevo"`)
  }
  // Tijera
  else if (jugador === "Tijera" && computador === "Papel") {
    setResultado("Ganaste. Tijera corta el papel.");
  } else if (jugador === "Tijera" && computador === "Piedra") {
   setResultado("Perdiste. Piedra rompe la tijera.");
  } else if (jugador === "Tijera" && computador === "Tijera") {
    setResultado("Lo mismo, juguemos de nuevo");
  }
  // Papel
  else if (jugador === "Papel" && computador === "Piedra") {
    setResultado("Ganaste. Papel envuelve a la piedra");
  } else if (jugador === "Papel" && computador === "Tijera") {
    setResultado("Perdiste. Tijera corta el papel");
  } else if (jugador === "Papel" && computador === "Papel") {
    setResultado("Lo mismo, juguemos de nuevo");
  }
   else {
    console.log("Me falta hacer esto");
  }
}

    return (
      <>
        <h2>Piedra, papel y tijera</h2>
        <p>Haz clic en las imagenes y elije</p>
        <div className="option-selector">
          <img
            src={piedra}
            alt="piedra"
            id="piedra"
            onClick={() => getPiedra()}
          />
          <img src={papel} alt="piedra" id="papel" onClick={() => getPapel()} />
          <img
            src={tijera}
            alt="piedra"
            id="tijera"
            onClick={() => getTijera()}
          />
        </div>
        <p>Elegiste: {jugador}</p>
        <button type="button" onClick={PiedraPapelTijera(jugador, 'Piedra')}> Jugar </button>
      </>
    );
}

export default PiedraPapel;
