import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { handleRequitisionCorrenteEletrica, handleRequitisionFatorDePotencia, handleRequitisionFrequencia, handleRequitisionPotenciaEletrica, handleRequitisionTensaoEletrica } from '../../requisitions/equipReq'
import { Container } from './Charts.styled'

const Charts = ({ type ,eng }) => {
const [series, setSeries]= useState([])
const [isLoading,setIsloading] = useState(false)
const { selectedTime,
    setSelectedTime, dataInicial, setDataInicial, dataFinal, setDataFinal, equip } = useContext(RequisitionContext)

useEffect(()=>{
    handleRequisition()
},[type, selectedTime])

    const handleRequisition = async () => {
        const newReq ={
            trafo:equip.equipDB.toLowerCase(),
            type,
            initialDate: new Date(new Date(dataInicial).getTime()-getTimeInMilliseconds(selectedTime)),
            finalDate: new Date(dataFinal)
        }
    try {
        setIsloading(true)
        const result = await axios.post(BASE_URL+"equipment",newReq)
        setSeries(result.data)
        setIsloading(false)
    } catch (error) {
        setIsloading(false)
        console.log(error)
    }
    
    }



    return (
        <Container>

            <AreaChart series={series} eng={eng} handleRequisition={handleRequisition}
 />
        </Container>
    )
}

export default Charts