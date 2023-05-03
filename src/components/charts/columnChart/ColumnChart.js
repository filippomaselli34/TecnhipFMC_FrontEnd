import React, { useContext, useEffect, useState } from "react";
import ApexChartsReact from "react-apexcharts";
import moment from 'moment';
import styled from "styled-components";
import ButtonTime from "../../buttonTime/ButtonTime";
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

const ColumnChart = (data) => {
  
  const { selectedTime,
    setSelectedTime, dataInicial, dataFinal } = useContext(RequisitionContext)
    const options = {
        
        chart: {
        type: 'bar',
        height: 350,
        stacked: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      dataLabels: {
        formatter: (val) => {
          return  ''
        }
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: [
          'THD Max',
          'THD',
          'Harmonica 3',
          'Harmonica 5',
          'Harmonica 7',
          'Harmonica 9',
          'Harmonica 11',
          'Harmonica 13',
          'Harmonica 15',
          'Harmonica 17',
          'Harmonica 19',
        ]
      },
      fill: {
        opacity: 1
      },
      colors: ['#80c7fd', '#008FFB', '#80f1cb'],
      yaxis: {
        labels: {
          formatter: (val) => {
            return val.toFixed(2)  + '%'
          }
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      }
      };
      console.log(data)

      const series = [
        {
          name: 'Corrente A',
          data: data.data.correnteA
        },
        {
          name: 'Corrente B',
          data: data.data.correnteB
        },
        {
          name: 'Corrente C',
          data: data.data.correnteC
        }
      ]


  return (
    <Container>
    <div className="title-chart">
        <p className="title-p"></p>
    </div>
    <ButtonTime setSelectedTime={setSelectedTime} />
    {series && series.length > 0 ? (
        <ApexChartsReact
            options={options}
            series={series}
            type="bar"
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

export default ColumnChart