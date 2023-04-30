import styled from "styled-components";
import bgImage from "../../assets/images/Fundo_Login.png"

export const ContainerLogin = styled.div`
    background: url(${bgImage});
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    .flex{
        display:flex;
    }
    .col{
        flex-direction:column;
    }
    .login{
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 2vw;
    max-width: 600px;
}
input{
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.btn-login{
   margin: 0 auto;

   width: 200px;
}

.logo{
    margin: 0 auto;
    width: 70%;
    /* height: 30%; */
}
.link-senha{
    /* text-align:center; */
    font-size:14px;
    margin: 8px auto;
    /* color:blue; */
    /* text-decoration:underline; */
    cursor:pointer;
}

.esqueci-senha{
    margin:20px 0;
    text-align:center;
    label{
        padding:8px 0;
    }
}

.form-group{
    margin:20px 0;
}


`

