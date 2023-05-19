

import axios from 'axios'
import React, { useContext, useState } from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import { headers } from '../../constants/headers'
import { regexEmail, regexPassword } from '../../constants/patterns'
import { GlobalContext } from '../../context/GlobalContext'
import {
    Container,
    FormContainer,
    GroupBtn,
    GroupWrapper,
    RadioWrapper,
    UserGroup,
} from './FormUser.styled'

const FormNewUser = ({ setModalUser }) => {
    const { roleStr, idUser,  userName, autho } =
        useContext(GlobalContext)
    const [matricula, setMatricula] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passRep, setPassRep] = useState('')
    const [role, setRole] = useState('')
    const [erro, setErro] = useState(1)

    const company = "TechnipFMC"
    const handleResetBtn = () => {
        setMatricula('')
        setName('')
        setEmail('')
        setPass('')
        setPassRep('')
        setRole('')

    }

    const handleSubmitForm = (e) => {
        setErro(1)
        e.preventDefault();
        const body = {
            id: matricula,
            company,
            name,
            email,
            role,
            password: pass
        }
        if (!email.match(regexEmail)) {
            setErro(erro * 2)
        }
        if (!pass.match(regexPassword)) {
            setErro(erro * 3)
        }
        if (pass !== passRep) {
            setErro(erro * 5)
        }
        if (erro === 1) {
            handleRequisitionNewUser(body)
        }

    }

    const handleRequisitionNewUser = async (body) => {
        try {
            const response = await axios.post(BASE_URL + "users", body, headers)
            handleResetBtn()
            window.alert(response.data.message)
        } catch (error) {
            window.alert(error.response.data)
            console.log(error)
        }
    }

    return (
        <Container>
            <UserGroup>
                <h1 className="name-title">{userName}</h1>
                <h2 className="role-tirle">{roleStr}</h2>
                <p className="id-title">{idUser}</p>
            </UserGroup>
            <button onClick={() => setModalUser(0)} className='btn btn-dark clode-btn'>X</button>
            <FormContainer onSubmit={handleSubmitForm}>
                <h3>Criar novo Usuário</h3>

                <GroupWrapper>
                    <label>Matrícula</label>
                    <input
                        placeholder="Matricula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        required
                    />
                </GroupWrapper>

                <GroupWrapper>
                    <label>Nome</label>
                    <input
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </GroupWrapper>

                <RadioWrapper onChange={(e) => { setRole(e.target.value) }}>
                    {
                        autho > 2 &&
                        <>
                            <div className="raio-group">
                                <input
                                    type="radio"
                                    name="role"
                                    value="COORDENADOR"
                                />
                                <label>Coordenador</label>
                            </div>

                            <div className="raio-group">
                                <input
                                    type="radio"
                                    name="role"
                                    value="OPERADOR_SALA"
                                />
                                <label>Coordenador de Sala</label>
                            </div>



                            <div className="raio-group">
                                <input
                                    type="radio"
                                    name="role"
                                    value="OPERADOR"
                                />
                                <label>Operador</label>
                            </div>

                            <div className="raio-group">
                                <input
                                    type="radio"
                                    name="role"
                                    value="COORDENADOR_SALA"
                                />
                                <label>Operador de Sala</label>
                            </div>
                        </>
                    }

                    <div className="raio-group">
                        <input
                            type="radio"
                            name="role"
                            value="VISUALIZADOR"
                        />
                        <label>Visualizador</label>
                    </div>
                </RadioWrapper>
                <GroupWrapper isValid={erro % 2 === 0}>
                    <label>Email</label>
                    <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='false' required />
                    {erro % 5 === 0 &&
                        <p className='tooltip-p'>O e-mail fornecido não é válido.</p>}
                </GroupWrapper>
                <GroupWrapper isValid={erro % 3 === 0}>
                    <label>Senha</label>
                    <input placeholder='Nova senha' value={pass} onChange={(e) => setPass(e.target.value)} autoComplete='false' required />
                    {erro % 5 === 0 &&
                        <p className='tooltip-p'>A senha deve ter entre 8 e 12 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.</p>}
                </GroupWrapper>
                <GroupWrapper isValid={erro % 5 === 0}>
                    <label>Repetir senha</label>
                    <input placeholder='Repetir senha' value={passRep} onChange={(e) => setPassRep(e.target.value)} autoComplete='false' required />
                    {erro % 5 === 0 &&
                        <p className='tooltip-p'>A confirmação de senha não corresponde à senha inserida.</p>}
                </GroupWrapper>
                <GroupBtn>
                    <button type='reset' onClick={handleResetBtn} className='btn btn-btn btn-secondary'>Resetar</button>
                    <button type='buttom' className='btn btn-success'>Salvar</button>
                </GroupBtn>
            </FormContainer>

        </Container>
    )
}

export default FormNewUser

