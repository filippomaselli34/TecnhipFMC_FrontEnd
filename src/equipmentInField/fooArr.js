export const createArrMock = (type, qty=150, min=200,max=225) =>{

    const newArr = []
    let newDate = new Date().getTime() - 5*60*1000 - 3*60*60*1000

    for(let i = 0; i<qty; i++){
        let number;
        if (i == 0) {
            number = Math.random() * (max - min) + min;
          } else {
            let previousNumber = newArr[i - 1][1];
            let variation = Math.random() * 10 - 5;
            number = parseFloat((previousNumber + variation).toFixed(1));
            number = Math.max(min, Math.min(max, number));
          }
        newArr.push([newDate,number]) 
        newDate+=2000       
    }


    const newData = {
        name:type,
        data:newArr
    }
    return newData

}