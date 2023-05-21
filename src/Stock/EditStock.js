import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI= 'despuiesborrar-production.up.railway.app/'

const CompEditBlog=()=>{
    const [nombre_producto, setNombreProducto]= useState('')
    const [descripcion_producto, setDescripcion]= useState('')
    const [precio, setPrecio]= useState('')
    const [cantidad, setCantidad]= useState('')
    const [id_tipo, setTipo]= useState('')
    const {id}= useParams()
    const navigate= useNavigate()

    const update= async(e)=> {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre_producto:nombre_producto,
            descripcion_producto: descripcion_producto,
            precio:precio,
            cantidad:cantidad,
            id_tipo:id_tipo})
            navigate('/')
    }

    useEffect(()=>{
        getProductoById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getProductoById= async()=>{
        const res= await axios.get(URI+id)
        setNombreProducto(res.data.nombre_producto)
        setDescripcion(res.data.descripcion_producto)
        setPrecio(res.data.precio)
        setCantidad(res.data.cantidad)
        setTipo(res.data.id_tipo)
    }

    return(
        <div>
        <h3>edit Post</h3>
        <form onSubmit={update}>
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

export default CompEditBlog