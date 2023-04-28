import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
margin:20px 20px 0 20px;
gap:20px;





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

.status-ret{
    height:10px;
    width:30px;
   margin:auto;
    background-color:${({ active, ack }) => {
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