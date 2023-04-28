import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TableAlarms from '../../components/alarmsList/TableAlarms'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import Gauge from '../../components/charts/gauge/Gauge'
import { BASE_URL } from '../../constants/BASE_URL'
import { handleDate } from '../../constants/handleDate'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container, HeaderVariaveis } from './Variaveis.styled'

const Variaveis = ({nameTable,series,numb,allEvents}) => {
    const [isLoading, setIsloading] = useState(false)
    // const [data, setData] = useState()
    //   const [ arrCarga, setArrCarga] = useState([])
    //   const [arrFalha,setArrFalha] = useState([])
    //   const [arrManutencao,setArrManutencao] = useState([])
    const { selectedTime,
        setSelectedTime } = useContext(RequisitionContext)

    const alarm = allEvents
    // filter((event)=>event.area==="temp")
    .filter((event)=>event.type==="temp")

    if(alarm.length==0){
        const nullObj ={
          acknowledged:true,
          active:true,
          area:"-",
          description:"-",
          equip:"-",
          finalDate:null,
          id:"null",
          inicialDate:"-",
          type:"-",
          userId:"-",
          value:"-"
          }
          alarm.push(nullObj)
      }


    return (
        series && series.length>0 &&
        <Container>

            <HeaderVariaveis>                    
                    <Gauge 
                    value={series[numb].data[series[0].data.length-1]['y'].toFixed(1)}
                     date={handleDate(series[numb].data[series[0].data.length-1]['x'])} 
                     description={nameTable}
                     type={nameTable.includes('Temp')?"ºC":"bar"}
                     max={nameTable.includes('Temp')?120:10}
                     />
                    
                <div className='alarms'>
                    <TableAlarms arrAlamrs={alarm} />
                </div>
            </HeaderVariaveis>
         
        <AreaChart series={[series.find((val)=>val.name===nameTable)]} />
           
        </Container>
    )
}

export default Variaveis