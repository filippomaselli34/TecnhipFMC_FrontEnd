import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ColumnChart from '../../components/charts/columnChart/ColumnChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { handleRequisitionHarmonica } from '../../requisitions/equipReq'
import { Container } from './Charts.styled'

const Harmonicas = () => {
    const [data,setData]= useState()
    const[isLoading, setIsloading]= useState(false)
    const { selectedTime,
        setSelectedTime, dataInicial, setDataInicial, dataFinal, setDataFinal, equip } = useContext(RequisitionContext)

useEffect(()=>{
    handleRequisitionHarmonica()
    setSelectedTime('5m')

},[])
useEffect(()=>{
    handleRequisitionHarmonica()
},[selectedTime])
 const handleRequisitionHarmonica = async () => {
    const newReq ={
        trafo:equip.equipDB.toLowerCase(),
        type:"Harmônica",
        initialDate: new Date(new Date(dataInicial).getTime()-getTimeInMilliseconds(selectedTime)),
        finalDate: new Date(dataFinal)
    }

try {
    setIsloading(true)
    const result = await axios.post(BASE_URL+"equipment",newReq)
    setData(result.data)
    setIsloading(false)
} catch (error) {
    setIsloading(false)
    console.log(error)
}

}


    return (
        <Container>
            {data?.correnteA &&
                <ColumnChart data={data} handleRequisitionHarmonica={handleRequisitionHarmonica}/>
            }
        </Container>
    )
}

export default Harmonicas