import React from 'react'

export default function Bienvenido (props) {
    
    return (
        <div>
           <p>Hola, {props.nombre}</p> 
           <p>Tu apellido es, {props.apellido}</p> 
        </div>
    )
}