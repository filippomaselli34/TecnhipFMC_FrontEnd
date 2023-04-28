import React, { useEffect, useState } from 'react';
import Dashboard from './pages/dashboard/DashBoard';
import { Login } from './pages/login/Login';
import { GlobalContext } from './context/GlobalContext';
import './GlobalStyles.css';
import { InfluxDB, Point } from '@influxdata/influxdb-client';
import Map from './pages/map/Map';
import { BASE_URL } from './constants/BASE_URL';
import bootstrap from 'bootstrap'
import axios from 'axios';
import { headers } from './constants/headers';




function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [pageFlow, setPageFlow] = useState('map');
  // const [role, setRole] = useState('ADMIN')
  // const [role, setRole] = useState('COORDENADOR')
  const [role, setRole] = useState('')
  // const [role, setRole] = useState('VISITANTE')
  const [autho, setAutho] = useState(0)
  const [userName, setUserName] = useState("")
  const [emailUser, setEmailUser] = useState("")
  const [idUser, setIdUser] = useState("")
  const [roleStr, setRoleStr] = useState("")

  useEffect(() => {
 
    reqConfirmLog()
  }, [])

  useEffect(()=>{
    changeRoleName(role)
    setAuth()
  },[role])
  function setAuth() {
    if (role === "ADMIN") {
      setAutho(3)
    } else if (role.includes("COORDENADOR")) {
      setAutho(2)
    } else if (role.includes("OPERADOR")) {
      setAutho(1)
    } else {
      setAutho(0)
    }
  }
  function changeRoleName(inRole) {
    switch (inRole) {
      case "ADMIN":
        setRoleStr("Admin")
        break;
      case "COORDENADOR":
        setRoleStr("Coordenador")
        break;
      case "OPERADOR":
        setRoleStr("Operador")
        break;
      case "COORDENADOR_SALA":
        setRoleStr("Coordenador de Sala")
        break;
      case "OPERADOR_SALA":
        setRoleStr("Operador de Sala")
        break;

      default:
        setRoleStr("Visualizador");
    }
  }
  const reqConfirmLog = async () => {
    try {
      console.log(headers)
      const response = await axios.get(BASE_URL + "users/confirm", headers) 
      window.localStorage.setItem("token", response.data.token)
      setRole(response.data.role)
      setUserName(response.data.name)
      setIsLogged(true)
      setIdUser(response.data.id)
      setEmailUser(response.data.email)
      changeRoleName(response.data.role)
    } catch (error) {
      setIsLogged(false)
      console.log(error)
    }
  }

  const context = {
    isLogged, setIsLogged,
    pageFlow,setPageFlow,
    changeRoleName,
    role, setRole,
    roleStr,
    idUser, setIdUser,
    emailUser, setEmailUser,    
    userName, setUserName,
    autho
  };
  return (
    <>
    <bootstrap>
      <GlobalContext.Provider  value={context} >
      {//rederização condicional
        isLogged ?
        pageFlow === "map" ?
        <Map  setPageFlow={setPageFlow} /> :
        <Dashboard  />
        : <Login  />}

      </GlobalContext.Provider>
        </bootstrap>
    </>
  );
}

export default App;
