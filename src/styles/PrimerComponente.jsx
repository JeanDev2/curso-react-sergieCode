import React from "react";
import "./styles/PrimerComponente.css";

// VARIABLES

const string = "Esto es un texto";
const number = 123456;
const array = ["Curso React", "Curso JS", 4, 1000];
const funcion = () => 1 + 1;
const boolean = true;
const objeto = { nombre: "Jean", edad: 12 };
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    // <FRAGMENT> <FRAGMENT/> ahora es <> </>
    <>
      <h1>Variables</h1>
      <p>String: {string}</p>
      <p>Number: {number}</p>
      <p>array: {array}</p>
      <p>funcion: {funcion()}</p>
      <p>boolean: {boolean}</p>
      <p>objeto: {JSON.stringify(objeto)}</p>
      <p>fecha: {JSON.stringify(fecha)}</p>
    </>
  );
};
