import React, { useContext, useEffect, useState } from "react";
import ApexChartsReact from "react-apexcharts";
import moment from 'moment';
// import { Container } from "./TimelineChart.Styled";


import styled from "styled-components";
import ButtonTime from "../../buttonTime/ButtonTime";
import { getTimeInMilliseconds } from "../../../constants/getTimeInMilliseconds";
import { RequisitionContext } from "../../../context/RequisitionContext";

const Container = styled.div`
position:relative;
margin-top:20px;

border-radius:8px;
        background-color:white;
        box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);

.title-chart{
    margin-left:16px;
    margin-top:32px;;
}
        

`



const AreaChart = ({ series }) => {

  const [maxDate, setMaxDate] = useState(Date.now());
  const [newCircle, setNewCircle] = useState(false)

  const { selectedTime,
    setSelectedTime } = useContext(RequisitionContext)
  useEffect(() => {
    setSelectedTime('5m')
  }, [])




  const option = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      // ticks:150
      // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }


  return (
    <Container>
      <div className="title-chart">
        <p className="title-p"></p>
      </div>
      <ButtonTime setSelectedTime={setSelectedTime} />
      {series && series.length > 0 ? (
        <ApexChartsReact
          options={option}
          series={series}
          type="area"
          width={"100%"}
          height={"700px"}
        />
      ) : (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </Container>
  )
}

export default AreaChart;
