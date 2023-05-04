import React, { useContext, useState } from 'react'
import { Container } from './InfoCardEquip.styled'
import technipfmc from "../../assets/logos/FTI_BIG.png"
// import fiocruzLogo from "../../assets/logos/logo-fiocruz.png"
import iconLoc from "../../assets/icons/status_info.png"
import { RequisitionContext } from '../../context/RequisitionContext'

const InfoCardEquip = ({ client,
    setPageFlow, btn2, btnValue = "Trafo01", btn2Value = "Trafo02", titile = "Estação de Tratamento de Efluentes",
    direction = "e"
}) => {

    const [cardOpen, setCardOpen] = useState(false)
    const { setScreenFlow, setIdOpen, handleClickArea } = useContext(RequisitionContext)

    //setequip e setscreen
    return (
        <Container cardOpen={cardOpen} direction={direction} >
            <div className='pop-up'>
                <p className='closeBtn' onClick={() => setCardOpen(false)}>X</p>
                <p className='unidade-name'>{titile}</p>
                <div className='btn-div'>

                    <button className='btn btn-primary' onClick={() => {
                        if (btnValue === "ETE") {
                            setScreenFlow("Overview (ETE)")
                            handleClickArea("ETE")
                            setIdOpen("ETE")
                        } else {
                            setScreenFlow("Overview")
                            handleClickArea("Transformador 01")
                            setIdOpen("Transformador 01")
                        }
                    }}>{btnValue}</button>
                    {btn2 &&
                        <button className='btn btn-primary' onClick={() => {

                            setScreenFlow("Overview")
                            handleClickArea("Transformador 02")
                            setIdOpen("Transformador 02")
                        }
                        }>{btn2Value}</button>
                    }
                </div>
            </div>
            <img className='icon-loc' src={iconLoc} onClick={() => setCardOpen(!cardOpen)} />
        </Container>
    )
}

export default InfoCardEquip