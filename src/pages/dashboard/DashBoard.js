import React, { useEffect, useState } from 'react'
import { Container } from './Dashboard.styled'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header'
import Overview from '../../screens/overview/Overview'
import Charts from '../../screens/chartsScreens/Charts'
import AlarmsList from '../../screens/alarmsList/AlarmsList'
import Documentations from '../../screens/documentations/Documentations'
import MapLocation from '../../screens/mapLocation/MapLocation'
import { RequisitionContext } from '../../context/RequisitionContext'
import Harmonicas from '../../screens/chartsScreens/Harmonicas'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import ChartsEte from '../../screens/chartsScreens/ChartsEte'
import OverviewETE from '../../screens/overview/OverviewETE'
import ChartsETETimeline from '../../screens/chartsScreens/ChartETETimeLine'

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
  const [dataInicial, setDataInicial] = useState(new Date().toISOString())
  const [dataFinal, setDataFinal] = useState(new Date().toISOString())

  const { isOpenDropDown, setIsOpenDropDown } = useContext(GlobalContext)



  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleFlowVaribles = (variable) => {

  }

  const handleSeries = (arrPD, arrTD, arrTOA, arrTOD) => {



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
    data, setData,
    dataInicial, setDataInicial,
    dataFinal, setDataFinal


  }
  const handleModalClose = () => {
    setModalIsOpen(false)
  }

  // useEffect(() => {

  //     handleSeries()

  // },[selectedTime])
  useEffect(() => {
    setSelectedTime("5m")
  }, [screenFlow])

  const handleScreenFlow = () => {
    console.log(screenFlow)
    switch (screenFlow) {
      case "Overview":
        return <Overview />
        break;
      case "Overview (ETE)":
        return <OverviewETE />
        break;
      case "Overview - Timeline":
        return <ChartsETETimeline />
        break;
      case "Alarmes":
        return <AlarmsList />
        break;
      case "Tensão Elétrica":
        return <Charts type={screenFlow} eng={"V"} />
        break;
      case "Corrente Elétrica":
        return <Charts type={screenFlow} eng={"A"} />
        break;
      case "Potência Elétrica":
        return <Charts type={screenFlow} />
        break;
      case "Frequência":
        return <Charts type={screenFlow} eng={"Hz"} />
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
      case "ETE - Gráficos":
        return <ChartsEte type={screenFlow} eng={"m³"} />
        break;
      case "Documentação":
        return <Documentations />
        break;
      default:
        return <MapLocation isMenuOpen={isMenuOpen} />
        break

    }
  }


  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false)
    }
  }, [])

  return (

    <RequisitionContext.Provider value={preContext}>
      <Container  >
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
          <div className='body' onClick={() => setIsOpenDropDown(false)}>
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