import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ( {
        xpnses, 
        setXpenses, 
        budget, 
        setBudget,
        setValidBudget
    } ) => {

    const [percent, setPercent] = useState(0);
    const [avaiable, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    // This Effect calculates spent money
    useEffect(() => {
        const totalSpent = xpnses.reduce( (total, xpnse) => {
            return xpnse.cantidad + total
        }, 0)

        const totalAvailable = budget - totalSpent;

        // calculate percentage of expenses
        const newPercent = (( (budget - totalAvailable) / budget ) * 100).toFixed(2);

        // console.log(totalSpent);
        setAvailable(totalAvailable);
        setSpent(totalSpent);

        setTimeout(() => {
            setPercent(newPercent);            
        }, 1000);

    }, [xpnses])
    

    const formatQty = (qty) => {
        return qty.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN'
        })
    }

    const handleResetApp = () => {
        const result = confirm('¿Deseas reiniciar la APP?')
        if (result) {
            setXpenses([]);
            setBudget(0);
            setValidBudget(false);
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                styles = {buildStyles({
                    pathColor: percent > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percent > 100 ? '#DC2626' : '#3B82F6'
                })}
                value = {percent}
                text = {`${percent}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <button
                className='reset-app'
                type='button'
                onClick={handleResetApp}
            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span> { formatQty(budget) }  
            </p>
            <p className={`${avaiable < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span> { formatQty(avaiable) }  
            </p>
            <p>
                <span>Gastado: </span> { formatQty(spent) }  
            </p>
        </div>
    </div>
  )
}

export default BudgetControl