import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import LineChart from '../../components/charts/timeline/TimelineChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container } from './Charts.styled'

const ChartsEte = ({ type ,eng }) => {
    const [series, setSeries]= useState([])
    const [isLoading,setIsloading] = useState(false)
    const { selectedTime,
        setSelectedTime, equip } = useContext(RequisitionContext)
    
    useEffect(()=>{
        handleRequisition()
    },[type, selectedTime])
    
        const handleRequisition = async () => {
            const newReq ={
                initialDate: new Date(new Date().getTime()-getTimeInMilliseconds(selectedTime)),
                finalDate: new Date()
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
        console.log(series)
    
    
  return (
    <Container>

    <AreaChart series={series} eng={eng}/>

</Container>
  )
}

export default ChartsEte