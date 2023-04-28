import styled from "styled-components";

export const Container = styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
right:50%;
top:50%;
width:600px;
background-color:white;
z-index:2000;
padding:20px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius:8px;

.clode-btn{
    position:absolute;
    right:8px;
    top:8px;
    border-radius:50%;
}

`

export const UserGroup = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-bottom:solid 1px black;
margin:0;
width:480px;

.name-title{
    font-size: 32px;
    margin:0;
}
.role-tirle{
    font-size: 28px;
    margin:0;
}
.id-title{
    margin:0;
}

`


export const FormContainer = styled.form`
margin-top:16px;
h3{
    text-align:center;
}

`
export const InfoContainer = styled.form`
margin-top:0px;
`

export const GroupWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:16px;
width:540px;
 input{
    height:32px;
    padding:4px;
    padding-left:8px;
    border:${({isValid})=>isValid?"none":"red"};
    margin-right:8px;
    margin-top:8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

 }
 label{
    /* text-align:center; */
    /* border-bottom:1px solid grey; */
 }

 p{
    margin:0;
    font-size:18px;
 }
 .edit-pass{
    margin:0 auto;
    color:blue;
    cursor:pointer;
 }
.group-sec{
    display:flex;
    align-items:center;

    .link-p{
        margin:0;
        color:blue;
        cursor:pointer;
    }
}

.tooltip-p{
    margin-top:4px;
    font-size:14px;
    color:red;
}

`
export const RadioWrapper = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:space-between;
gap:8px;
margin-top:16px;
height:60px;
input{
    margin-right:4px;
}

`

export const GroupBtn = styled.div`

display:flex;
gap:16px;
margin-top:20px;
`