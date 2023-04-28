import React, { useContext, useState } from "react";
import ApexCharts from "react-apexcharts";
import { getTimeInMilliseconds } from "../../../constants/getTimeInMilliseconds";
import { RequisitionContext } from "../../../context/RequisitionContext";
import ButtonTime from "../../buttonTime/ButtonTime";
import { Container, RadioGroup } from "./TimelineChart.Styled";

const LineChart = (props) => {
  const { arrDesligado, arrCarga, arrFalha, arrManutencao,selectedTime, setSelectedTime} = props;
  const {data,setData} = useContext(RequisitionContext);
  const now = new Date();




  const series = [
    {
      data:[
        ...data.statusligdesl,
        ...data.statusemcarga,
        ...data.statusfalha,
        ...data.statusManut
      ]
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
      min: Date.parse(now)- Number(3*60*60*1000) - getTimeInMilliseconds(selectedTime),
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
      <ApexCharts
        options={options}
        series={series}
        type="rangeBar"
        width={"100%"}
        height={"280px"}
      />
    </Container>
  );
};

export default LineChart;
