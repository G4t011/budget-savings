import { useState, useEffect } from 'react'

const Filter = ( {filter, setFilter} ) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className='campo'>
                <label>Filter expenses</label>
                <select
                    value={filter}
                    onChange = { e=> setFilter(e.target.value)}
                >
                    <option value="">-- All categories --</option>
                    <option value="ahorro">Savings</option>
                    <option value="comida">Food</option>
                    <option value="casa">Home</option>
                    <option value="gastos">Other expenses</option>
                    <option value="ocio">Entertainment</option>
                    <option value="salud">Health</option>
                    <option value="suscripciones">Subscriptions</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filter
