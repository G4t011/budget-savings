import { useState } from 'react'
import Message from './Message';

const NewBudget = ({
    budget, 
    setBudget, 
    setValidBudget
  }) => {

  const [message, setMessage] = useState('');
  
  const handleBudget = (e) => {
      e.preventDefault();

      // Verify if the amount is valid or not
      if(!budget || budget < 0) {
        setMessage('No es un presupuesto valido')
        return
      }

      setMessage('');
      setValidBudget(true);

      // console.log(budget);
  }
  
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handleBudget} className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>
                
                <input 
                className='nuevo-presupuesto'
                type="number"
                placeholder="Ingresa tu presupuesto" 
                value={budget}
                onChange = { e => setBudget(Number(e.target.value))}
                />

            </div>

            <input type="submit" value="Añadir" />

            {/* This send children and type to Message func */}
            {message && <Message type="error">{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget