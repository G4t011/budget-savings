import React from 'react'

// Both next import bring features to do swipe options
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import { formatDate } from '../helpers'

import IconAhorro from '../img/icono_ahorro.svg'
import IconCasa from '../img/icono_casa.svg'
import IconComida from '../img/icono_comida.svg'
import IconGastos from '../img/icono_gastos.svg'
import IconOcio from '../img/icono_ocio.svg'
import IconSalud from '../img/icono_salud.svg'
import IconSuscrip from '../img/icono_suscripciones.svg'

const IconLibrary = {
    ahorro : IconAhorro,
    comida : IconComida,
    casa : IconCasa,
    gastos : IconGastos,
    ocio : IconOcio,
    salud : IconSalud,
    suscripciones : IconSuscrip
}

const Xpnse = ( {xpnse, setXpnseEdit, deleteXpnse} ) => {
    const {categoria, nombre, cantidad, id, fecha} = xpnse;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() =>  setXpnseEdit(xpnse)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() =>  deleteXpnse(id)}
                destructive = {true}
            >
                Remove
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions = {leadingActions()}
                trailingActions = {trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img 
                            src={IconLibrary[categoria]} 
                            alt="Icono Gasto" 
                        />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>
                                Agregado el:{' '}
                                <span>{formatDate(fecha)}</span>
                            </p>
                        </div>
                    </div>  
                    <p className='cantidad-gasto'>$ {cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>    
    )
}

export default Xpnse
