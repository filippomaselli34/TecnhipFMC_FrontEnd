//transforma o timestamp em  dd/mm/aa, hh:mm:ss AM/PM


export const handleDate = (dateValue) =>{
    // dateValue=1680120431560
    const date = new Date(dateValue);
    // const date = dateValue
  if (date.getTime() === NaN) {
    throw new Error('Valor de data inválido');
  }
  if (date.getHours() < 0 || date.getHours() > 23 || date.getMinutes() < 0 || date.getMinutes() > 59 || date.getSeconds() < 0 || date.getSeconds() > 59) {
    throw new Error('Valor de tempo inválido');
  }

    const options = { 
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
    return formattedDate
}