import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { BASE_URL } from "../../../constants/BASE_URL";
import { getTimeInMilliseconds } from "../../../constants/getTimeInMilliseconds";
import { RequisitionContext } from "../../../context/RequisitionContext";
import ButtonTime from "../../buttonTime/ButtonTime";
import ButtonTimeETE from "../../buttonTime/ButtonTimeETE";
import DateInput from "../../dataInput/DateInput";
import { Container} from "./TimelineChart.Styled";

const LineChart = () => {
  const {data,setData, selectedTime, setSelectedTime,dataInicial, dataFinal,screenFlow,setDataInicial,setDataFinal} = useContext(RequisitionContext);
  const [isLoading,setIsLoading] = useState(false)
  const [haLoaded,setHasLoaded] = useState(false)

  useEffect(()=>{
    setSelectedTime('5m')
    setDataInicial(new Date(new Date().getTime() - getTimeInMilliseconds('5m')))
    setDataFinal(new Date())
    setHasLoaded(false)
 handleRequisition()
  },[])
  useEffect(()=>{
    handleRequisition()
},[ selectedTime])


    const handleRequisition = async (dI, dF) => {
        const newReq ={
          initialDate: new Date(new Date(dataInicial).getTime()-getTimeInMilliseconds(selectedTime)).toISOString(),
          finalDate: new Date(dataFinal).toISOString()
        }
    try {
        setIsLoading(true)
        const result = await axios.post(BASE_URL+"equipment/digital",newReq)
        // setData(result.data)
       
        setData(result.data)
      
        setIsLoading(false)
        setHasLoaded(true)
    } catch (error) {
        setIsLoading(false)
        if(error.response.data==="Nenhum dado encontrado"){
          setData([])
        }
        console.log(error)
    }
    
    }



  const series = [
    {
      data:[
        {
          x:"Motor Misturador 01"
        },
        {
          x:"Motor Misturador 02"
        },
        {
          x:"Válvula Descarga 01"
        },
        {
          x:"Válvula Descarga 02"
        },
        {
          x:"Bomba Elevatória 02"
        },
        {
          x:"Bomba Elevatória 01"
        },
        {
          x:"Motor Aeração 02"
        },
        {
          x:"Motor Aeração 01"
        },
      
      {
        x:"Cloreto Férrico Nível Baixo"
      },
      {
        x:"Soda Cáustica Nível Baixo"
      },
        ...data
      ]

      
    }
  ];

  const options = {
    chart:{
      id:screenFlow,
animations:{
  enabled:false
}
    },
    
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd/MM/yy - HH:mm:ss",       
      },
      custom: function({ seriesIndex, dataPointIndex, w }) {
        // obter as informações da série atual
        const seriesName = w.config.series[seriesIndex].data[dataPointIndex].x;
        const seriesData = w.config.series[seriesIndex].data[dataPointIndex].y;
      
        
        // formatar as datas
        const date1 = new Date(seriesData[0]+3*60*60*1000);
        const date2 = new Date(seriesData[1]+3*60*60*1000);
        const formattedDate1 = date1.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const formattedDate2 = date2.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        // retornar o texto formatado como tooltip
        return( 
        `<div style="padding:6px">
        <p style="margin:0"><strong> ${seriesName} </strong></p>
        <p style="margin:0">${formattedDate1}</p>
        <p style="margin:0"> ${formattedDate2}</p>
        </div> `);
         
      }
    },
    xaxis: {
      type: "datetime",
      min: new Date().getTime() - getTimeInMilliseconds(selectedTime) - 3*60*60*1000

    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    }

  }

 console.log(series,"timeline aki filippo")


  return (
    <Container>
      <div className="title-chart">
        <p className="title-p">Linha do Tempo</p>
      </div>
      <div className="btn-group-date">
      <ButtonTimeETE setSelectedTime={setSelectedTime} handleRequisition={handleRequisition} />
      <DateInput handleRequisition={handleRequisition} timeline={true}/>
      </div>
      {!isLoading?

        <ApexCharts
        options={options}
        series={series}
        type="rangeBar"
        width={"100%"}
        height={"700vh"}
        />:
        <p>Buscando....</p>
      }
    </Container>
  );
};

export default LineChart;
