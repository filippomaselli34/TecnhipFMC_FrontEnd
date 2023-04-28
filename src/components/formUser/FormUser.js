import axios from 'axios'
import React, { useContext, useState } from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import { headers } from '../../constants/headers'
import { regexEmail, regexPassword } from '../../constants/patterns'
import { GlobalContext } from '../../context/GlobalContext'
import { Container, UserGroup, GroupWrapper, InfoContainer } from './FormUser.styled'






const FormUser = ({ setModalUser }) => {

    const [editPassword, setEditPassword] = useState(false)
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const[isEmailEdit,setIsEmailEdit]= useState(false)

    const { roleStr, idUser, emailUser, userName, autho } = useContext(GlobalContext)

    const handleClickEditEmail = () => {

        if (email.match(regexEmail)) {

            const body = {
                email
            }
            handleRequisitionEdit(body)
        } else {
            window.alert("Formato do email invalido")
        }
    }
    const handleClickEditPassword = () => {
        if (pass.match(regexPassword)) {

            const body = {
                password: pass
            }
            handleRequisitionEdit(body)
            setPass('')
            setEditPassword(false)

        } else {
            window.alert("O password de ter de 8 a 12 caracteres, contendo pelo monos 1 letra Maiuscula, 1 letra minuscula e um caracter especial")
        }
    }


    const handleRequisitionEdit = async (body) => {
        try {
            const response = await axios.put(BASE_URL + "users", body, headers)
            console.log(response)
        } catch (error) {
            window.alert(error.response)
            console.log(error)
        }
    }



    return (
        <Container>
            <UserGroup  >
                <h1 className='name-title'>{userName}</h1>
                <h2 className='role-tirle'>{roleStr}</h2>
                <p className='id-title'>{idUser}</p>
            </UserGroup>
            <button onClick={() => setModalUser(0)} className='btn btn-dark clode-btn'>X</button>
            <InfoContainer>

                <GroupWrapper>
                    <label>Email:</label>
                    <div className='group-sec'>
                        {
                            !isEmailEdit ?
                                <>
                                    <p>{emailUser}</p>
                                    <button type='button' className='btn btn-link' onClick={() => setIsEmailEdit(true)}>Editar</button>
                                </> : <>
                                    <input placeholder={emailUser} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <button type='button' className='btn btn-success' onClick={handleClickEditEmail}>Salvar</button>
                                    <button type='button' className='btn btn-danger btn-cancel' onClick={() => {
                                        setEmail("")
                                        setIsEmailEdit(false)
                                    }} >Cancelar</button>
                                </>
                        }
                    </div>
                </GroupWrapper>
                {
                    editPassword ?
                        <GroupWrapper>
                            <p className='edit-pass' onClick={() => setEditPassword(false)}>Cancelar edição</p>
                            <label>Senha:</label>
                            <div className='group-sec'>
                                <input placeholder='Nova senha' value={pass} onChange={(e) => setPass(e.target.value)} />
                                <button type='button' className='btn btn-success' onClick={handleClickEditPassword} >Salvar</button>

                            </div>
                        </GroupWrapper> :
                        <GroupWrapper>
                            <p className='edit-pass' onClick={() => setEditPassword(true)}  >Editar Senha</p>
                        </GroupWrapper>

                }


            </InfoContainer>

        </Container>
    )
}

export default FormUser