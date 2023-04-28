import React from 'react'
import { Container } from './Gauge.styled'
import GaugeChart from 'react-gauge-chart'
import ReactApexChart from 'react-apexcharts'

const Gauge = ({value,type='bar' ,date,description, min=0, max=30}) => {


  const  series= [(value*100)/(max-min)]
  const options = {
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#999',
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show:false,
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        },
      },
      labels: ['Average Results'],
    } 
  



  return (
    <Container>

<ReactApexChart options={options} series={series} type="radialBar" />
    
<div className='info-gauge'>
    <p className='value-g'>{value +" "+type}</p>
    <p className='description-g'>{description}</p>

<p className='time'>Última leitura:{date}</p>
</div>
    </Container>
  )
}

export default Gauge