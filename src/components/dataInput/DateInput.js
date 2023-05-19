import React, { useContext, useState } from 'react'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Contanier } from './DateInput.styled'

const DateInput = ({ handleRequisition, timeline }) => {

    const { dataInicial, setDataInicial, dataFinal, setDataFinal, setSelectedTime } = useContext(RequisitionContext)
    const [dataInicialBuffer, setDataInicialBuffer] = useState(dataInicial)
    const [dataFinalBuffer, setDataFinalBuffer] = useState(dataFinal)
    return (
        <Contanier>
            <input type="date" value={dataInicialBuffer} onChange={(e) => setDataInicialBuffer(e.target.value)} />
            <p>-</p>
            <input type="date" value={dataFinalBuffer} onChange={(e) => setDataFinalBuffer(e.target.value)} />
            <button onClick={() => {
                setSelectedTime('5m')
                console.log(new Date(dataInicialBuffer).toISOString())
                console.log(dataFinalBuffer - dataInicialBuffer, "aki")

                if (new Date(dataFinalBuffer).getTime() - new Date(dataInicialBuffer).getTime() > 7 * 24 * 60 * 60 * 1000 && timeline) {
                    window.alert("No maximo 7 dias")
                } else {
                    setDataInicial(dataInicialBuffer)
                    console.log(dataFinalBuffer)
                    setDataFinal(dataFinalBuffer)
                    handleRequisition(new Date(new Date(dataInicialBuffer).getTime() + 3 * 60 * 60 * 1000).toISOString(), new Date(new Date(dataFinalBuffer).getTime() + 3 * 60 * 60 * 1000).toISOString())
                }
                }
                }
                className='btn btn-light'>Enviar</button>
        </Contanier>
    )
}

export default DateInput