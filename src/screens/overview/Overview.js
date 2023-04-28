import React, { useContext, useEffect, useState } from 'react'
import compressor from "../../assets/images/compressor02.jpg"
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
                        <img className='img-bg' src={compressor} />
                        <div className='teste'>
                            <button onClick={handleReqTeste}>Teste BackEnd</button>
                            <button onClick={handleReqTesteDB} > Teste Banco de dados</button>
                            <div className='response'>
                                {typeof result == "string" ?
                                    <p>{result}</p> :
                                    result &&
                                    result.map((val) => <p>{val['table_name']}</p>)
                                }
                            </div>

                        </div>
                        <DisplayValue top={"100px"} left={"600px"} value={220} med={"V"} />
                        <DisplayValue top={"200px"} left={"600px"} value={222} med={"V"} />
                        <DisplayValue top={"300px"} left={"600px"} value={2}  med={"%"} />
                        <DisplayValue top={"400px"} left={"600px"} value={220} med={"V"} />
                        <DisplayValue top={"100px"} left={"800px"} value={220} med={"V"} />
                        <DisplayValue top={"200px"} left={"800px"} value={220} med={"V"} />
                        <DisplayValue top={"300px"} left={"800px"} value={220} med={"V"} />
                        <DisplayValue top={"400px"} left={"800px"} value={220} med={"V"} />


                    </Container>
            }
        </>
    )
}

export default Overview