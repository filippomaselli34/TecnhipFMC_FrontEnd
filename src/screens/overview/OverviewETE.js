import React, { useCallback, useContext, useEffect, useState } from 'react'
import eteOverView from "../../assets/images/ETE_overview.jpg"
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
import DisplayETE from '../../components/display/DisplayEte'
import LineChart from '../../components/charts/timeline/TimelineChart'
const OverviewETE = (props) => {
    const [isLoading, setIsloading] = useState(false)
    const [result, setResult] = useState()
    const { equip , setScreenFlow} = useContext(RequisitionContext)
    const [left, setLeft] = useState("100px")
    // const [equipmento, setEquipmento] = useState(eteOverView)



    const handleReqOverview = useCallback(async () => {
        try {
            setIsloading(true)
            const response = await axios.get(BASE_URL + `equipment/ete`);
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
    useEffect(() => {
        // setResult({})
        handleReqOverview();

    }, [])

    return (


        <>
            {
                result &&
                <Container>
                    <img className='img-bg' src={eteOverView} />

                    <DisplayETE
                        top={'50px'}
                        left={'80px'}
                        name={"Nível"}
                        value={result["ete_sensor_nivel_m3"]}
                        type={"m³"}
                    />

                    <DisplayETE
                        top={'130px'}
                        left={'80px'}
                        name={"Cloreto Férrico"}
                        value={result["ete_i00_cloreto_ferrico_nivel_baixo"]}
                        type={"nivel"}
                    />
                    <DisplayETE
                        top={'200px'}
                        left={'80px'}
                        name={"Soda Cáustica"}
                        value={result["ete_i01_soda_caustica_nivel_baixo"]}
                        type={"nivel"}
                    />

                    <DisplayETE
                        top={'360px'}
                        left={'300px'}
                        name={"Válvula Descarga 01"}
                        value={result["ete_i12_valvula_descarga01"]}
                        type={"aberta/fechada"}
                        color={"white"}
                    />
                    <DisplayETE
                        top={'480px'}
                        left={'540px'}
                        name={"Válvula Descarga 02"}
                        value={result["ete_i13_valvula_descarga02"]}
                        type={"aberta/fechada"}
                        color={"white"}
                    />

                    <DisplayETE
                        top={'40px'}
                        left={'600px'}
                        name={"Motor Misturador 01"}
                        value={result["ete_i10_motor_misturador01"]}
                        type={"lig/des"}
                    />
                    <DisplayETE
                        top={'100px'}
                        left={'600px'}
                        name={"Motor Aeração 01"}
                        value={result["ete_i17_motor_aeracao01"]}
                        type={"lig/des"}
                    />

                    <DisplayETE
                        top={'90px'}
                        left={'860px'}
                        name={"Motor Misturador 02"}
                        value={result["ete_i11_motor_misturador02"]}
                        type={"lig/des"}
                    />

                    <DisplayETE
                        top={'150px'}
                        left={'860px'}
                        name={"Motor Aeração 02"}
                        value={result["ete_i16_motor_aeracao02"]}
                        type={"lig/des"}
                    />


                    <DisplayETE
                        top={'580px'}
                        left={'200px'}
                        name={"Bomba Elevatória 01"}
                        value={result["ete_i15_bomba_elevatoria01"]}
                        type={"lig/des"}
                    />

                    <DisplayETE
                        top={'650px'}
                        left={'300px'}
                        name={"Bomba Elevatória 02"}
                        value={result["ete_i14_bomba_elevatoria02"]}
                        type={"lig/des"}
                    />

                    {/* <DisplayValue top={"100px"} left={left} name={"Tensão Fase A"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_a`]} eng={"V"} />
                                <DisplayValue top={"160px"} left={left} name={"Tensão Fase B"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_b`]} eng={"V"} />
                                <DisplayValue top={"220px"} left={left} name={"Tensão Fase C"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_c`]} eng={"V"} />

                                <DisplayValue top={"320px"} left={left} name={"Tensão Fase A-B"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_ab`]} eng={"V"} />
                                <DisplayValue top={"380px"} left={left} name={"Tensão Fase B-C"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_bc`]} eng={"V"} />
                                <DisplayValue top={"440px"} left={left} name={"Tensão Fase C-A"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_ca`]} eng={"V"} />

                                <DisplayValue top={"540px"} left={left} name={"Corrent Fase A"} value={result.corrente[`${equip.preTag.toLowerCase()}_thd_corrente_a`]} eng={"A"} />
                                <DisplayValue top={"600px"} left={left} name={"Corrent Fase B"} value={result.corrente[`${equip.preTag.toLowerCase()}_thd_corrente_b`]} eng={"A"} />
                                <DisplayValue top={"660px"} left={left} name={"Corrent Fase C"} value={result.corrente[`${equip.preTag.toLowerCase()}_thd_corrente_c`]} eng={"A"} />

                                <DisplayValue top={"760px"} left={left} name={"Frequência Total"} value={result.freqencia[`${equip.preTag.toLowerCase()}_freqencia`]} eng={"Hz"} />
                                <DisplayValue top={"820px"} left={left} name={"Fator de Potência Total"} value={result.tensao[`${equip.preTag.toLowerCase()}_fator_potencia_total`]} eng={"FP"} /> */}

                            <button onClick={()=>setScreenFlow("Histórico")} className='btn btn-secondary'>Histórico</button>
                </Container>
           
            }

        </>

    )
}

export default OverviewETE