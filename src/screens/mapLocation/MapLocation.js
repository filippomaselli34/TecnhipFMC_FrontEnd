import React, { useContext, useEffect, useState } from 'react'
import map3d from "../../assets/images/fmc-01b.jpg"
import compIcon from "../../assets/icons/events.png"
import { CompGroup, Container, ContainerList, ContainerMap, Line, Table } from './MapLocation.styled'
import equips from "../../equipmentInField/equipMock.json"
import { async } from 'q'
import { BASE_URL } from '../../constants/BASE_URL'
import IconStatus from '../../components/iconStatus/IconStatus'
import { RequisitionContext } from '../../context/RequisitionContext'

const MapLocation = ({isMenuOpen}) => {
    const [firstLoad, setFirstLoad] = useState(false)
    const {viewFlow,isNotificationOpen,equipData, setEquipData,setEquipment} = useContext(RequisitionContext)
    useEffect(() => {
        requisitionDataAllequip()

    }, [])

    const requisitionDataAllequip = async () => {
        // try {
        //     const response = await fetch(BASE_URL + ":3003/equipment/all/data", {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     const data = await response.json()
        //     setEquipData(data)
        //     setFirstLoad(true)

        // } catch (error) {
        //     console.log(error)
        // }
    }
    return (
        <Container isMenuOpen={isMenuOpen} >

            {viewFlow === 0 ?
                <ContainerMap isNotificationOpen={isNotificationOpen}>
                    {firstLoad &&
                        <>
                            <IconStatus equip={equipData[1]} isActive={true} tV={"10%"} lV={"23%"} name={equipData[1].equipment.name} />
                            <IconStatus equip={equipData[0]} isActive={true} tV={"11%"} lV={"19.5%"} name={equipData[0].equipment.name} />
                        </>
                    }
                    <CompGroup>
                        {/* <img className='icon' src={compIcon} onClick={() => { setViewFlow(1) }} /> */}

                    </CompGroup>
                    <img className='map3d' src={map3d} />
                </ContainerMap> :
                <ContainerList>
                    <Table>
                        <thead className='header-table'>
                            <th className='first' >OS</th>
                            <th >Prédio</th>
                            <th >Local</th>
                            <th >Modelo</th>
                            <th >Nº Série</th>
                            <th >Fabricante</th>
                            <th >Horas Totais</th>
                            <th >Revisão 2000h</th>
                            <th >Revisão 4000h</th>
                            <th >Revisão 8000h</th>
                            <th >Temp Descarga</th>
                            <th >Temp Des. Antes</th>
                            <th >Temp Des. Depois</th>
                            <th >Pressão</th>
                            <th className='last' >Status Geral</th>
                        </thead>

                        {
                            equips
                            .filter((equip)=>equip.isActive)
                            .map((equip, i) => {
                                const equipAtaul = equipData.find((comp)=>comp.equipment.name===equip.equipDB && comp.equipment.area===equip.areaDB)
                                
                                
                                return (
                                    <Line isActive={equip.isActive} key={i} className='line'>
                                        <td className='first'> {" - "}</td>
                                        <td> {equip.area}</td>
                                        <td> {equip.local}</td>
                                        <td> {equip.modelo}</td>
                                        <td> {equip.numSerie}</td>
                                        <td> {equip.fabricante}</td>
                                        <td> {equipAtaul.horasTotais}</td>
                                        <td> {equipAtaul.equipment.revision_2k}</td>
                                        <td> {equipAtaul.equipment.revision_4k}</td>
                                        <td> {equipAtaul.equipment.revision_8k}</td>
                                        <td> {30+"ºC"}</td>
                                        <td> {30+"ºC"}</td>
                                        <td> {30+"ºC"}</td>
                                        <td> {5 +" bar"}</td>
                                        <td className='last'> {equipAtaul.manut?"Manutenção":equipAtaul.falha?"Falha":"OK"}</td>

                                    </Line>
                                )
                            })

                        }
                    </Table>
                </ContainerList>
            }
        </Container>
    )
}

export default MapLocation