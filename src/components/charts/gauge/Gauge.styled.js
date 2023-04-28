import styled from "styled-components";

export const Container = styled.div`
/* margin 50px; */
width:350px;
height:140px;
background-color:white;
position:relative;
padding: 0 4px 4px 4px;
border-radius:8px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


#gauge-chart5{
    width:100%;
}
.info-gauge{
    position:absolute;
    width:100%;
    left:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    p{
        margin:0;
        padding:0;
    }
    .value-g{
        margin-top:4px;
        font-size:20px;
        font-weight:700;
      
    }
    .description-g{
        text-align:center;
        overflow-wrap: wrap;
        width:100px;
    }
    .time{
        font-size:0.8rem;
        margin-right:auto;
        margin-left:4px;
    }

}
`