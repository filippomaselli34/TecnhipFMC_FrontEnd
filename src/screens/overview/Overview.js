import React, { useContext, useEffect, useState } from 'react'
import trafo01Img from "../../assets/images/Trafo01_Overview.png"
import trafo02Img from "../../assets/images/Trafo02_Overview.png"
import Card from '../../components/card/Card'
import powerOFF from "../../assets/icons/TurnOFF.png"
import powerON from "../../assets/icons/TurnON.png"
import cargaIcon from "../../assets/icons/carga-icon.png"
import maintenanceIcon from "../../assets/icons/maintenance-icon.png"
import pressureIcon from "../../assets/icons/icon_pressao.png"
import tempIcon from "../../assets/icons/icon_temperatura.png"
import countHourIcon from "../../assets/icons/icon_horas.png"
import buttonManut from "../../assets/icons/botao_manut.png"
import statusInfo from "../../assets/icons/status_info.png"
import listaDeEquipamentos from "../../equipmentInField/equipMock.json"

import { Container, ContainerCard, ContainerCardManut, ContainerFlex, StatusCard, StatusWrapper, ViewMach } from './Overview.styled'
import TimelineChart from '../../components/charts/timeline/TimelineChart'
import { handleDate } from '../../constants/handleDate'
import RevisionModal from '../../components/modal/RevisionModal'
import { BASE_URL } from '../../constants/BASE_URL'
import { RequisitionContext } from '../../context/RequisitionContext'
import { GlobalContext } from '../../context/GlobalContext'
import axios from 'axios'
import { handleRequisitionHarmonica } from '../../requisitions/equipReq'
import DisplayValue from '../../components/display/DisplayValue'
const Overview = (props) => {
    const [isLoading, setIsloading] = useState(false)
    const [result, setResult] = useState()
    const {equip} = useContext(RequisitionContext)
    const [ left, setLeft] = useState("100px")
    const [ equipmento, setEquipmento] = useState("trafo01Img")

useEffect(()=>{

if(equip.equipDB==="Trafo01"){
    setEquipmento(trafo01Img)
    setLeft("100px")

}else if(equip.equipDB==="Trafo02"){
    setEquipmento(trafo02Img)
    setLeft("1400px")
}


},[equip])



    const handleReqTeste = async () => {
        try {
            const response = await axios.get("http://localhost:3003/ping")
            setResult(response.data)

        } catch (error) {

        }
    }
    const handleReqTesteDB = async () => {
        try {
            const response = await axios.get("http://localhost:3003/testedb")
            setResult(response.data)

        } catch (error) {

        }
    }

    return (
        <>
            {
                isLoading ?
                    <Container>
                        <p>oiiii</p>
                    </Container>
                    :
                    <Container>
                        <img className='img-bg' src={equipmento} />
                        <DisplayValue top={"100px"} left={left} name={"Tensão Fase A"} value={220.00} eng={"V"} />
                        <DisplayValue top={"160px"} left={left} name={"Tensão Fase B"} value={222.12} eng={"V"} />
                        <DisplayValue top={"220px"} left={left} name={"Tensão Fase C"} value={2}  eng={"V"} />

                        <DisplayValue top={"320px"} left={left} name={"Tensão Fase A-B"} value={220} eng={"V"} />
                        <DisplayValue top={"380px"} left={left} name={"Tensão Fase B-C"} value={220} eng={"V"} />
                        <DisplayValue top={"440px"} left={left} name={"Tensão Fase C-A"} value={220} eng={"V"} />

                        <DisplayValue top={"540px"} left={left} name={"Corrent Fase A"} value={220} eng={"A"} />
                        <DisplayValue top={"600px"} left={left} name={"Corrent Fase B"} value={220} eng={"A"} />
                        <DisplayValue top={"660px"} left={left} name={"Corrent Fase C"} value={220} eng={"A"} />

                        <DisplayValue top={"760px"} left={left} name={"Frequência Total"} value={220} eng={"Hz"} />
                        <DisplayValue top={"820px"} left={left} name={"Fator de Potência Total"} value={220} eng={"FP"} />


                    </Container>
            }
        </>
    )
}

export default Overview