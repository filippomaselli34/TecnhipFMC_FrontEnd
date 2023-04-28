import React, { useContext, useState } from 'react'
// import Modal from 'react-modal'
import { ContainerModal, Modal } from './RevisionModal.styled'
import closeIcon from "../../assets/icons/close_icon.svg"
import { BASE_URL } from '../../constants/BASE_URL'
import { GlobalContext } from '../../context/GlobalContext'
import { RequisitionContext } from '../../context/RequisitionContext'

// ReactModal.setAppElement('.overview')

const RevisionModal = (props) => {
    const {
        modalIsOpen,
        handleModalClose,
    } = props

    const {autho} = useContext(GlobalContext)
    const {equipment,setScreenFlow} = useContext(RequisitionContext)


    const [manutBtn, setManutBtn] = useState()
    const [notesText, setNoteText] = useState(equipment.equipment.notes)
    const [isLoading, setIsloading] = useState(false)
    const [power, setPower] = useState()
    const [revisao2, setRevisao2] = useState(equipment.equipment.revision_2k)
    const [revisao4, setRevisao4] = useState(equipment.equipment.revision_4k)
    const [revisao8, setRevisao8] = useState(equipment.equipment.revision_8k)


    const reqToEditEquip = async (change) => {
        // setIsloading(true);
        // const newReq = {
        //     area: equipment.area,
        //     name: equipment.name,
        //     ...change
        // }
        // try {
        //     const response = await fetch(BASE_URL + ":3003/equipment", {
        //         method: "PUT",
        //         body: JSON.stringify(newReq),
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMSIsIm5hbWUiOiJGaWxpcHBvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjgxNzYzNzAwLCJleHAiOjE2ODE4NTAxMDB9.Cuj-vpBXlzkTcxF0NmGD7PFg8POFSRiYRgVy2AHHw0E"
        //         }
        //     });
        //     setIsloading(false)
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     setIsloading(false);
        // }
    }


    const handleRevisao2Save = (e) => {
        const boo = window.confirm('Você tem certeza que deseja RESETAR o contador da Revisão de 2000h?')
        if (boo) {
            if (revisao2 === equipment.revision_2k) {
                setRevisao2(revisao2 + 2000)
                reqToEditEquip({ revisao2: Number(revisao2 + 2000) })
            } else {
                reqToEditEquip({ revisao2: Number(revisao2) })

            }
        }

    }
    const handleRevisao4Save = (e) => {
        const boo = window.confirm('Você tem certeza que deseja RESETAR o contador da Revisão de 4000h?')
        if (boo) {
            if (revisao4 === equipment.revision_4k) {
                setRevisao4(revisao4 + 4000)
                reqToEditEquip({ revisao4: revisao4 + 4000 })
            } else {
                reqToEditEquip({ revisao4: revisao4 })

            }
        }
    }
    const handleRevisao8Save = (e) => {
        const boo = window.confirm('Você tem certeza que deseja RESETAR o contador da Revisão de 8000h?')
        if (boo) {
            if (revisao8 === equipment.revision_8k) {
                setRevisao8(revisao8 + 8000)
                reqToEditEquip({ revisao8: revisao8 + 8000 })
            } else {
                reqToEditEquip({ revisao8: revisao8 })

            }
        }
    }
    const powerOff = () => {
        if (power) {
            const boo = window.confirm("Você tem certeza que deseja DESLIGAR o Compressor?")
            if (boo) {
                setPower(false)
            }
        } else {
            window.alert("Compressor já esta desligado")
        }
        //3meses e 6mesee

    }
    const powerOn = () => {
        if (!power) {
            const boo = window.confirm("Você tem certeza que deseja LIGAR o Compressor?")
            if (boo) {
                setPower(true)
            }
        } else {
            window.alert("Compressor já esta ligado")
        }
    }
    const manutIsAble = () => {
        if (!manutBtn) {
            const boo = window.confirm("Você tem certeza que deseja Habilitar o Status de Manutenção do Compressor?")
            if (power) {
                window.alert("è necessario desligar o compressor para que você possa coloca-lo em manutenção")
            } else {

                if (boo) {
                    setManutBtn(true)
                }
            }
        } else {
            window.alert("Compressor já esta em manutenção")
        }
    }
    const manutIsDisable = () => {
        if (manutBtn) {
            const boo = window.confirm("Você tem certeza que deseja Desabilitar o Status de Manutenção do Compressor?")
            if (boo) {
                setManutBtn(false)
            }
        } else {
            window.alert("Compressor não esta em manutenção")
        }
    }
    const handleSaveText = () => {
        const boo = window.confirm("Você tem certeza que deseja Atualizar as Anotações?")
        if (boo) {
            reqToEditEquip({ notes: notesText })
        }

    }



    return (
        <ContainerModal>
            {/* <button onClick={handleModalOpen}>modal open</button> */}
            <Modal
                isOpen={true}
            // onRequestClose={handleModalClose}
            // contentLabel="Modal Revision"
            // overlayClassName="modal-overlay-class"
            // className="modal-revision"
            >
                <div className='modal-content'>
                    <div className='revison-info'>
                        <div className='revision-panel'>
                            <h1>Configurações das Revisões</h1>
                            <div className='rev-config'>
                                <label>Revisão 2000h</label>
                                <div className='input-reset'>
                                    <input type="number" placeholder='valor' value={revisao2} onChange={(e) => {
                                        if (autho > 1) {
                                            setRevisao2(e.target.value)
                                        }
                                    }} />
                                    <button className='btn-dark btn-style' onClick={handleRevisao2Save}>Salvar</button>
                                </div>
                            </div>
                            <div className='rev-config'>
                                <label>Revisão 4000h</label>
                                <div className='input-reset'>
                                    <input type="number" placeholder='valor' value={revisao4} onChange={(e) => {
                                        if (autho > 1) {
                                            setRevisao4(e.target.value)
                                        }
                                    }} />
                                    <button className='btn-dark btn-style' onClick={handleRevisao4Save}>Salvar</button>
                                </div>
                            </div>
                            <div className='rev-config'>
                                <label>Revisão 8000h</label>
                                <div className='input-reset'>
                                    <input type="number" placeholder='valor' value={revisao8} onChange={(e) => {
                                        if (autho > 1) {
                                            setRevisao8(e.target.value)
                                        }
                                    }} />
                                    <button className='btn-dark btn-style' onClick={handleRevisao8Save} >Salvar</button>
                                </div>
                            </div>
                        </div>
                        <div className='cmd remot'>

                            <h2>Comando Remoto</h2>
                            <div className='btn-group-cmd'>
                                <button className='btn btn-primary' onClick={powerOn}>Ligar</button>
                                <button className='btn btn-primary' onClick={powerOff}>Desligar</button>
                            </div>
                        </div>

                        <div className='cmd manut'>
                            <h2>Comando Manutenção</h2>
                            <div className='btn-group-cmd'>
                                <button className='btn btn-primary' onClick={manutIsAble}>Habilitar</button>
                                <button className='btn btn-primary' onClick={manutIsDisable}>Desabilitar</button>
                            </div>
                        </div>
                    </div>

                    <div className='notes'>
                        <div className='header-notes'>
                            <h1>Anotações</h1>
                            <button className='btn btn-primary' onClick={handleSaveText}>Salvar</button>
                        </div>
                        <textarea value={notesText} onChange={(e) => setNoteText(e.target.value)} className='textarea-notes'></textarea>
                        <img className='close-icon' onClick={()=>setScreenFlow("Overview")} src={closeIcon} />
                    </div>
                </div>
            </Modal >

        </ContainerModal >
    )
}

export default RevisionModal