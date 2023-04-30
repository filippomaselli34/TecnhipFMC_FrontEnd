import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"
import { createArrMock } from "../equipmentInField/fooArr"

export const handleRequitisionTensaoEletrica = () => {
    return [
        createArrMock("Tensão Fase A", 150, 200, 250),
        createArrMock("Tensão Fase B", 150, 200, 250),
        createArrMock("Tensão Fase C", 150, 200, 250),
        createArrMock("Tensão Fase AB", 150, 200, 250),
        createArrMock("Tensão Fase BC", 150, 200, 250),
        createArrMock("Tensão Fase CA", 150, 200, 250)
    ]
}
export const handleRequitisionCorrenteEletrica = () => {
    return [
        createArrMock("Corrente Fase A", 150, 200, 250),
        createArrMock("Corrente Fase B", 150, 200, 250),
        createArrMock("Corrente Fase C", 150, 200, 250)
    ]
}

export const handleRequitisionPotenciaEletrica = () => {
    return [
        createArrMock("Potência Ativa Total", 150, 200, 250),
        createArrMock("Potência Ativa Fase A", 150, 200, 250),
        createArrMock("Potência Ativa Fase B", 150, 200, 250),
        createArrMock("Potência Ativa Fase C", 150, 200, 250),
        createArrMock("Energia Ativa Total Liquida", 150, 200, 250),
        createArrMock("Energia Ativa Total Bruta", 150, 200, 250)
    ]
}

export const handleRequitisionFrequencia = () => {
    return [
        createArrMock("Frequência", 150, 200, 250)

    ]
}

export const handleRequitisionFatorDePotencia = () => {
    return [
        createArrMock("Fator de Potência", 150, 200, 250)

    ]
}

export const handleRequisitionHarmonica = async (trafo) => {
    const newReq ={
        trafo,
        type:"Harmônica"
    }
try {
    const result = await axios.post(BASE_URL+"equipment",newReq)
    return result.data
} catch (error) {
    console.log(error)
}

}
