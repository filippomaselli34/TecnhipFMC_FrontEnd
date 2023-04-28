import styled from "styled-components";

export const ContainerModal = styled.div`
display:flex;
justify-content:center;
align-items:center;

`

export const Modal = styled.div`
display:${({ isOpen }) => isOpen ? "flex" : "none"};
position: fixed;
left:0;
top:0;
height:100%;
width:100%;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.25);
z-index:200;


.modal-content{
    width:1200px;
    height:486px;
    display:flex;
    flex-direction:row;
    /* border:1px black solid; */
    border-radius:16px;
    background-color: #F9FAFD;
    .revison-info{
        width:70%;
        padding:0;
        margin:16px;
        margin-right:8px;
        
        /* background-color:white; */
        border-radius:4px;
        /* border:1px grey solid; */
        display:flex;
        flex-direction:column;
        align-items:center;
            h1{
                font-size:24px;
            }
            h2{
                font-size:20px;
            }
            .revision-panel{
                display:flex;
                padding:16px;
                border-radius:8px;
                flex-direction:column;
                background-color:white;
                box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.25);
                width:100%;
                align-items:center;
            }
            .rev-config{
                display:flex;
                flex-direction:column;

                /* background-color:green; */
                label{
                    font-size:12px;
                    margin:0;
                }
                input{
                    border: 1px grey solid;
                    padding:2px;
                    padding-left:6px;
                    appearance:none;
                }
                input[type=number]::-webkit-inner-spin-button,
                input[type=number]::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                .btn-style{
                    height:30px;
                    font-weight:200;
                    padding: 0 4px;
                }

            }
            .cmd{
                /* background-color:red; */
                width:100%;
                background-color:white;

                padding:12px;
                justify-content:center;
                align-items:center;
                margin-top:24px;
                border-radius:8px;
                box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.25);

                h2{
                    margin-bottom:8px;
                    text-align:center;
                }

                .btn-group-cmd{
                    display:flex;
                    justify-content:space-evenly;
                    .btn{
                        width:120px;
                    }
                }

            }

        
    }
    
    .notes{
        position:relative;
        width:100%;
        margin:16px;
        margin-left:8px;
        background-color:white;
        border-radius:4px;
        /* border:1px grey solid; */
        display:flex;
        flex-direction:column;
        align-items:center;
        .header-notes{
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            width:100%;
            text-align:center;
            h1{
                font-size:24px;
                margin:auto;
                margin-left:274px;
            }
            button{
               margin-left:auto;
               margin-right:32px;
               margin-top:16px;
            }
        
        }
        .textarea-notes{
            width:96%;
            height:100%;
            border-radius:8px;
            margin:16px;
            padding:8px;
            resize:none;
        
        }
        .close-icon{
            position:absolute;
            right:-12px;
            top:-12px;
            height:32px;
            cursor: pointer;
            /* filter:invert(1) */

            :hover{
                filter:invert(0.8);
                transition:0.4s ease-in;
            }
       
        }

    }

}
`