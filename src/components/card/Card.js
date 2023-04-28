import React, { useEffect, useState } from 'react';
import { handleDate } from '../../constants/handleDate';
import { ContainerCard } from './Card.Styled';

const Card = ({ image, value, name, time ,wImg, isBtn, onClick }) => {
    //component que rece uma imagem de um icone, um valor da tag ,o nome da tag e a ultima vez q foi atualizada
    const [timeStr, setTimeStr] = useState('');
useEffect(()=>{
    setTimeStr(handleDate(time))
},[])

    return (
        <ContainerCard isBtn={isBtn} onClick={onClick} wImg={wImg}>
            <div className='info'>
            {image && <img  width={wImg==="bar"?"42px":wImg==="temp"?"28px":"52px"} src={image} alt={name} />}
            
            <div className='card-info'>
                {value && <p className='value'>{value}</p>}
                {name && <p className='name'>{name}</p>}
                
            </div>
            </div>
            {time && <p className='time'>Última Leitura:  {timeStr}</p> }
        </ContainerCard>
    );
};

export default Card