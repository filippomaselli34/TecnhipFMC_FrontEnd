import React, { useContext } from 'react'
import TableAlarms from '../../components/alarmsList/TableAlarms'
import { Container, Line, Table } from './AlarmsList.styled'
import { handleDate } from '../../constants/handleDate'
import listEquip from "../../equipmentInField/equipMock.json"
import { GlobalContext } from '../../context/GlobalContext'

const AlarmsList = ({ equip, allEvents=[] }) => {

  const context = useContext(GlobalContext)
  const { userName } = context


  const listEvent = allEvents && allEvents.filter((event) => {
    return event.area === equip.areaDB && event.equip === equip.equipDB &&
      (event.type === "temp" || event.type === "rev" || event.type === "falha" || event.type === "pressao" || event.type === "ack")
  })

  const handleDescription = (alarm) => {
    // if (alarm.type === "log") {
    //   return `O usuario ${userName}.${alarm.description}`
    // } else if (alarm.type === "temp") {

    //   return `${alarm.description} -  ${alarm.value}ºC`
    // } else if (alarm.type === "pressao") {

    //   return `${alarm.description} -  ${alarm.value} bar`
    // } else if (alarm.type === "rev") {

    //   return `${alarm.description} -  ${alarm.value}hrs`
    // } else {
    //   return alarm.description
    // }
  }

  const nullObj = {
    acknowledged: true,
    active: true,
    area: "-",
    description: "-",
    equip: "-",
    finalDate: null,
    id: "null",
    inicialDate: "-",
    type: "-",
    userId: "-",
    value: "-"
  }
  if (listEvent.length===0){
    listEvent.push(nullObj)
  }
  return (
    <Container>
      <div className='card-alarm'>

        <Table>
          <thead className='header-table'>
            <th className='first' >Área</th>
            <th >Equipamento</th>
            <th >Descrição</th>
            <th >Data/Hora</th>
            <th className='last' >Status</th>
          </thead>

          {
            listEvent.map((alarm, i) => {
              return (
                <Line key={i} className='line'
                  // onClick={() => handleClick(alarm)}
                  active={alarm.active} ack={alarm.acknowledged}>
                  <td className='first'> {alarm.area.replace("a", "A")}</td>
                  <td> {alarm.equip.replace("c", "Compressor ")}</td>
                  <td> {handleDescription(alarm)}</td>
                  <td> {alarm.inicialDate && alarm.inicialDate!=="-" && handleDate(alarm.inicialDate)}</td>
                  <td className='last'> 
                  <div className='status-ret'>

                  </div>
                  </td>

                </Line>
              )
            })

          }
        </Table>
      </div>

    </Container>
  )
}

export default AlarmsList