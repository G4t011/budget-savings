import { useState, useEffect } from 'react';
import Message from './Message';
import CloseBtn from '../img/close.svg'

// Props
const Modal = ( {
    setModal, 
    animateMod, 
    setAnimateMod, 
    saveXpnse, 
    xpnseEdit,
    setXpnseEdit
    }) => {

    const [message, setMessage] = useState('');

    const [nombre, setNombre] = useState('');  
    const [cantidad, setCantidad] = useState('');  
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if(Object.keys(xpnseEdit).length > 0) {
            setNombre(xpnseEdit.nombre)
            setCantidad(xpnseEdit.cantidad)
            setCategoria(xpnseEdit.categoria)
            setId(xpnseEdit.id)
            setFecha(xpnseEdit.fecha)
        }
    
      }, []);
    

    const hideModal = () => {
        setAnimateMod(false);
        setTimeout(() => {
            setModal(false)
            setXpnseEdit({})
        }, 500);
    }  

    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')) {
            setMessage('Todos los campos son obligatorios');

            setTimeout(() => {
                setMessage('')
            }, 3000);
            return;
        }

        saveXpnse({nombre, cantidad, categoria, id, fecha})
        
        }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CloseBtn} 
                    alt="Close modal"
                    onClick={hideModal} 
                />
            </div>

            <form 
                onSubmit= {handleSubmit}
                className={`formulario ${animateMod ? "animar" : "cerrar"}`}> 
                <legend> {xpnseEdit.nombre ? 'Editar Gasto' : 'Nuevo Gasto'} </legend>

                {message && <Message type = "error">{message}</Message>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Añade el Nombre del Gasto'
                        value={nombre}
                        onChange = { e => setNombre(e.target.value)}
                     />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del Gasto: ej: 300'
                        value={cantidad}
                        onChange = { e => setCantidad(Number(e.target.value))}
                     />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange = { e => setCategoria(e.target.value)}
                        >

                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input 
                    type="submit"
                    value={xpnseEdit.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
                />


            </form>
            
        
        </div>
    )
}

export default Modal