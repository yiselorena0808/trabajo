import React, { useState } from "react";

interface FormUsuario{
    onSubmit:(datos:{nombre:string,correo:string,edad:number})=>void;
}

const Formulario:React.FC<FormUsuario>=({onSubmit})=>{
    const [nombre,setNombre]=useState("");
    const [correo,setCorreo]=useState("");
    const [edad,setEdad]=useState(0);

    const Ver=(Event:React.FormEvent<HTMLFormElement>)=>{
        Event.preventDefault();
        console.log(nombre,correo,edad);
        onSubmit({nombre,correo,edad});
    }
    return(
        <div>
            <form onSubmit={Ver}>
                <label>nombre</label>
                <input type="text" onChange={(Event)=>setNombre(Event.target.value)}></input>
                <label>correo electronico</label>
                <input type="email" onChange={(Event)=>setCorreo(Event.target.value)}></input>
                <label>edad</label>
                <input type="number" onChange={(Event)=>setEdad(parseInt(Event.target.value))}></input>
                <button type="submit">Ver</button>
            </form>
        </div>
    );
};

export default Formulario;