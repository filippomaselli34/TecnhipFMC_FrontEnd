import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { BASE_URL } from "../../../constants/BASE_URL";
import { getTimeInMilliseconds } from "../../../constants/getTimeInMilliseconds";
import { RequisitionContext } from "../../../context/RequisitionContext";
import ButtonTime from "../../buttonTime/ButtonTime";
import DateInput from "../../dataInput/DateInput";
import { Container, RadioGroup } from "./TimelineChart.Styled";

const LineChart = (props) => {
  const { arrDesligado, arrCarga, arrFalha, arrManutencao} = props;
  const {data,setData, selectedTime, setSelectedTime,setDataInicial,setDataFinal,dataInicial, dataFinal} = useContext(RequisitionContext);
  const [isLoading,setIsLoading] = useState(false)
  let now = new Date();

  useEffect(()=>{
    handleRequisition()
},[ selectedTime])

    const handleRequisition = async () => {
        const newReq ={
          initialDate: new Date(new Date(dataInicial).getTime()-getTimeInMilliseconds(selectedTime)).toISOString(),
          finalDate: new Date(dataFinal).toISOString()
        }
        console.log(newReq)
    try {
        setIsLoading(true)
        const result = await axios.post(BASE_URL+"equipment/digital",newReq)
        setData(result.data)
        console.log(result.data)
        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
        console.log(error)
    }
    
    }


  const series = [
    {
      data

      
    }
  ];

  const options = {
    
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd/MM/yy - HH:mm:ss",
        formatter: undefined
      }
    },
    xaxis: {
      type: "datetime",
      min: Date.parse(dataInicial)- Number(3*60*60*1000) - getTimeInMilliseconds(selectedTime),
      max: Date.parse(dataFinal),
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    }

  }




  return (
    <Container>
      <div className="title-chart">
        <p className="title-p">Linha do Tempo</p>
      </div>
      <ButtonTime setSelectedTime={setSelectedTime} />
      <DateInput handleRequisition={handleRequisition}/>
      <ApexCharts
        options={options}
        series={series}
        type="rangeBar"
        width={"100%"}
        height={"480px"}
      />
    </Container>
  );
};

export default LineChart;
