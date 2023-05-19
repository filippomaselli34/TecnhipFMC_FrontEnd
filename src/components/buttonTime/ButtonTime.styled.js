import styled from "styled-components";

export const RadioGroup = styled.div`
position:absolute;
/* left:20vw; */
top:-24px;
left:${({tl})=>tl?"40%":"35%"};
z-index:105;
.btn-group 
.group-check{
    position:relative;
    .btn-check{
        position:absolute;
        height:100%;
        width:100%;
        opacity: 0;

    }
    
}

 .btn-check{ 
    :hover{
        cursor:pointer;
        background-color:rgba(32,44,70,1);
        color:white;
        transition:1s ease-out;
    }
    :checked + label{
        background-color:rgba(32,44,70,1);
        color:white;
        transition:1s ease-out;
    }

}

`