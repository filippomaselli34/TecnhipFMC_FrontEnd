import styled from "styled-components";

export const Table = styled.table`
user-select:none;
width:100%;

background-color:white;
border-collapse:separate;
padding:0 4px;
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
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    border:none;
}
.last{
    border-top-right-radius:6px;
    border-bottom-right-radius:6px;
}

`
export const Line = styled.tbody`
    border-radius:4px;
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