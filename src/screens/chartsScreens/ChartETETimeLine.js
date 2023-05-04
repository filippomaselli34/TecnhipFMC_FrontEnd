import React, { useContext } from 'react'
import LineChart from '../../components/charts/timeline/TimelineChart'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container } from './Charts.styled'

const ChartsETETimeline = () =>  {
    const { selectedTime,
         setScreenFlow} = useContext(RequisitionContext)
    


    
  return (
    <Container>

    <LineChart />
    <button onClick={()=>setScreenFlow("Overview (ETE)")} className='btn btn-info'>Voltar</button>

</Container>
  )
}

export default ChartsETETimeline