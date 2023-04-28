import styled from "styled-components";

export const Contanier = styled.div`
position:absolute;
height:30px;
width:100px;
top:${({top})=>top};
left:${({left})=>left};
background-color:black;
color:white;
z-index:1500;
display:flex;
align-items:center;
justify-content:center;

p{
    color:white;
    margin:0;
}

`