import { useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import Perfil from './PerfilUsuario'

function App() {
  const [datos,setDatos]=useState<{nombre:string,correo:string,edad:number}|null>(null);

const Ver=(dato:{nombre:string,correo:string,edad:number})=>{
  setDatos(dato);
}

  return (
    <div>
      <Formulario onSubmit={Ver}></Formulario>
      {datos &&
      <Perfil nombre={datos.nombre} correo={datos.correo} edad={datos.edad} ></Perfil>}
    </div>
  )
}

export default App
