import styled from "styled-components";

export const ContainerDoc = styled.div`
display:flex;
flex-direction:column;
margin:20px 20px;
background-color:white;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
padding:4px;
border-radius:8px;
.header{
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:4px;
  
    .title{
    }
    .select-doc{
        margin-right:auto;
        margin-bottom:4px;
        button{
            margin-left:16px;
        }
        select{
            border:none;
            padding:2px;
            width:500px;
        }
    }

}
.doc-view{
width:100%;
height:940px;
margin-right:20px;
}
`