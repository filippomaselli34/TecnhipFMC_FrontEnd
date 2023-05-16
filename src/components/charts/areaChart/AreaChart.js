import React, { useContext, useEffect, useState } from "react";
import ApexChartsReact from "react-apexcharts";
import moment from 'moment';


import styled from "styled-components";
import ButtonTime from "../../buttonTime/ButtonTime";
import { getTimeInMilliseconds } from "../../../constants/getTimeInMilliseconds";
import { RequisitionContext } from "../../../context/RequisitionContext";
import DateInput from "../../dataInput/DateInput";

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
.btn-group-date{
  position:relative;
  margin:0 auto;
  height:4vh;
}
        

`



const AreaChart = ({ series, engProp, handleRequisition }) => {
  const { selectedTime, setSelectedTime, dataInicial, setDataInicial, dataFinal, setDataFinal, eng, screenFlow } = useContext(RequisitionContext)
  const [dataIni, setDataIni] = useState()
  const [datafini, setDataFini] = useState()
  const [format, setFormat] = useState()

  useEffect(()=>{
    setSelectedTime('5m')
  },[screenFlow])

  const handleEng = () => {
    switch (screenFlow) {
      case "Tensão Elétrica":
        return ("V")
        break;
      case "Corrente Elétrica":
        return ("A")
        break;
      case "Potência Elétrica":
        return ("W")
        break;
      case "Frequência":
        return ("Hz")
        break;
      case "ETE - Gráficos":
        return ("m³")
        break;
      default:
        return ("")
        break

    }
  }
  const options = {
    chart: {
      zoom:{
        enabled:true
      },
     events: {
      beforeZoom: function (chartContext, { xaxis, yaxis }) {
          let min
          let max
          if (chartContext.minX < chartContext.maxX) {
            min = chartContext.minX
            max = chartContext.maxX
          } else {
            max = chartContext.minX
            min = chartContext.maxX
          } 

          setDataInicial(new Date(min).toISOString())
          setDataFinal( new Date(max).toISOString())
          handleRequisition(new Date(min).toISOString(),  new Date(max).toISOString())
          return {
            xaxis:{
              min:new Date(min).getTime(),
              max:new Date(max).getTime()
            }
          }
        }
      },
      connectNulls: false,
      width: '100%'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      curve: 'smooth',
      dashArray: 0,
      width: 1,
      lineCap: 'square',

    },
    yaxis: {
      labels: {
        formatter: (value) => {
          let val
          if ((value * 10) % 10 !== 0 && typeof value === "number") {
            val = value.toFixed(2)
          } else {
            val = value
          }
          return val + handleEng()
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



  return (
    <Container>
      <div className="title-chart">
        <p className="title-p"></p>
      </div>
      <div className="btn-group-date">
        <ButtonTime setSelectedTime={setSelectedTime} />
        <DateInput handleRequisition={handleRequisition} />
      </div>
      {
        series && series.length > 0 ? (
          <ApexChartsReact
            options={options}
            series={series}
            type="line"
            width={"100%"}
            height={"780vh"}
          />
        ) : (
          <p className="sr-only">Sem dados para plotagem...</p>
        )
      }

    </Container >
  )
}

export default AreaChart;
