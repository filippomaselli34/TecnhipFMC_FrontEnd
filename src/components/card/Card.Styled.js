import styled from "styled-components";

export const ContainerCard = styled.div`
width:276px;
height:140px;
background-color:white;
display:flex;
flex-direction:column;
:hover{
    cursor:${({isBtn})=>isBtn?"pointer":"auto"};
   /* border:${({isBtn})=>isBtn?"1px grey solid":"auto"}; */
   box-shadow:${({isBtn})=>isBtn?"inset 0px 0px 7px 0px rgba(148,140,148,1)":"none"};
   transition: 0.5s ease-out;
}
padding:4px;
border-radius:8px;
box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
.info{
    display:flex;
    margin:auto 0;
    /* justify-content:space-evenly; */
}
img{
    /* width:42px; */
    height:52px;
    margin-left:${({wImg})=>wImg==="temp"?"24px":"16px"};
    /* padding:1vw; */
}
.card-info{
 
   display:flex;
   flex-direction:column;
   margin-left:12px;
    .name{
        font-size:14px;
        margin-bottom:auto;
        font-weight:500;
    }
    .value{
        font-size:1.3em;
        font-weight:700;
        margin-top:auto;
        margin-bottom:0;
    }

}
.time{
        font-weight:300;
        font-size:0.8rem;
        margin-top:auto;
        margin-bottom:0;
        padding-left:8px;

    }


`