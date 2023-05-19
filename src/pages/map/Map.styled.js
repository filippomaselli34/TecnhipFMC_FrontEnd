import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
.mapDiv{
    position:relative;
    z-index:1;
   
    .mapImg{
        width:calc(100%);
    }

}

`
export const ContainerHeader = styled.div`
display:flex;
position:relative;
left:0;
height:6vh;
width:100%;
background-color:white;
align-items:center;
justify-content:flex-end;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
/* padding-left:64px; */
.info-header{
    display:flex;
    align-items:center;
    height:6vh;       
    align-self:end;
}
.title-view{
/* margin:0 0 0 600px; */
display:flex;
justify-content:center;
align-items:center;
width:200px;
margin-right:calc(50vw - 250px);

.title-view-p{
    margin:0;
    font-size:20px;
    font-weight:700;
}

}


`

export const UserLogin = styled.div`
display:flex;
border-radius:8px;
padding: 8px 20px;
margin-left:auto;
:hover{
    cursor:pointer;
        background-color: rgba(32,44,70,0.05);
        transition:0.5s ease;
    }
.info-user{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    p{
        font-size:0.625rem;
        margin: 0;
    }
    .cargo{
       color: rgba(0, 0, 0, 0.35);
    }
}

`
export const Icon = styled.img`
   opacity:${({ acti }) => acti ? "100%" : "50%"};
   height:4vh;
   padding:8px;
    border-radius:8px;

   :hover{
    cursor:pointer;
        background-color: rgba(32,44,70,0.05);
        transition:0.5s ease;
    }


`

export const LocationIcon = styled.div`
        position:absolute;
        left:${({lValue})=>lValue};
        top:${({tValue})=>tValue};

       
    
    
`