import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControPresupuesto from "./ControPresupuesto";

function Header({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
  isValidPresupuesto,
  gastos,
  setGastos
}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>
        {/* si setIsValidPresupuesto que es false que viene de app viaja hacia header de header viaja hacia nuevo presupuesto 
        en nuevo presupuesto si el valor ungresdo es valido setea la variable isValidPresupuesto a true , aqui si es true ira a una pantalla 
        si no , hara el viaje desde el pricnipio hassta que sea valido y pueda pasar a la pantalla de control de presupuesto  */}
      {isValidPresupuesto ? (
        <ControPresupuesto
        presupuesto={presupuesto}
        gastos={gastos}
        setGastos={setGastos}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
}

export default Header;
