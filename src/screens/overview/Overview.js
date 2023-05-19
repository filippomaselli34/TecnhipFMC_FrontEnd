import React, { useCallback, useContext, useEffect, useState } from 'react'
import trafo01Img from "../../assets/images/Trafo01_Overview.png"
import trafo02Img from "../../assets/images/Trafo02_Overview.png"
import { Container} from './Overview.styled'
import { BASE_URL } from '../../constants/BASE_URL'
import { RequisitionContext } from '../../context/RequisitionContext'
import axios from 'axios'
import DisplayValue from '../../components/display/DisplayValue'
const Overview = (props) => {
    const [isLoading, setIsloading] = useState(false)
    const [result, setResult] = useState()
    const { equip } = useContext(RequisitionContext)
    const [left, setLeft] = useState("100px")
    const [equipmento, setEquipmento] = useState("trafo01Img")

    useEffect(() => {
        handleReqOverview()
        if (equip.equipDB === "Trafo01") {
            setEquipmento(trafo01Img)
            setLeft("5vw")

        } else if (equip.equipDB === "Trafo02") {
            setEquipmento(trafo02Img)
            setLeft("85%")
        }


    }, [equip])

    const handleReqOverview = useCallback(async () => {
        try {
            if(equip.equipDB.toLowerCase()!=='ete'){
            setIsloading(true)
            const response = await axios.get(BASE_URL + `equipment?trafo=${equip.equipDB.toLowerCase()}`);
            setResult(response.data);
            setIsloading(false)
            }
        } catch (error) {
            setIsloading(false)
            console.error(error);

        }
    }, [equip]);

    useEffect(() => {
        const intervalId = setInterval(handleReqOverview, 10000);
        return () => clearInterval(intervalId);
    }, [handleReqOverview]);

//     useEffect(()=>{
// handleReqOverview()

//     },[])
    return (


                    <>
                        { result &&

                            <Container>
                                <img className='img-bg' src={equipmento} />
                                <DisplayValue top={"10vh"} left={left} name={"Tensão Fase A"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_a`]} eng={"V"} />
                                <DisplayValue top={"16vh"} left={left} name={"Tensão Fase B"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_b`]}eng={"V"} />
                                <DisplayValue top={"22vh"} left={left} name={"Tensão Fase C"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_fase_c`]} eng={"V"} />

                                <DisplayValue top={"32vh"} left={left} name={"Tensão Fase A-B"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_ab`]} eng={"V"} />
                                <DisplayValue top={"38vh"} left={left} name={"Tensão Fase B-C"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_bc`]} eng={"V"} />
                                <DisplayValue top={"44vh"} left={left} name={"Tensão Fase C-A"} value={result.tensao[`${equip.preTag.toLowerCase()}_tensao_linha_ca`]} eng={"V"} />

                                <DisplayValue top={"54vh"} left={left} name={"Corrente Fase A"} value={result.tensao[`${equip.preTag.toLowerCase()}_corrente_fase_a`]} eng={"A"} />
                                <DisplayValue top={"60vh"} left={left} name={"Corrente Fase B"} value={result.tensao[`${equip.preTag.toLowerCase()}_corrente_fase_b`]} eng={"A"} />
                                <DisplayValue top={"66vh"} left={left} name={"Corrente Fase C"} value={result.tensao[`${equip.preTag.toLowerCase()}_corrente_fase_c`]} eng={"A"} />

                                <DisplayValue top={"76vh"} left={left} name={"Frequência Total"} value={result.freqencia[`${equip.preTag.toLowerCase()}_frequencia`]} eng={"Hz"} />
                                <DisplayValue top={"82vh"} left={left} name={"Fator de Potência Total"} value={result.tensao[`${equip.preTag.toLowerCase()}_fator_potencia_total`]} eng={"FP"} />


                            </Container>
                        }

                    </>

    )
}

export default Overview