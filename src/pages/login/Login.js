import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from "../../assets/logos/FTI_BIG.png"
import { ContainerLogin } from './Login.Styled'
import { BASE_URL } from '../../constants/BASE_URL'
import users from "../../equipmentInField/user.json"
import axios from 'axios'

export const Login = () => {
    // const context = useContext(GlobalContext)
    const [user,setUser] = useState('')
    const [pass, setPass] = useState('')
    const [flow,setFlow] =useState(0)
    const context = useContext(GlobalContext)

    const {
        isLogged, setIsLogged,
        pageFlow,
        role, setRole,
        idUser, setIdUser,
        emailUser, setEmailUser,  
        userName, setUserName,
        autho
      } = context
    const handleForm = (e) => {
        e.preventDefault()
        loginReq()
   
    }

    const loginReq = async ()=>{
        const body = {
            email:user,
            password:pass
        }
       try {
        const response = await axios.post(BASE_URL+"users/login",body)
        console.log(response.data)
        window.localStorage.setItem("token",response.data.token)
        setEmailUser(user)
        setRole(response.data.role)
        setIdUser(response.data.id)
        setUserName(response.data.name)
        setIsLogged(true)
  
       } catch (error) {
            window.alert(error.response.data) 
            console.log(error)
        
       }
    }




    return (
        flow===0?
        <ContainerLogin>
            <div className="container login">
                <div className='flex'>
                    <img className='logo' src={logo} alt="Logo" />
                </div>
                <form onSubmit={handleForm}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" value={user}  onChange={(e)=>setUser(e.target.value)} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control" required />
                    </div>
                    <div className="flex col">
                        <button className="btn btn-primary btn-login">Login</button>
                        <p className="link-senha" onClick={()=>setFlow(1)}>Esqueceu sua senha?</p>
                    </div>
                </form>
            </div>
        </ContainerLogin>:
            <ContainerLogin>
            <div className="container login">
                <div className='flex'>
                    <img className='logo' src={logo} alt="Logo" />
                </div>
                <form onSubmit={handleForm}>
                    <div className="form-group esqueci-senha">
                        <label>Digite seu e-mail e você receberá um link para alterar sua senha.</label>
                        <input type="text" value={user}  onChange={(e)=>setUser(e.target.value)} className="form-control" required />
                    </div>
                    <div className="flex">
                        <button  className="btn btn-primary btn-login">Enviar</button>

                        <button onClick={()=>setFlow(0)} className="btn btn-light btn-login">Voltar</button>
                    </div>
                </form>
            </div>
        </ContainerLogin>

    )
}
