import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container } from './Charts.styled'

const ChartsEte = ({ type ,eng }) => {
    const [series, setSeries]= useState([])
    const [isLoading,setIsloading] = useState(false)
    const { 
        selectedTime,
        dataInicial,  
        dataFinal
         } = useContext(RequisitionContext)
    
    useEffect(()=>{
        handleRequisition()
    },[type, selectedTime])
    
        const handleRequisition = async () => {
            const newReq ={
                initialDate: new Date(new Date(dataInicial).getTime()),
                finalDate: new Date(dataFinal)
            }
        try {
            setIsloading(true)
            const result = await axios.post(BASE_URL+"equipment/analogic",newReq)
            setSeries(result.data)
            setIsloading(false)
        } catch (error) {
            setIsloading(false)
            console.log(error)
        }
        
        }
    
    
  return (
    <Container>

    <AreaChart series={series} eng={eng} handleRequisition={handleRequisition}/>

</Container>
  )
}

export default ChartsEte