import React, { useContext, useEffect, useState } from 'react';
import { RequisitionContext } from '../../context/RequisitionContext.js';
import { Container } from './IconStatus.styled.js';
import equipAll from "../../equipmentInField/equipMock.json"

const IconStatus = ({ equip , isActive, tV, lV,name}) => {
    
    const {    screenFlow,
        setScreenFlow,setEquip} = useContext(RequisitionContext)
    const [number, setNumber] = useState(1);
    
    const [falha, setFalha] = useState()
    const [ligado, setLigado] = useState()
    const [manut, setManut] = useState()
    const [horasTotais, setHorasTotais] = useState()

    const lessThen100 = () => {
        if (equip.equipment.revision_8k - horasTotais < 100) {
            return true
        }
        if (equip.equipment.revision_4k - horasTotais < 100) {
            return true
        }
        if (equip.equipment.revision_2k - horasTotais < 100) {
            return true
        }
    }

const handleOnclick = (equip)=>{
    // setEquip(equipAll.find((equipD)=>equipD.areaDB===equip.equipment.area && equipD.equipDB===equip.equipment.name))
    // setScreenFlow("Overview")
}
    useEffect(() => {
        setFalha(equip.falha)
        setLigado(equip.ligado)
        setManut(equip.manut)
        setHorasTotais(equip.horasTotais)

      const interval = setInterval(() => {
        // Escolhe um número aleatório entre 1 e 3
        const newNumber = Math.floor(Math.random() * 3) + 1;
        setNumber(newNumber);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return (
        <>
            {
                equip &&
                < Container onClick={()=>{handleOnclick(equip)} }
                    view={number}
                    lessThen100={lessThen100()}
                    falha={falha}
                    ligado={ligado}
                    manut={manut}
                    isActive={isActive}
                    tV={tV}
                    lV={lV}
                >
                    <p className='compressor'>{equip.equipment.name && name.toUpperCase()}</p>
                    {typeof 
                    equip.equipment.notes === "string" && 
                    equip.equipment.notes  && 
                    isActive && 
                    <p className='notes'>...</p>}
                </Container >
            }
        </>
    )
}

export default IconStatus;
