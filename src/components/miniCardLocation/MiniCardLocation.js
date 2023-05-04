import React from 'react'
import { Container } from './MiniCardLocation.styled'
import technipfmc from "../../assets/logos/FTI_BIG.png"
// import fiocruzLogo from "../../assets/logos/logo-fiocruz.png"
import iconLoc from "../../assets/icons/locationIcon.png"

const MiniCardLocation = ({ client,
    cardOpen,
    setCardOpen,
    setPageFlow,
    }) => {




    return (
        <Container cardOpen={cardOpen===client} >
            <div className='pop-up'>
                <p className='closeBtn' onClick={() => setCardOpen("")}>X</p>
                <p className='unidade-name'>Unidade Macaé-RJ</p>
                <img className='logo' src={technipfmc} />
                <button className='btn btn-primary' onClick={() => client==="TechnipFMC" && setPageFlow('dash')}>Acessar Unidade</button>
            </div>
            <img className='icon-loc' src={iconLoc} onClick={()=>setCardOpen(client)} />
        </Container>
    )
}

export default MiniCardLocation