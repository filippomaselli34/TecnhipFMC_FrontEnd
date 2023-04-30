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
    // setSelectedTime('5m')
  }, [])


  const option = {
    chart: {
      height: 350,
      type: 'line'
    },
    max: new Date(),
    dataLabels: {
      enabled: false
    },
    zoom: {
      enabled: true,
      type: 'x',
  
      autoScaleYaxis: true,
      zoomedArea: {
        fill: {
          color: '#90CAF9',
          opacity: 0.4
        },
        stroke: {
          color: '#0D47A1',
          opacity: 0.4,
          width: 1
        }
      },
      toolbar: {
        autoSelected: 'zoom'
      },
      minWidth: 5 * 60 * 1000, // zoom mínimo de 5 minutos
      // para limitar o zoom máximo, você pode adicionar a opção maxWidth
    },  
    pan: {
      enabled: true,
      type: 'xy'
    },
    stroke: {
      curve: 'stepline'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "V"
        }
      }

      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (value) {
            return moment(value).format('DD/MM/YYYY HH:mm:ss');
          }
        },

      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
         
        },

      }
    }


  return(
    <Container>
      <div className="title-chart">
        <p className="title-p"></p>
      </div>
      <ButtonTime setSelectedTime={setSelectedTime} />
  {
    series && series.length > 0 ? (
      <ApexChartsReact
        options={option}
        series={series}
        type="line"
        width={"100%"}
        height={"780px"}
      />
    ) : (
      <span class="sr-only">Sem dados para plotagem...</span>
  )
  }
    </Container >
  )
}

export default AreaChart;
