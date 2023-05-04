import React, { useContext,  useState } from 'react'
import map3d from "../../assets/images/fmc-01b.jpg"
import { CompGroup, Container, ContainerList, ContainerMap, Line, Table, IconEquip } from './MapLocation.styled'
import equips from "../../equipmentInField/equipMock.json"
import { RequisitionContext } from '../../context/RequisitionContext'
import InfoCardEquip from '../../components/infoCardIncon/InfoCardEquip'

const MapLocation = ({isMenuOpen}) => {
    const [firstLoad, setFirstLoad] = useState(false)
    const {
        viewFlow,
        isNotificationOpen,
        equipData} = useContext(RequisitionContext)


    return (
        <Container isMenuOpen={isMenuOpen} >

            {viewFlow === 0 ?
                <ContainerMap isNotificationOpen={isNotificationOpen}>
                    <IconEquip top={"32%"} left={"0%"}  >
                    <InfoCardEquip direction="d" btnValue="ETE"
                    titile="Estação de Tratamento de Efluentes" />
                    </IconEquip>
                    <IconEquip top={"60%"} left={"82%"}  >
                    <InfoCardEquip direction="e" btn2={true} btnValue="Trafo01" btn2Value="Trafo02"
                    titile="Substação01" />
                    </IconEquip>

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