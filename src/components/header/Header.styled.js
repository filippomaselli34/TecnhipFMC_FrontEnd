import styled from "styled-components";

export const ContainerHeader = styled.div`
display:flex;
position:relative;
left:0;
height:60px;
width:100%;
background-color:white;
align-items:center;
justify-content:space-between;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
padding-left:16px;
.info-header{
    display:flex;
    align-items:center;
    height:60px;       
    margin-left:auto;  
}
.title-view{
margin:0 0 0 600px;;
display:flex;
justify-content:center;
align-items:center;
.title-view-p{
    margin:0;
    font-size:20px;
    font-weight:700;
}

}
`
export const IconsGroup = styled.div`
.notfication-icon{
    padding:4px;
    border-radius:8px;


    :hover{
        cursor:pointer;
        background-color: rgba(32,44,70,0.05);
        transition:0.5s ease;
    }
}
`
export const UserLogin = styled.div`
display:flex;
border-radius:8px;
padding: 8px 20px;
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
   opacity:${({acti})=>acti?"100%":"50%"};
   height:40px;
   padding:8px;
    border-radius:8px;

   :hover{
    cursor:pointer;
        background-color: rgba(32,44,70,0.05);
        transition:0.5s ease;
    }


`

export const AlarmTable = styled.div`
display:${({ notifications }) => notifications ? "block" : "none"};
background-color:white;
max-height:10rem;
margin:20px;
margin-bottom:0;
overflow-y:scroll;
padding:4px;
border-radius:8px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


`