import React, { useEffect, useState } from 'react'
import { Contanier } from './DisplayValue.styled'

const DisplayETE = ({
     top, 
     left, 
     name, 
     value , 
     type , 
     color}) => {
    const [colorInside, setColorInside] = useState("#2F5496")
    const [text,setText]=useState("Loading..")

    useEffect(()=>{
        handleType()
    },[value])

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



console.log(value,name)
    return (
        <Contanier top={top} left={left} colorInside={colorInside} color={color} type={type}>
            <p className='name-p'>{name}</p>
            {type === 'm³' ?
                <div className='display-wrapper'>
                    <p className='value-p'>{typeof value ==="number" && value.toFixed(2)}</p>
                    <p className='eng-p'>{type}</p>

                </div> :
                <div className='display-wrapper'>
                    <p className='value-p-text'>{!name.includes("Bomba")?text:text.replace("o","a")}</p>
                </div>}
        </Contanier>
    )
}

export default DisplayETE