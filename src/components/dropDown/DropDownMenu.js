import React, { useContext } from 'react'
import { Container, UserLogin } from './DropDownMenu.styled'
import addPerson from "../../assets/icons/addPerson.svg"
import person from "../../assets/icons/person.svg"
import settings from "../../assets/icons/settings.svg"
import userIcon from "../../assets/account-icon.svg"

import { GlobalContext } from '../../context/GlobalContext'

const DropDownMenu = ({ isOpenDropDown, setIsOpenDropDown,setModalUser }) => {
    const context = useContext(GlobalContext)

    const { autho, userName, roleStr } = context

    return (
        <Container isOpen={isOpenDropDown} onMouseEnter={() => setIsOpenDropDown(true)} onMouseLeave={() => setIsOpenDropDown(false)} onMouseOver={() => setIsOpenDropDown(true)} >
            <ul>
                <li className='header-ul'>
                    <UserLogin >
                        <img className='user-icon' src={userIcon} />
                        <div className='info-user'>
                            <p className='name'>{userName}</p>
                            <p className='cargo' >{roleStr}</p>
                        </div>
                    </UserLogin>
                </li>
                <li className='linha-li'>
                    <div></div>
                </li>

                <li className='person-li'>
                    <img src={person} alt='' />
                    <p onClick={()=>setModalUser(1)}>Meu Perfil</p>
                </li>
                {
                    autho > 1 &&

                    <li className='add-li'>
                        <img src={addPerson} alt='' />
                        <p  onClick={()=>setModalUser(2)} >Criar Usuario</p>
                    </li>
                }{
                    autho > 2 &&
                    <li className='settings-li'>
                        <img src={settings} alt='' />
                        <p>Configurações</p>
                    </li>
                }
                <li className='linha-li'>
                    <div></div>
                </li>
                <li className='btn-li'>
                    <button className='btn btn-primary' onClick={()=>{
                        window.localStorage.removeItem("token")
                        window.location.reload()}} >Logout</button>
                </li>
            </ul>

        </Container>
    )
}

export default DropDownMenu