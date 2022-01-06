import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import Formulario from '../componentes/Formulario'

const EditarCliente = () => {
    
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const obtenerclienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado);
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setCargando(false)
            }, 800);
        }
        obtenerclienteAPI()
    }, [])

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este Formulario para editar datos de un Cliente</p>

            {cliente?.nombre ? (
                <Formulario 
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : <p>Cliente ID no valido</p>}
        </>
    )
}

export default EditarCliente
