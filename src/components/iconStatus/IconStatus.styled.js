import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: ${({ lV }) => lV};
  top: ${({ tV }) => tV};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${({isActive, manut, ligado})=>{
    if(isActive){
        return   manut ? "yellow" : ligado ? "green" : "red";
    }else{
        return "grey"
    }
  }};
  /* background-color: ${({ manut, ligado }) => manut ? "yellow" : ligado ? "green" : "red"}; */
  border: solid 4px ${(props) => {
        if (props.isActive) {
            if (props.falha && props.view === 1) {
                return "yellow"
            } else if (props.lessThen100 && props.view === 2) {

                return "blue"
            } else {

                return "transparent"
            }
        }else{
            return "grey"
        }
    }};
  transition:0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    color: ${({ manut }) => manut ? "black" : "white"};
  }

  .compressor {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: absolute;
    font-weight: 700;
    margin-right:1px;

  }

  .notes {
    position: absolute;
    font-weight: 700;
    bottom: 0;
  }
  :hover{
    transform:scale(1.2);
    transition:0.5s;
    cursor:pointer;
  }
`;

