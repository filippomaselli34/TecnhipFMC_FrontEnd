import React, { useEffect, useState } from 'react'
import { Contanier } from './DisplayValue.styled'

const DisplayETE = ({
     top, 
     left, 
     name = "Tensão Fase A", 
     value = 220, 
     type = "m3", 
     color}) => {
    const [colorInside, setColorInside] = useState("#2F5496")
    const [text,setText]=useState("Loading..")

    useEffect(()=>{
        handleType()
    },[])

    const handleType = () => {
        switch (type) {
            case 'nivel':
                if (value === false) {
                    setColorInside("red")
                    setText("Nível Baixo")
                } else {
                    setColorInside("green")
                    setText("Nível OK")
                }
                break;
            case 'lig/des':
                if (value === false) {
                    setColorInside("green")
                    setText("Desligado")
                } else {
                    setColorInside("red")
                    setText("Ligado")
                }
                break;
            case 'aberta/fechada':
                if (value === false) {
                    setColorInside("green")
                    setText("Fechada")
                } else {
                    setColorInside("red")
                   setText("Aberta")
                }
                break;
        
            default:
                break;
        }


    }




    return (
        <Contanier top={top} left={left} colorInside={colorInside} color={color} type={type}>
            <p className='name-p'>{name}</p>
            {type === 'm³' ?
                <div className='display-wrapper'>
                    <p className='value-p'>{value.toFixed(2)}</p>
                    <p className='eng-p'>{type}</p>

                </div> :
                <div className='display-wrapper'>
                    <p className='value-p-text'>{text}</p>
                </div>}
        </Contanier>
    )
}

export default DisplayETE