import React, { useCallback, useContext, useEffect, useState } from 'react'
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
    const { equip } = useContext(RequisitionContext)
    const [left, setLeft] = useState("100px")
    const [equipmento, setEquipmento] = useState("trafo01Img")

    useEffect(() => {

        if (equip.equipDB === "Trafo01") {
            setEquipmento(trafo01Img)
            setLeft("100px")

        } else if (equip.equipDB === "Trafo02") {
            setEquipmento(trafo02Img)
            setLeft("1400px")
        }


    }, [equip])

    const handleReqOverview = useCallback(async () => {
        try {
            setIsloading(true)
            const response = await axios.get(BASE_URL + `equipment?trafo=${equip.equipDB.toLowerCase()}`);
            setResult(response.data);
            setIsloading(false)
        } catch (error) {
            setIsloading(false)
            console.error(error);

        }
    }, [equip]);

    useEffect(() => {
        const intervalId = setInterval(handleReqOverview, 10000);
        return () => clearInterval(intervalId);
    }, [handleReqOverview]);
    useEffect(()=>{
handleReqOverview()

    },[])

    return (


                    <>
                        { result &&

                            <Container>
                                <img className='img-bg' src={equipmento} />
                                <DisplayValue top={"100px"} left={left} name={"Tensão Fase A"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_a`]} eng={"V"} />
                                <DisplayValue top={"160px"} left={left} name={"Tensão Fase B"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_b`]}eng={"V"} />
                                <DisplayValue top={"220px"} left={left} name={"Tensão Fase C"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_c`]} eng={"V"} />

                                <DisplayValue top={"320px"} left={left} name={"Tensão Fase A-B"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_ab`]} eng={"V"} />
                                <DisplayValue top={"380px"} left={left} name={"Tensão Fase B-C"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_bc`]} eng={"V"} />
                                <DisplayValue top={"440px"} left={left} name={"Tensão Fase C-A"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_ca`]} eng={"V"} />

                                <DisplayValue top={"540px"} left={left} name={"Corrent Fase A"} value={result.corrente[`${equip.preTag.toLowerCase()}_thd_corrente_a`]} eng={"A"} />
                                <DisplayValue top={"600px"} left={left} name={"Corrent Fase B"} value={result.corrente[`${equip.preTag.toLowerCase()}_thd_corrente_b`]} eng={"A"} />
                                <DisplayValue top={"660px"} left={left} name={"Corrent Fase C"} value={result.corrente[`${equip.preTag.toLowerCase()}_thd_corrente_c`]} eng={"A"} />

                                <DisplayValue top={"760px"} left={left} name={"Frequência Total"} value={result.freqencia[`${equip.preTag.toLowerCase()}_freqencia`]} eng={"Hz"} />
                                <DisplayValue top={"820px"} left={left} name={"Fator de Potência Total"} value={result.tensao[`${equip.preTag.toLowerCase()}_fator_potencia_total`]} eng={"FP"} />


                            </Container>
                        }

                    </>

    )
}

export default Overview