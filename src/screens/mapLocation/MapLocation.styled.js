import styled from "styled-components";

export const Container = styled.div`
/* height:calc(100vh - 100px); */
width:${({isMenuOpen})=>isMenuOpen?"calc(100vw - 300px)":"100%"};
max-width:1920px;
min-width:1620px;

.voltar-btn{
    color:blue;
    cursor:pointer;
    margin:4px 0 4px 20px;
}

`

export const ContainerMap = styled.div`
position:relative;
margin:20px 0 0 20px;
background:white;
width:100%;
height: ${({isNotificationOpen})=>isNotificationOpen?"calc(100% - 40px)":"calc(100vh - 100px)"};
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
overflow:hidden;

.map3d{
    width:100%;
    height:100%;
    border-radius:8px;
}
`

export const ContainerList = styled.div`
background:white;
padding:4px;
width:100%;
margin-top:20px;
margin-left:20px;
border-radius:8px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
export const CompGroup = styled.div`
position:absolute;
background:white;
width:60px;
left:12px;
top:12px;

.icon{
    width:100%;
    filter:invert(1);
    :hover{
    cursor:pointer;
    }
}

`

export const Table = styled.table`
width:100%;

background-color:white;
border-collapse:separate;

/* margin:auto 8px; */
color:white;
border-spacing:0 6px ;
.header-table{
margin:0px;
}

th{
    background-color:#475793;
    border-left:2px solid white;
    color:white;
    text-align:center;
    overflow:hidden;
    padding:0;
    font-size:12px;
    
    

}
.first{
    border-top-left-radius:8px;
    border-bottom-left-radius:8px;
    border:none;
}
.last{
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
}

`
export const Line = styled.tbody`
    border-radius:8px;
    background-color:#d8e2f3;
    cursor:pointer;
    /* margin:2px 0; */



td{
    
    /* margin:8px; */
    text-align:center;
    font-size:11px;
    /* border-left:1px solid  #475793; */

color:${({ active, ack }) => {
        if (active) {
            if (ack) {
                return "green;"
            } else {

                return "red;"
            }
        } else {
            if (!ack) {
                return "blue;"
            }
        }
    }
    }
}

`

export const IconEquip = styled.div`
position:absolute;
left:${({left})=>left};
top:${({top})=>top};
width:50px;
z-index:1600;

`
