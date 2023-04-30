import React, { useContext, useState } from 'react'
import DropDownMenu from '../../components/dropDown/DropDownMenu'
import Header from '../../components/header/Header'
import userIcon from "../../assets/account-icon.svg"
import { Container, ContainerHeader, Icon, LocationIcon, UserLogin } from './Map.styled'
import map from "../../assets/images/map.png"
import locationIcon from "../../assets/icons/locationIcon.png"
import MiniCardLocation from '../../components/miniCardLocation/MiniCardLocation'
import { GlobalContext } from '../../context/GlobalContext'
import FormUser from '../../components/formUser/FormUser'
import FormNewUser from '../../components/formUser/FormNewUser'
const Map = ({ setPageFlow }) => {
    const [cardOpen, setCardOpen] = useState("")
    const context = useContext(GlobalContext)
    const { userName, roleStr, isOpenDropDown , setIsOpenDropDown } = context
    const [modalUser, setModalUser] = useState(0)

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




    return (
        <Container >

            <ContainerHeader>
                <div className='title-view'>
                    {/* <RevisionModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} handleModalClose={handleModalClose} handleModalOpen={handleModalOpen}  /> */}

                    <p className='title-view-p'> Mapa de Unidades</p>

                </div>
                <div className='info-header'>
                    <UserLogin onClick={()=>setIsOpenDropDown(!isOpenDropDown)} >
                        <Icon src={userIcon} />
                        <div className='info-user'>
                            <p className='name'>{userName}</p>
                            <p className='cargo' >{roleStr}</p>
                        </div>
                    </UserLogin>
                </div>
                <DropDownMenu context={context} setIsOpenDropDown={setIsOpenDropDown} isOpenDropDown={isOpenDropDown} setModalUser={setModalUser}/>
                {handleModalUser(modalUser)}
            </ContainerHeader>
            <div className='mapDiv' onClick={()=>setIsOpenDropDown(false)} >

                <LocationIcon
                tValue={"64%"}
                lValue={"20%"}
                >
                        <MiniCardLocation
                            client={"TechnipFMC"}
                            cardOpen={cardOpen}
                            setCardOpen={setCardOpen}
                            setPageFlow={setPageFlow}
                     
                        />

                </LocationIcon>
                <img className='mapImg' src={map} />
            </div>
        </Container>


    )

}

export default Map