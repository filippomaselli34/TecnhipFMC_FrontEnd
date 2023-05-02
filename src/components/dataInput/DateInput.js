import React, { useContext } from 'react'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Contanier } from './DateInput.styled'

const DateInput = ({handleRequisition}) => {

    const { dataInicial, setDataInicial, dataFinal, setDataFinal,setSelectedTime} = useContext(RequisitionContext)
    console.log(dataInicial, dataFinal)
    return (
        <Contanier>
            <input type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} />
            <p>-</p>
            <input type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />
            <button onClick={()=>{
                setSelectedTime('5m')
                handleRequisition()}} className='btn btn-light'>Enviar</button>
        </Contanier>
    )
}

export default DateInput