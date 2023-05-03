import styled from "styled-components";

export const Container = styled.div`
position:relative;
margin:20px 0 20px 20px;
background-color:white;
min-height: calc(100vh - 100px);
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius:8px;
/* overflow:hidden; */
     .img-bg{
        margin:8px;
        width:calc(100% - 16px);
    height:100%
     }

     .teste{
          position:absolute;
          top:50px;
          left:50px;
          button{
               width:200px;
               background-color:cyan;
               margin:16px;
          }
          .response{
               width:500px;
               background-color:white;
               min-height:100px;
               overflow-wrap:word-wrap;
               p{
                    margin-left:16px;
               }
          }
     }

     .btn{
          position:absolute;
          right:16px;
          top:16px;
          background-color:#475793;
     }


`
