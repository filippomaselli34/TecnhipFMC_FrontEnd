import React, { useCallback, useContext, useEffect, useState } from 'react'
import eteOverView from "../../assets/images/Imagem_ETE.png"


import { Container } from './Overview.styled'
import { BASE_URL } from '../../constants/BASE_URL'
import { RequisitionContext } from '../../context/RequisitionContext'
import axios from 'axios'
import DisplayETE from '../../components/display/DisplayEte'
const OverviewETE = () => {
    const [isLoading, setIsloading] = useState(false)
    const [result, setResult] = useState()
    const { equip , setScreenFlow} = useContext(RequisitionContext)



    const handleReqOverview = useCallback(async () => {
        try {
            setIsloading(true)
            const response = await axios.get(BASE_URL + `equipment/ete`);
            setResult(response.data);
            console.log(response)
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
                        top={'4%'}
                        left={'14%'}
                        name={"Nível"}
                        value={result["ete_sensor_nivel_m3"]}
                        type={"m³"}
                    />

                    <DisplayETE
                        top={'12%'}
                        left={'14%'}
                        name={"Cloreto Férrico"}
                        value={result["ete_i00_cloreto_ferrico_nivel_baixo"]}
                        type={"nivel"}
                    />
                    <DisplayETE
                        top={'19%'}
                        left={'14%'}
                        name={"Soda Cáustica"}
                        value={result["ete_i01_soda_caustica_nivel_baixo"]}
                        type={"nivel"}
                    />

                    <DisplayETE
                        top={'30%'}
                        left={'24%'}
                        name={"Válvula Descarga 01"}
                        value={result["ete_i12_valvula_descarga01"]}
                        type={"aberta/fechada"}
                        color={"white"}
                    />
                    <DisplayETE
                        top={'38%'}
                        left={'35%'}
                        name={"Válvula Descarga 02"}
                        value={result["ete_i13_valvula_descarga02"]}
                        type={"aberta/fechada"}
                        color={"white"}
                    />

                    <DisplayETE
                        top={'2%'}
                        left={'40%'}
                        name={"Motor Misturador 01"}
                        value={result["ete_i10_motor_misturador01"]}
                        type={"lig/des"}
                    />
                    <DisplayETE
                        top={'8%'}
                        left={'40%'}
                        name={"Motor Aeração 01"}
                        value={result["ete_i17_motor_aeracao01"]}
                        type={"lig/des"}
                    />

                    <DisplayETE
                        top={'6%'}
                        left={'49%'}
                        name={"Motor Misturador 02"}
                        value={result["ete_i11_motor_misturador02"]}
                        type={"lig/des"}
                    />

                    <DisplayETE
                        top={'12%'}
                        left={'49%'}
                        name={"Motor Aeração 02"}
                        value={result["ete_i16_motor_aeracao02"]}
                        type={"lig/des"}
                    />


                    <DisplayETE
                        top={'47%'}
                        left={'25%'}
                        name={"Bomba Elevatória 01"}
                        value={result["ete_i15_bomba_elevatoria01"]}
                        type={"lig/des"}
                    />

                    <DisplayETE
                        top={'54%'}
                        left={'24%'}
                        name={"Bomba Elevatória 02"}
                        value={result["ete_i14_bomba_elevatoria02"]}
                        type={"lig/des"}
                    />


                            <button onClick={()=>setScreenFlow("Histórico")} className='btn btn-secondary'>Histórico</button>
                </Container>
           
            }

        </>

    )
}

export default OverviewETE