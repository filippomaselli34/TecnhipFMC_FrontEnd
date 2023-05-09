import styled from "styled-components";

export const Contanier = styled.div`
position:absolute;
height:30px;
width:150px;
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
    /* width:100%; */
    width:70%;    
    margin:6px;
    border-radius:4px;
    font-size:16px;
    background-color:#F2F2F2;
    text-align:center;
    color:${(({colorInside})=>colorInside)}
    
}
.value-p-text{
    width:100%;    
    margin:6px;
    border-radius:4px;
    font-size:16px;
    background-color:#F2F2F2;
    text-align:center;
    color:${(({colorInside})=>colorInside)}
}
.eng-p{
    /* width:20%; */
    margin: 0 6px;
    font-size:16px;
}

}

.name-p{
    ${(({color})=>color==="white"&&"color:white")}
}

p{
    /* color:#787878; */
    font-weight:600;
    margin:0;}


 

`