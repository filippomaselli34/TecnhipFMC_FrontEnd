import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
padding:20px 20px 0 20px;
/* gap:20px; */

`

export const HeaderVariaveis = styled.div`
display:grid;
grid-template-columns:350px 1fr;
column-gap:20px;

.card{
display:flex;
flex-direction:column;
background-color:white;
box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
padding-top:4px;
padding-left:4px;

border-radius:8px;
p{
    margin:0;
    padding:0;
}
.card-info{
    position:absolute;
    .last-update{
        font-weight:300;
        font-size:0.8rem;
    }
    .last-value{
        font-weight:500;
        font-size:1.4rem;
    }
    .name-var{
        font-weight:500;
        font-size:1rem;
    }
    }
    .chart{
        /* background-color:red; */


        /* padding:0; */
        /* padding-right:2px; */
        /* padding-top:32px; */
/* margin-bottom:-44px; */
/* box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15); */

        /* position:absolute; */
    }

}
.alarms{
        height:100%;
        background-color:white;
        border-radius:8px;
box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
padding:4px;
/* background-color:red; */
    }


`