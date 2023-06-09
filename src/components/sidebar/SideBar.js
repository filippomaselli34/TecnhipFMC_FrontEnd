import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/logos/FTI_BIG.D.png"
import dashboard from "../../assets/dashboard.svg"
import factory from "../../assets/factory.svg"
import expandMore from "../../assets/expand_more.svg"
import expandLess from "../../assets/expand_less.svg"
import equipments from "../../equipmentInField/equipMock.json"
import { ExptIcon, Icon, NavLinks, Sidebar, SubMenu, TextMenu, ThirdMenu } from './SideBar.styled'
import { RequisitionContext } from '../../context/RequisitionContext'
import { GlobalContext } from '../../context/GlobalContext'

const SideBar = (props) => {
  //rece como props um set para selecionar um equipamento especifico e se o menu é para estar em display
  const { pageFlow, setPageFlow } = useContext(GlobalContext)
  const [localOverview, setLocalOverview] = useState(false)




  const reqContext = useContext(RequisitionContext)

  const {
    idOpen,
    isMenuOpen,
    screenFlow,
    setScreenFlow,
    handleClickArea,

    setViewFlow,

  } = reqContext


  const MapaName = "Mapa de Unidades"
  const local = "Unidade Macaé-RJ"


  function newArr() {
    const arr = []
    for (let equip of equipments) {
      if (!arr.includes(equip.area)) {
        arr.push(equip.area)
      }
    }
    return arr
  }
  const areaArr = newArr()

  useEffect(() => {



  }, []);



  return (
    <Sidebar isMenuOpen={isMenuOpen}>
      <div className="logo-details">
        <img src={logo} />
      </div>
      <NavLinks localOverview={localOverview} eteView={idOpen===("ETE")}>
        <li className='map-div' onClick={() => setPageFlow("map")}>

          <Icon src={dashboard} />
          <span className="map-name">{MapaName}</span>


        </li>
        <li>
          <div className='icon-link' onClick={() => {
                          setScreenFlow("")
                          setViewFlow(0)
          }}>
            <Icon src={dashboard} />
            <span className="link-name">{local}</span>
          </div>

        </li>
        <li>
          <div className='icon-link' onClick={() => {
            handleClickArea("ETE")
          }}>
            <Icon src={factory} />
            <span className="link-name">ETE</span>
            <ExptIcon  src={idOpen === ("ETE") ? expandMore : expandLess} />
          </div>
          <ul className='eteView-ul'>
          <li><TextMenu
                    onClick={()=>setScreenFlow("Overview (ETE)")}
                    isActive={screenFlow === 'Overview (ETE)'}
                    >
                    Overview</TextMenu></li>
                  <li><TextMenu
                    onClick={()=>setScreenFlow("ETE - Gráficos")}
                    isActive={screenFlow === 'ETE - Gráficos'}
                    >
                    Gráficos</TextMenu></li>
                  <li><TextMenu
                    onClick={()=>setScreenFlow("Documentação")}
                    isActive={screenFlow === 'Documentos'}
                   >
                    Documentos</TextMenu></li>
          </ul>
        </li>
        {areaArr
        .filter((area)=>area.includes("Transformador"))
          .map((area) => {
            return (
              <li key={area} >
                <div className='icon-link' onClick={() => handleClickArea(area)}>

                  <Icon src={factory} />
                  <span className="link-name">{area}</span>

                  <ExptIcon src={idOpen === area ? expandMore : expandLess} />
                </div>

                <ThirdMenu disp={idOpen === area}>
                  <li><TextMenu
                    isActive={screenFlow === 'Overview'}
                    onClick={() => {
                      setScreenFlow("Overview")}}>
                    Overview</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Tensão Elétrica'}
                    onClick={() => {
                      setScreenFlow("Tensão Elétrica")}}>
                    Tensão Elétrica</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Corrente Elétrica'}
                    onClick={() => {
                      setScreenFlow("Corrente Elétrica")}}>
                    Corrente Elétrica</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Potência Elétrica'}
                    onClick={() => {
                      setScreenFlow("Potência Elétrica")}}>
                    Potência Elétrica</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Frequência'}
                    onClick={() => {
                      setScreenFlow("Frequência")}}>
                    Frequência</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Fator de Potência'}
                    onClick={() => {
                      setScreenFlow("Fator de Potência")}}>
                    Fator de Potência</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Harmônicas'}
                    onClick={() => {
                      setScreenFlow("Harmônicas")}}>
                    Harmônicas</TextMenu></li>
                  <li><TextMenu
                    isActive={screenFlow === 'Harmônicas'}
                    onClick={() => {
                      setScreenFlow("Documentação")}}>
                    Documentos</TextMenu></li>
                </ThirdMenu>



              </li>

            )
          })
        }
      </NavLinks>

    </Sidebar>
  )
}

export default SideBar