import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds'
import { RequisitionContext } from '../../context/RequisitionContext'
import { Container } from './Charts.styled'

const Charts = ({ type ,eng }) => {
const [series, setSeries]= useState([])
const [isLoading,setIsloading] = useState(false)
const { 
    selectedTime,
    dataInicial,
    dataFinal,  
    equip } = useContext(RequisitionContext)

useEffect(()=>{
    handleRequisition()
},[type, selectedTime])

    const handleRequisition = async (dI,dF) => {
        let dataIn
        let dataFi
        if(dI!==undefined){
            dataIn=new Date(dI).toISOString()
        }else{
            dataIn = new Date(new Date(dataInicial).getTime()-getTimeInMilliseconds(selectedTime)).toISOString()
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
        console.log(result)
        console.log("foi")
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