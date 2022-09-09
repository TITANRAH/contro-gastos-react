import {useState} from "react";
import Mensaje from "./Mensaje";

// ESTE ESTE STATE SOLO SE REQUIERE EN ESTE COMPONENTE POR QUE DARA EL MENSAJE DE CUANDO NO SEA UN COMPONENTE VALIDO 

function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {

    const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!presupuesto || presupuesto < 0 ){
        setMensaje('No es un presupuesto valido intenta nuevamente')
        setPresupuesto('')
        return
    }else {
        setMensaje('');

        // si el presupuesto es valido seteamos el booleano que viene desde app js a true 
        // nos servira para poder usarlo en el header en donde esta el formulario , para ir hacia una pagina u otra dependiendo de si es true o false
        setIsValidPresupuesto(true)
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            //    presupuesto es cero en apjs desde ahi viaja pasa por header y luego a NuevoPresupuesto
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        
        </div>

        <input type="submit" value="Añadir" />
        {/* si hay un mensaje osea si la variable presupuesto no es valida osea que es letra o numero, lanzara el componente mensaje 
        el componente mensaje tiene una variable de clase y un tipo de clase dinamica que le pasamos aca y tiene un children 
        que a su vez es el mensaje en este componente */}
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
