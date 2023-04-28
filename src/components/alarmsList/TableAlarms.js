import React, { useState } from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import { handleDate } from '../../constants/handleDate'
import { Line, Table } from './TableAlarms.styled'
import listEquip from "../../equipmentInField/equipMock.json"

const TableAlarms = ({arrAlamrs,handleEvents}) => {
  const [isLoading,setIsloading] = useState(false)

  const handleClickEvent = async (req) => {
    // setIsloading(true);
    // try {
    //     const response = await fetch(BASE_URL + ":3003/log", {
    //         method: "PUT",
    //         body: JSON.stringify(req),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": window.localStorage.getItem("token")
    //         }
    //     });
    //     const data = await response.json();

    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     setIsloading(false);
    // }

}


  const handleClick = (alarm) =>{  
    const newLog = {
      id:alarm.id  
    }
    handleClickEvent(newLog)
    
  }


  return (
    <>
     <Table>      
                <thead className='header-table'>
                    <th className='first' >Área</th>
                    <th >Equipamento</th>
                    <th >Descrição</th>
                    <th >Valor</th>
                    <th >Data/Hora Inicial</th>
                    <th className='last' >Data/Hora Final</th>
                </thead>                        
        
                {
                    arrAlamrs.map((alarm,i)=>{
                        return (
                            <Line key={i} className='line'
                            onDoubleClick={()=>{
                              if(!alarm.acknowledged){
                                handleClick(alarm)
                                handleEvents()
                              }
                            }} 
                            active={alarm.active} ack={alarm.acknowledged}>
                              <td className='first'> {alarm.area.replace("a","A")}</td>
                              <td> {alarm.equip.replace("c","Compressor ")}</td>
                              <td> {alarm.description}</td>
                              <td> {alarm.type==="temp"?alarm.value.toFixed(2)+"ºC":alarm.type==="pressao"?alarm.value.toFixed(2)+" bar":alarm.value+"hrs"}</td>
                              <td> {alarm.inicialDate==="-"?"-":handleDate(alarm.inicialDate)}</td>
                              <td className='last'> {alarm.finalDate?handleDate(alarm.finalDate):"-" }</td>
                               
                            </Line>
                        )
                    })

                }
            </Table>

    </>
  )
}

export default TableAlarms