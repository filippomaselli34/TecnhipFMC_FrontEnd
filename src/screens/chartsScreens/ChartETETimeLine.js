import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import LineChart from '../../components/charts/timeline/TimelineChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container } from './Charts.styled'

const ChartsETETimeline = ({type}) =>  {
    const [series, setSeries]= useState([])
    const [isLoading,setIsloading] = useState(false)
    const { selectedTime,
        setSelectedTime, equip, setScreenFlow} = useContext(RequisitionContext)
    
    useEffect(()=>{
        // handleRequisition()
    },[ selectedTime])
    

    
  return (
    <Container>

    <LineChart />
    <button onClick={()=>setScreenFlow("Overview (ETE)")} className='btn btn-info'>Voltar</button>

</Container>
  )
}

export default ChartsETETimeline