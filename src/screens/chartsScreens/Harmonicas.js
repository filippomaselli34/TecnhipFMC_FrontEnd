import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ColumnChart from '../../components/charts/columnChart/ColumnChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { handleRequisitionHarmonica } from '../../requisitions/equipReq'
import { Container } from './Charts.styled'

const Harmonicas = () => {
    const [data,setData]= useState()
    const[isLoading, setIsloading]= useState(false)

useEffect(()=>{
    handleRequisitionHarmonica("trafo01")

},[])
 const handleRequisitionHarmonica = async (trafo) => {
    const newReq ={
        trafo,
        type:"Harmônica",
        initialDate:"2023-04-26 09:46:06.601522",
        finalDate:"2023-04-27 14:46:06.601522"
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

                <ColumnChart data={data}/>
            }
        </Container>
    )
}

export default Harmonicas