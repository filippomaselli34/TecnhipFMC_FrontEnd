import React, { useContext, useEffect, useState } from 'react'
import hamBurgerIcon from "../../assets/hamburger.svg"
import notifications from "../../assets/images/notifications.svg"
import notificationsActive from "../../assets/images/notification_active.gif"
import userIcon from "../../assets/account-icon.svg"
import { AlarmTable, ContainerHeader, Icon, IconsGroup, UserLogin } from './Header.styled'
import TableAlarms from '../alarmsList/TableAlarms'
import DropDownMenu from '../dropDown/DropDownMenu'
import { BASE_URL } from '../../constants/BASE_URL'
import { GlobalContext } from '../../context/GlobalContext'
import { RequisitionContext } from '../../context/RequisitionContext'
import FormUser from '../formUser/FormUser'
import FormNewUser from '../formUser/FormNewUser'
import axios from 'axios'
import { headers } from '../../constants/headers'

const Header = (props) => {
    const {
        setIsMenuOpen,
        isMenuOpen,
        screenFlow,
        equip,
        allEvents, setAllEvents} = props
        
        const context = useContext(GlobalContext)
        const {isNotificationOpen, setIsNotificationOpen} = useContext(RequisitionContext)

        const {userName, roleStr} = context



    const [isLoading, setIsloading] = useState(false)
    const [newReq, setNewReq] = useState(false)
    const [firstLoad, setFirstLoad] = useState(false)
    const [modalUser, setModalUser] = useState(0)
    const [isOpenDropDown , setIsOpenDropDown] = useState(false)

    const handleClick = () =>{
        setIsNotificationOpen(!isNotificationOpen)
    }
    const handleClickHamburger= () =>{
        setIsMenuOpen(!isMenuOpen)
    }


    useEffect(() => {
        if(!firstLoad){
            handleEvents()
            setFirstLoad(true)
        }
        const timerId = setTimeout(() => {
            handleEvents();
            setNewReq(prevState => !prevState);
        }, 30000);

        return () => {
            clearTimeout(timerId);
        };
    }, [newReq]);


    const handleModalUser = () =>{
        switch (modalUser) {
            case 1:
            return <FormUser setModalUser={setModalUser} />
                break;
                case 2:
            return  <FormNewUser setModalUser={setModalUser} />
                break;
            default:
            return      <></>
                break;
        }
    }


    const handleEvents = async (modalUser) => {
        setIsloading(true);
        try {
            const response = await axios.get(BASE_URL+"log",headers)

            setAllEvents(response.data .sort((a,b)=>a.inicialDate>b.inicialDate?-1:1))

        } catch (error) {
            setIsloading(false);
            console.error(error);
        } 

    }

    const listAlarm = 
    allEvents
    .filter((log)=>log.type==="temp" || log.type==="rev" || log.type==="falha" ||log.type==="pressao")
    .filter((log)=>{
        if(!log.active){
            if(!log.acknowledged)
            {
                return true
            }else{
                return false
            }
        }else{
            return true
        }
    })
const nullObj ={
acknowledged:true,
active:true,
area:"-",
description:"-",
equip:"-",
finalDate:null,
id:"null",
inicialDate:"-",
type:"-",
userId:"-",
value:"-"
}
const arr= [nullObj]

    return (
        <>
        <ContainerHeader>
            <Icon clasName="icon" src={hamBurgerIcon} onClick={handleClickHamburger}/>
            <div className='title-view'>
                {/* <RevisionModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} handleModalClose={handleModalClose} handleModalOpen={handleModalOpen}  /> */}
            
           {
            equip.area &&
            equip.area==="ETE"?
            <p className='title-view-p'>
            {screenFlow && 
            equip.equipamento }  
            {screenFlow && " - " +screenFlow}</p>:
            <>
       {  screenFlow && 
       equip.equipDB &&
            <p className='title-view-p'>   
            {equip.equipamento &&
            equip.equipamento}  
             {screenFlow && " - " +screenFlow}</p>}
            </>
}
            </div>
            
            <div className='info-header'>
                <IconsGroup>
                    <div className='notfication-icon'>
                    <Icon acti={true}  src={listAlarm.length>0?notificationsActive:notifications} onClick={handleClick}/>
                    </div>
                </IconsGroup>
                <UserLogin onClick={()=>setIsOpenDropDown(!isOpenDropDown)} onMouseLeave={()=>setIsOpenDropDown(false)} >
                    <Icon src={userIcon} />
                    <div className='info-user'>
                        <p className='name'>{userName}</p>
                        <p className='cargo' >{roleStr}</p>
                    </div>
                </UserLogin>
            </div>
        <DropDownMenu context={context} setIsOpenDropDown={setIsOpenDropDown}isOpenDropDown={isOpenDropDown} setModalUser={setModalUser}/>
        {handleModalUser(modalUser)}

        </ContainerHeader>
        <AlarmTable notifications={isNotificationOpen}>
            <div className='tabela-alarm' >
           <TableAlarms arrAlamrs={listAlarm.length>0?listAlarm:arr} handleEvents={handleEvents}/>
            </div>


        </AlarmTable>
        </>

    )
}

export default Header
