import React from 'react'
import Xpnse from './Xpnse'

const ExpensesList = ( {
    xpnses, 
    setXpnseEdit, 
    deleteXpnse,
    filter,
    filteredXpnses
    } ) => {
  return (
        <div className='listado-gastos contenedor'>
            
            {filter ? (
                <>    
                    <h2>{filteredXpnses.length ?'Gastos' : 'No hay gastos en esta categoria'}</h2>
                    {filteredXpnses.map( xpnse => (
                        <Xpnse 
                        key = {xpnse.id}
                        xpnse = {xpnse}
                        setXpnseEdit = {setXpnseEdit}
                        deleteXpnse = {deleteXpnse}
                        />
                        ))}
                </>    
                ) : (
                <>
                <h2>{xpnses.length ?'Gastos' : 'No hay gastos'}</h2>
                {xpnses.map( xpnse => (
                    <Xpnse 
                       key = {xpnse.id}
                       xpnse = {xpnse}
                       setXpnseEdit = {setXpnseEdit}
                       deleteXpnse = {deleteXpnse}
                        />
                    ))}
                </>
                )
            }

        </div>
  )
}

export default ExpensesList