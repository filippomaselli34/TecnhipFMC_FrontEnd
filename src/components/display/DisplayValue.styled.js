import styled from "styled-components";

export const Contanier = styled.div`
position:absolute;
height:30px;
width:140px;
top:${({top})=>top};
left:${({left})=>left};
font-size:11px;
z-index:1500;
display:flex;
flex-direction:column;
/* align-items:center; */
justify-content:center;
.display-wrapper{
 background-color:#A5A5A5;
border:1px solid #787878;
width:100%;
border-radius:8px;
display:flex;
align-items: center;

.value-p{
    width:70%;
    margin:6px;
    border-radius:4px;
    font-size:16px;
    background-color:#F2F2F2;
    text-align:center;
    
}
.eng-p{
    /* width:20%; */
    margin-left:2px;
    font-size:16px;
}

}

p{
    /* color:#787878; */
    font-weight:600;
    margin:0;
}

`