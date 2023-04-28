import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AreaChart from '../../components/charts/areaChart/AreaChart'
import { BASE_URL } from '../../constants/BASE_URL'
import { RequisitionContext } from '../../context/RequisitionContext'
import { handleRequitisionCorrenteEletrica, handleRequitisionFatorDePotencia, handleRequitisionFrequencia, handleRequitisionPotenciaEletrica, handleRequitisionTensaoEletrica } from '../../requisitions/equipReq'
import { Container } from './Charts.styled'

const Charts = ({ type }) => {
const [series, setSeries]= useState([])
const [trafo, setTrafo]= useState('trafo01')
const [isLoading,setIsloading] = useState(false)

useEffect(()=>{
    handleRequisition()
},[type])


    // const handleRequisition = () =>{
    //     switch (type) {
    //         case "Tensão Elétrica":
    //         setTipo(handleRequitisionTensaoEletrica())
    //         break;
    //         case "Corrente Elétrica":
    //         setSeries(handleRequitisionCorrenteEletrica())
    //         break;
    //         case "Potência Elétrica":
    //         setSeries(handleRequitisionPotenciaEletrica())
    //         break;
    //         case "Frequência":
    //         setSeries(handleRequitisionFrequencia())
    //         break;
    //         case "Fator de Potência":
    //         setSeries(handleRequitisionFatorDePotencia())
    //         break;
        
    //         default:
    //             break;
    //     }
    // }
    const handleRequisition = async () => {
        const newReq ={
            trafo,
            type,
            initialDate:"2023-04-26 09:46:06.601522",
            finalDate:"2023-04-27 14:46:06.601522"
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
    console.log(series)



    return (
        <Container>

            <AreaChart series={series}
 />
        </Container>
    )
}

export default Charts