/* eslint-disable no-template-curly-in-string */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI= 'despuiesborrar-production.up.railway.app/'

const CompShowStock = () => {
    const [productos,setProducto] = useState([])
    useEffect(()=>{
        getProductos()
    },[])

    const getProductos= async ()=>{
      const res= await axios.get(URI)
      setProducto(res.data);
    }

    const deleteProducto= async (id)=>{
       await axios.delete(`${URI}${id}`)
        getProductos()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create'>Crear</Link>
                  <table className='table'>
                     <thead className='table-primary'>
                           <tr>
                              <th>nombre_producto</th>
                              <th>descripcion</th>
                              <th>precio</th>
                              <th>cantidad</th>
                              <th>tipo</th>
                              <th>Acciones</th>
                              </tr>
                     </thead>
                     <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id_producto}>
                              <td>{producto.nombre_producto}</td>
                              <td>{producto.descripcion_producto}</td>  
                              <td>{producto.precio}</td>
                              <td>{producto.cantidad}</td>
                              <td>{producto.id_tipo}</td>
                              <td>
                            { <Link to={`/edit/${producto.id_producto}`}>Editar</Link> }
                                <button onClick={()=>deleteProducto(producto.id_producto)}>Delete</button>
                              </td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
            </div>  
        </div>
    )
}

export default CompShowStock 
