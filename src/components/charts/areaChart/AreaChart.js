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



const AreaChart = ({ series ,eng="",handleRequisition }) => {
  const { selectedTime,  setSelectedTime, dataInicial, dataFinal } = useContext(RequisitionContext)
  const [dataIni, setDataIni] = useState()
  const [datafini, setDataFini] = useState()



  const options  = {
    chart: {
      events:{
        zoomed: function(chartContext, { xaxis, yaxis }) {
          const dI =new Date(chartContext.zoomPanSelection.minX)
          const dF =new Date(chartContext.zoomPanSelection.maxX)
        handleRequisition(dI,dF)
        }
      },
      connectNulls: false,
      width: '100%'
    },
    dataLabels: {
      enabled: false
    },  
    stroke: {
      show:true,
      curve: 'smooth',
      dashArray: 0,
      width:1,
      lineCap: 'square',

    },
    yaxis: {
      labels: {
        formatter:  (value) =>{

          return value + eng
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
      <div className="btn-group-date">
      <ButtonTime setSelectedTime={setSelectedTime} />
      <DateInput handleRequisition={handleRequisition}/>
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
