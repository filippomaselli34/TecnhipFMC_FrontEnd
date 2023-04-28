import styled from "styled-components";

export const Container = styled.div`
position:absolute;
z-index:1000;
right:0;
top:58px;
background:white;
width:300px;
/* border:1px solid grey; */
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
font-size:14px;
border-radius:8px;
padding:8px;
display:none;
${({isOpen})=>{
    if(!isOpen){
        return(
        "display:none;"
    )
    }else{
        return(
        "display:flex;"+
        "transition:1s;"
    )
    }

}}


flex-direction:column;
justify-content:center;
li{
    margin:0;
    list-style-type:none;
    display:flex;
    align-items: center;
    
    img{
        height:40px;
        padding:4px;
    }
    p{
        margin:0;
    cursor:pointer;
    :hover{
        color:black;
        font-weight:500;
    }

    }

}
.linha-li{
    border:1px rgba(140,155,163,0.2) solid;
}
.add-li{
    img{
        margin-left:4px;
    }
}
.btn-li{
    display:flex;
    justify-content:center;
    margin-top:8px;
    border:none;
}


`

export const UserLogin = styled.div`
display:flex;
border-radius:8px;
padding: 2px 20px;
margin:0 auto;


.info-user{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    p{
        font-size:.8rem;
        margin: 0;
        :hover{
        color:#202020;
        font-weight:400;
        cursor:default;
    }
    }
    .cargo{
       color: rgba(0, 0, 0, 0.35);
       :hover{
        color:#202020;
        font-weight:200;
        cursor:default;
    }
    }
}

`