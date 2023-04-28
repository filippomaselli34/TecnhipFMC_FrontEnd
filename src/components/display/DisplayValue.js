import React from 'react'
import { Contanier } from './DisplayValue.styled'

const DisplayValue = ({top,left, value=220,med="V"}) => {
  return (
    <Contanier top={top} left={left} >
        <p>{value +" "+med}</p>
    </Contanier>
  )
}

export default DisplayValue