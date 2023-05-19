import React, { useContext, useState } from 'react'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Contanier } from './DateInput.styled'

const DateInput = ({handleRequisition}) => {

    const { dataInicial, setDataInicial, dataFinal, setDataFinal,setSelectedTime} = useContext(RequisitionContext)
    const [dataInicialBuffer, setDataInicialBuffer] = useState(dataInicial)
    const [dataFinalBuffer, setDataFinalBuffer] = useState(dataFinal)
    return (
        <Contanier>
            <input type="date" value={dataInicialBuffer} onChange={(e) => setDataInicialBuffer(e.target.value)} />
            <p>-</p>
            <input type="date" value={dataFinalBuffer} onChange={(e) => setDataFinalBuffer(e.target.value)} />
            <button onClick={()=>{
                setSelectedTime('5m')
                console.log(new Date(dataInicialBuffer).toISOString())
                setDataInicial(dataInicialBuffer)
                setDataFinal(dataFinalBuffer)
                handleRequisition(new Date(new Date(dataInicialBuffer).getTime()+3*60*60*1000),new Date(new Date(dataFinalBuffer).getTime()+3*60*60*1000))}} className='btn btn-light'>Enviar</button>
        </Contanier>
    )
}

export default DateInput