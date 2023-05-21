import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI= 'https://despuiesborrar-production.up.railway.app/'

const CompCreateStock=()=>{
 
    const [nombre_producto, setNombreProducto]= useState('')
    const [descripcion_producto, setDescripcion]= useState('')
    const [precio, setPrecio]= useState('')
    const [cantidad, setCantidad]= useState('')
    const [id_tipo, setTipo]= useState('')
    const navigate = useNavigate()

    const store= async(e)=> {
        e.preventDefault()
        await axios.post(URI, {
            nombre_producto:nombre_producto,
            descripcion_producto: descripcion_producto,
            precio:precio,
            cantidad:cantidad,
            id_tipo:id_tipo})
            navigate('/')
    }
    return (
        <div>
            <h3>Create Post</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                 <label className='form-label'>Nombre</label>
                 <input
                 value={nombre_producto}
                 onChange={(e)=> setNombreProducto(e.target.value)}
                 type='text'
                 className='form-control'
                 ></input>
 </div>
<div className='mb-3'>
                 <label className='form-label'>Descripcion</label>
                 <textarea
                 value={descripcion_producto}
                 onChange={(e)=> setDescripcion(e.target.value)}
                 type='text'
                 className='form-control' 
                 ></textarea>
 </div>
<div className='mb-3'>
                <label className='form-label'>Precio</label>
                 <textarea
                 value={precio}
                 onChange={(e)=> setPrecio(e.target.value)}
                 type='text'
                 className='form-control' 
                 ></textarea>
 </div>
<div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                 <textarea
                 value={cantidad}
                 onChange={(e)=> setCantidad(e.target.value)}
                 type='text'
                 className='form-control' 
                 ></textarea>
                </div>
                <div className='mb-3'>
                <label className='form-label'>Tipo</label>
                 <textarea
                 value={id_tipo}
                 onChange={(e)=> setTipo(e.target.value)}
                 type='text'
                 className='form-control' 
                 ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateStock