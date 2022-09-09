import React from 'react'

// esto es una especie de helper en el cual podemos poner mensajes segun el setMensaje del componente que estemos asi solo podnremos 
// el mensaje y el tipo y se le añadiran los estilos segun se colquen

function Mensaje({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje