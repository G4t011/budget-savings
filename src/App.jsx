import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filter from './components/Filter';
import ExpensesList from './components/ExpensesList';
import Modal from './components/Modal';
import { idGen } from './helpers';
import IconNewExp from './img/new_expense.svg'



function App() {

  const [xpnses, setXpenses] = useState(
    localStorage.getItem('xpnses') ? JSON.parse(localStorage.getItem('xpnses')) : [] 
  )

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )

  const [validBudget, setValidBudget] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animateMod, setAnimateMod] = useState(false);

  const [xpnseEdit, setXpnseEdit] = useState({});

  const [filter, setFilter] = useState('');
  const [filteredXpnses, setFilteredXpnses] = useState([]);

  useEffect(() => {
    // Verify if xpnseEdit has info
    if(Object.keys(xpnseEdit).length > 0) {
      setModal(true);
  
      setTimeout(() => {
        setAnimateMod(true);
      }, 500);
    }
  },[xpnseEdit])

  useEffect(() => {
      localStorage.setItem('budget', budget ?? 0)
    }
  , [budget])

  useEffect(() => {
    localStorage.setItem('xpnses', JSON.stringify(xpnses) ?? []);
  }, [xpnses])

  useEffect(() => {
    if(filter) {
      // Filtering expenses
      const filteredXpnses = xpnses.filter( xpnse => xpnse.categoria === filter)

      setFilteredXpnses(filteredXpnses)
    }
  }, [filter])
  
  

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if( budgetLS > 0 ) {
      setValidBudget(true);
    }

  }, [])
  
  
  

  const handleNewExp = () => {
    setModal(true);
    setXpnseEdit({});

    setTimeout(() => {
      setAnimateMod(true);
    }, 500);
  }

  const saveXpnse = xpnse => {
    if(xpnse.id) {
      // Update
      const updatedXpnses = xpnses.map(xpnseState => xpnseState.id === xpnse.id ? xpnse : xpnseState )
      setXpenses(updatedXpnses);
      setXpnseEdit({})
    }else {
      //Nuevo Gasto
      xpnse.id = idGen();
      xpnse.fecha = Date.now();
      setXpenses([...xpnses, xpnse ]);
    }

    // Add lines that hide modal
    setAnimateMod(false);
    setTimeout(() => {
            setModal(false);
    }, 500);
  }

  const deleteXpnse = id => {
    const updatedXpnses = xpnses.filter( xpnse => xpnse.id !== id );

    setXpenses(updatedXpnses);
  }

  return (
      <div className={modal ? 'fijar' : ''}>
        <Header
          xpnses = {xpnses}
          setXpenses = {setXpenses}
          budget = {budget}
          setBudget = {setBudget}
          validBudget = {validBudget}
          setValidBudget = {setValidBudget}
        />

        {/* Condition just if is true */}
        {validBudget && (
          <>
            <main>

              <Filter
                filter = {filter}
                setFilter = {setFilter}
              />

              <ExpensesList 
                  xpnses = {xpnses}
                  setXpnseEdit = {setXpnseEdit}
                  deleteXpnse = {deleteXpnse}
                  filter = {filter}
                  filteredXpnses = {filteredXpnses}
              />
            </main>
            <div className='nuevo-gasto'>
            <img 
                src={IconNewExp}
                alt='new expense icon'
                onClick={handleNewExp}
              />
            </div>
          </>
        )}

        {modal && 
            <Modal 
                setModal = {setModal}
                animateMod = {animateMod}
                setAnimateMod = {setAnimateMod}
                saveXpnse = {saveXpnse}
                xpnseEdit = {xpnseEdit}
                setXpnseEdit = {setXpnseEdit}
            /> }
        
      </div>
  )
}

export default App
