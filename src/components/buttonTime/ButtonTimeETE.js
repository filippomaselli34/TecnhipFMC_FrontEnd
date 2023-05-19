import React, { useContext } from 'react'
import { getTimeInMilliseconds } from '../../constants/getTimeInMilliseconds';
import { handleDataNowCalendar } from '../../constants/handleDate';
import { RequisitionContext } from '../../context/RequisitionContext';
import { RadioGroup } from './ButtonTime.styled';

const ButtonTimeETE = ({setSelectedTime , handleRequisition ,tl=true}) => {

  const {setDataInicial,setDataFinal} = useContext(RequisitionContext)


    const handleOnChange = (e) => {
      setDataInicial(new Date(new Date().getTime()-getTimeInMilliseconds(e.target.id)))
      // setDataInicial(handleDataNowCalendar(new Date().getTime()-getTimeInMilliseconds(e.target.id)))
        setSelectedTime(e.target.id);
        setDataFinal(new Date(new Date().getTime()))
        handleRequisition(new Date(new Date().getTime()-getTimeInMilliseconds(e.target.id)),new Date())
      };

    const timeLineRadios = [
        { label: "15m", id: "15m" },
        { label: "30m", id: "30m" },
        { label: "1H", id: "1H" },
        { label: "6H", id: "6H" },
        { label: "12H", id: "12H" },
        { label: "1D", id: "1D" },
        { label: "7D", id: "7D" }
      ];

  return (
    <RadioGroup onChange={handleOnChange} tl={tl}>
    <div className="btn-group" id="btn-chart" role="group" aria-label="Basic outlined example">
      {timeLineRadios.map((radio) => (
        <div className="group-check" key={radio.id}>
          <input type="radio" className="btn-check" name="btnradio" id={radio.id} />
          <label className="btn new-btn" htmlFor={radio.id}>
            {radio.label}
          </label>
          </div>
        )
      )}
    </div>
  </RadioGroup>
  )
}

export default ButtonTimeETE