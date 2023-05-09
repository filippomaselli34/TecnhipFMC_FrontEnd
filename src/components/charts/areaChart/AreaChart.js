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
        

`



const AreaChart = ({ series ,eng="",handleRequisition }) => {
  const { selectedTime,  setSelectedTime, dataInicial, dataFinal } = useContext(RequisitionContext)



  const options  = {
    chart: {
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
        min: Date.parse(dataInicial)- Number(3*60*60*1000) - getTimeInMilliseconds(selectedTime),
        max: Date.parse(dataFinal),
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
      <DateInput handleRequisition={handleRequisition}/>
  {
    series && series.length > 0 ? (
      <ApexChartsReact
        options={options}
        series={series}
        type="line"
        width={"100%"}
        height={"780px"}
      />
    ) : (
      <p className="sr-only">Sem dados para plotagem...</p>
  )
  }
  
    </Container >
  )
}

export default AreaChart;
