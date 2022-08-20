import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const header = ({
    xpnses,
    setXpenses,
    budget, 
    setBudget, 
    validBudget, 
    setValidBudget
  }) => {
  return (
        <header>
            <h1>Planificador de Presupuestos</h1>

            {/* ternary to know if budget is or don't valid if OK next step, if don't repeat form*/}
            {validBudget ? (
                <BudgetControl 
                  xpnses = {xpnses}
                  setXpenses = {setXpenses}
                  budget = {budget}
                  setBudget = {setBudget}
                  setValidBudget = {setValidBudget}
                />
            ) : (
                <NewBudget
                  budget = {budget}
                  setBudget = {setBudget}
                  setValidBudget = {setValidBudget}
                />
            )}
            
        </header>
  )
}

export default header