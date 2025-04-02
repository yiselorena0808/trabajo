interface Usuario{
    nombre:string;
    correo:string;
    edad:number;
}

const Perfil:React.FC <Usuario>=({nombre,correo,edad})=>{
    return(
        <div>
            <p><strong>Nombre del usuario:</strong>{nombre}</p>
            <p><strong>Correo electronico del usuario:</strong>{correo}</p>
            <p><strong>Edad del usuario:</strong>{edad}</p>
        </div>
    );
};
export default Perfil;