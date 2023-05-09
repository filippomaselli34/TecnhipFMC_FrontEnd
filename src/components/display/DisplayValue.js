import React from 'react'
import { Contanier } from './DisplayValue.styled'

const DisplayValue = ({top,left, name, value,eng}) => {
  return (
    <Contanier top={top} left={left} >
           <p>{name}</p>
    <div className='display-wrapper'>
        <p className='value-p'>{typeof value==="number" && value.toFixed(2)}</p>
        <p className='eng-p'>{eng}</p>

    </div>
    </Contanier>
  )
}

export default DisplayValue