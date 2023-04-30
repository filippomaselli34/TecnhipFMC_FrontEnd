import styled from "styled-components";

export const Container = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items: center;
width:300px;
/* height:216px; */
bottom:0;
left:0;

.pop-up{
    background-color:white;

height:180px;
width:300px;
border-radius:8px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
display:${({ cardOpen }) => cardOpen ? "flex" : "none"};
flex-direction:column;
justify-content: space-between;
padding:12px;
padding-top:4px;
margin-bottom:10px;
right:50%;
top:50%;
    .closeBtn{
    /* display:flex; */
    position:absolute;
    top:0;
    right:8px;
    margin:0;
    margin-left:auto;
    margin-bottom:4px;
    cursor:pointer;
}
.unidade-name{
    font-weight:600;
    font-size:18px;
    text-align: center;
    margin:0;
    margin-top:12px;
}
.logo{
    /* width:100%; */
    /* max-height:100px; */
    /* width:100px; */
    margin:auto 0;
    
    /* margin-bottom:20px; */
}
.btn{
    /* margin-bottom:8px; */
    /* margin-top:16px; */
}

:after{
    content: " ";
    position:absolute;
    top:calc(100% - 12px - 3vw);
    left:50%;
    margin-bottom:10px;
    border-width:10px;
    border-style:solid;
    border-color:#fff transparent transparent transparent;

}
}
.icon-loc{
    /* display:absolute: */
    /* margin: 0 auto 0 calc(1fr - 1.5vw); */
    width:3vw;
    height:3vw;
    margin-top:${({ cardOpen }) => cardOpen ? "0" : "auto"};
    margin-left:1.5vw;
    /* padding-left:1.5vw; */
    /* transform:translate(25%); */
    cursor:pointer;
    :hover{
        transform:scale(1.2);
        transition:0.5s;
    }
}


`