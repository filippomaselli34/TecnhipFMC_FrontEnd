import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container } from './Charts.styled'

const Charts = ({ type, engProp}) => {
const [series, setSeries]= useState([])
const [isLoading,setIsloading] = useState(false)
const [eng, setEng] = useState("")
const { 
    selectedTime,
    dataInicial,
    dataFinal,  
    equip,screenFlow  } = useContext(RequisitionContext)

useEffect(()=>{
    handleRequisition()
},[type, selectedTime])



useEffect(() => {
    console.log("entrou", screenFlow)

  }, [screenFlow])

  const handleEng = ()=>{
    switch (screenFlow) {
        case "Tensão Elétrica":
         return ("V")
          break;
        case "Corrente Elétrica":
          return("A")
          break;
        case "Potência Elétrica":
          return("W")
          break;
        case "Frequência":
          return("Hz")
          break;
        case "ETE - Gráficos":
          return("m³")
          break;
        default:
          return("")
          break
  
      }
  }


    const handleRequisition = async (dI,dF) => {
        let dataIn
        let dataFi
        if(dI!==undefined){
            dataIn=new Date(dI).toISOString()
        }else{
            dataIn = new Date(new Date(dataInicial).getTime()).toISOString()
        }
        if(dF!==undefined){
            dataFi=new Date(dF).toISOString()
        }else{
            dataFi = new Date(dataFinal).toISOString()
        }
        const newReq ={
            trafo:equip.equipDB.toLowerCase(),
            type,
            initialDate: dataIn,
            finalDate: dataFi
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

            <AreaChart series={series} engProp={handleEng()} handleRequisition={handleRequisition}
 />
        </Container>
    )
}

export default Charts