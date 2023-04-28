import React, { useEffect, useState } from 'react'
import dashboard from "../../assets/dashboard.svg"
import factory from "../../assets/factory.svg"
import machine from "../../assets/machine.svg"
import expandMore from "../../assets/expand_more.svg"
import expandLess from "../../assets/expand_less.svg"
import equipamentos from "../../equipmentInField/equipMock.json"
import { Container, Icon, NavLinks, Sidebar, SubMenu, ThirdMenu } from './Dashboard.styled'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header'
import Overview from '../../screens/overview/Overview'
import Energy from '../../screens/energy/Energy'
import Events from '../../screens/events/Events'
import Charts from '../../screens/chartsScreens/Charts'
import AlarmsList from '../../screens/alarmsList/AlarmsList'
import Documentations from '../../screens/documentations/Documentations'
import Variaveis from '../../screens/variaveis/Variaveis'
import MapLocation from '../../screens/mapLocation/MapLocation'
import { RequisitionContext } from '../../context/RequisitionContext'
import RevisionModal from '../../components/modal/RevisionModal'
import Harmonicas from '../../screens/chartsScreens/Harmonicas'

const DashBoard = () => {
  const [equip, setEquip] = useState({})
  const [screenFlow, setScreenFlow] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [tableDB, setTableDB] = useState()
  const [horimeter, setHorimeter] = useState()
  const [analogicData, setAnalogicData] = useState([])
  const [equipment, setEquipment] = useState()
  const [arrDesligado, setArrDesligado] = useState([])
  const [arrCarga, setArrCarga] = useState([])
  const [arrFalha, setArrFalha] = useState([])
  const [arrManutencao, setArrManutencao] = useState([])
  const [arrPressaoDescarga, setArrPressaoDescarga] = useState([])
  const [arrTempDescarga, setArrTempDescarga] = useState([])
  const [arrTempDescAntes, setArrTempDescAntes] = useState([])
  const [arrTempDescDepois, setArrTempDescDepois] = useState([])
  const [variable, setvariable] = useState("Pressão Descarga")
  const [firstLoad, setFirstLoad] = useState(false)
  const [series, setSeries] = useState([])
  const [varTable, setVarTable] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [selectedTime, setSelectedTime] = useState("5m");
  const [numb, setNumb] = useState(0);
  const [isLoading, setIsloading] = useState(false)
  const [viewFlow, setViewFlow] = useState(0)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [data, setData] = useState([])
  const [equipData, setEquipData] = useState([])





  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleFlowVaribles = (variable) => {
    if (variable === "Pressão Descarga") {
      setVarTable({
        name: "Temperatura do Oleo",
        data: [...arrTempDescAntes]
      })
    }
    if (variable === "Temperatura Descarga") {
      setVarTable({
        name: "Temperatura Descarga",
        data: [...arrTempDescAntes]
      })
    }
    if (variable === "Temperatura Desc Antes") {
      setVarTable({
        name: "Temperatura do Oleo",
        data: [...arrTempDescAntes]
      })
    }
  }

  const handleSeries = (arrPD, arrTD, arrTOA,arrTOD) => {
    const series = [
      {
        name: "Pressão Descarga",
        data: arrPD.map((value) => {
          //value.x = 20/04/2023, 12:29:15'
          return {
            x: new Date(value.x).getTime(),
            y: value.y
          }
        })
      },
      {
        name: "Temperatura Descarga",
        data: arrTD.map((value) => {
          return {
            x: new Date(value.x).getTime(),
            y: value.y
          }
        })
      },
      {
        name: "Temperatura do Óleo Antes Rad.",
        data: arrTOA.map((value) => {
          return {
            x: new Date(value.x).getTime(),
            y: value.y
          }
        })
      }
      ,
      {
        name: "Temperatura do Óleo Depois Rad",
        data: arrTOD.map((value) => {
          return {
            x: new Date(value.x).getTime(),
            y: value.y
          }
        })
      }
    ]
    setSeries(series)

  }


  const preContext = {
    equip, setEquip,
    isMenuOpen,
    screenFlow,
    setScreenFlow,
    data, setData,
    arrDesligado, setArrDesligado,
    arrCarga, setArrCarga,
    arrFalha, setArrFalha,
    arrManutencao, setArrManutencao,
    horimeter, setHorimeter,
    analogicData, setAnalogicData,
    equipment, setEquipment,
    arrPressaoDescarga, setArrPressaoDescarga,
    arrTempDescarga, setArrTempDescarga,
    arrTempDescAntes, setArrTempDescAntes,
    arrTempDescDepois, setArrTempDescDepois,
    variable, setvariable,
    selectedTime, setSelectedTime,
    firstLoad, setFirstLoad,
    handleFlowVaribles,
    handleSeries,
    isLoading, setIsloading,
    viewFlow, setViewFlow,
    isNotificationOpen, setIsNotificationOpen,
    equipData, setEquipData,
    data, setData


  }
  const handleModalClose = () => {
    setModalIsOpen(false)
  }

  // useEffect(() => {

  //     handleSeries()

  // },[selectedTime])
useEffect(()=>{
  setSelectedTime("5m")
},[screenFlow])

  const handleScreenFlow = () => {
    switch (screenFlow) {
      case "Overview":
        return <Overview />
        break;
      case "Alarmes":
        return <AlarmsList />
        break;
      case "Tensão Elétrica":
        return <Charts type={screenFlow} />
        break;
      case "Corrente Elétrica":
        return <Charts type={screenFlow} />
        break;
      case "Potência Elétrica":
        return <Charts type={screenFlow} />
        break;
      case "Frequência":
        return <Charts type={screenFlow} />
        break;
      case "Fator de Potência":
        return <Charts type={screenFlow} />
        break;
      case "Harmônicas":
        return <Harmonicas />
        break;
      case "Gráficos":
        return <Charts type={screenFlow} />
        break;
      case "Documentação":
        return <Documentations />
        break;
      default:
        return <MapLocation isMenuOpen={isMenuOpen} />
        break

    }
  }


console.log(screenFlow)
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false)
    }
  }, [])

  return (

    <RequisitionContext.Provider value={preContext}>
      <Container>
        <SideBar
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime} 
          data={data}
          setData={setData}
          />
        <div className='main'>
          <Header
            equip={equip}
            screenFlow={screenFlow}
            allEvents={allEvents}
            setAllEvents={setAllEvents}
            setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}
            setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}
            handleModalClose={handleModalClose}
            handleModalOpen={handleModalOpen}
          />
          <div className='body'>
            {
              handleScreenFlow()
            }
          </div>
        </div>
      </Container>
    </RequisitionContext.Provider>

  )
}

export default DashBoard