import React, { useContext } from 'react'
import { Container, Line, Table } from './Events.styled'
import { handleDate } from '../../constants/handleDate'
import listEquip from "../../equipmentInField/equipMock.json"
import { GlobalContext } from '../../context/GlobalContext'


const Events = ({equip, allEvents }) => {
  const context = useContext(GlobalContext)
    const {userName} = context



    const listEvent = allEvents && allEvents.filter((event)=>{
      return event.area===equip.areaDB && event.equip===equip.equipDB})
      .filter((event)=>{
        return  (event.type !== "temp" && event.type !== "rev" && event.type !== "falha" && event.type !== "pressao" )
      })
  
    const handleDescription = (alarm) =>{
      if(alarm.type==="log"){
        return `O usuario ${userName}.${alarm.description}`
      }else if(alarm.type==="temp"){
  
        return `${alarm.description} -  ${alarm.value}ºC`
      }else if(alarm.type==="pres"){
  
        return `${alarm.description} -  ${alarm.value} bar`
      }else if(alarm.type==="rev"){
  
        return `${alarm.description} -  ${alarm.value}hrs`
      }else{
        return alarm.description
      }
    }
  
    return (
        <Container>
        <div className='card-alarm'> 
  
        <Table>
          <thead className='header-table'>
            <th className='first' >Área</th>
            <th >Equipamento</th>
            <th >Descrição</th>
            <th className='last'>Data/Hora</th>
          </thead>
  
          {
            listEvent.map((alarm, i) => {
            const equip = listEquip.find((eq)=>eq.areaDB===alarm.area && eq.equipDB===alarm.equip)

              return (
                <Line key={i} className='line'
                  // onClick={() => handleClick(alarm)}
                  active={alarm.active} ack={alarm.acknowledged}>
                  <td className='first'> {alarm.area.replace('a',"A")}</td>
                  <td> {alarm.equip.replace("c","Compressor ")}</td>
                  <td> {handleDescription(alarm)}</td>
                  <td className='last'> {alarm.inicialDate && handleDate(alarm.inicialDate)}</td>
  
                </Line>
              )
            })
  
          }
        </Table>
        </div>
  
      </Container>
    )
}

export default Events