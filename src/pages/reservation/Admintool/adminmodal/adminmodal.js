import React, { useContext, useState, useEffect } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import StyleModal from './adminhistory'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

const Adminmodal = ({ unique }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [Tool, setDetials] = useState()
    const [NameState, SetNameState] = useState({})

    useEffect(() => {
        getTool()
    }, [modalIsOpen])

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const getTool = () => {
        axios.get('http://localhost:3000/Tool/find/all').then(item => {
            console.log('data :', item.data)
            return filterToolsDetails(item.data)
        })
    }

    const filterToolsDetails = item => {
        const res = item.filter(item => {
            return item.uniqueID === unique
        })
        console.log('Details Tools ที่มาพร้อมกับชื่อ Object:', res[0])
        // SetNameState(Object.keys(res[0]))
        // const myJSON = JSON.stringify(res, null, 2)

        setDetials(res)
    }

    return (
        <div>
            <Button
                style={{ background: '#1565C0', color: 'white', width: '150px' }}
                onClick={openModal}
            >
                อุปกรณ์
            </Button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='modal'
            >
                <CloseButton onClick={closeModal} />
                <div>
                    <center style={{}}>
                        <br />
                        <h3 style={{ color: '#0047AB', fontWeight: 'bold' }}>
                            เครื่องมือเบิกงาน Endo
                        </h3>
                    </center>
                    <div style={{ overflowY: 'auto', fontSize: 25 }}>
                        <br />
                        <Table
                            striped
                            bordered
                            hover
                            variant=''
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                maxWidth: '97%',
                                marginTop: '20px'
                            }}
                        >
                            <thead className='theadAdmin'>
                                <tr>
                                    <th>อุปกรณ์</th>
                                    <th>อุปกรณ์</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{}}>
                                    <td>
                                        {Tool?.map(item => {
                                            if (item.testkit_toolcc1 != ' ') {
                                                return <p>ชุดตรวจ : {item.testkit_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.glassofwater_toolcc1 != ' ') {
                                                return <p>แก้วนํ้า : {item.glassofwater_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Tripplesyring_toolcc1 != ' ') {
                                                return (
                                                    <p>Tripple syring : {item.Tripplesyring_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.FabricMiddlepunch_toolcc1 != ' ') {
                                                return (
                                                    <p>ผ้าเจาะกลาง : {item.FabricMiddlepunch_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.veil_toolcc1 != ' ') {
                                                return <p>ผ้าคลุม : {item.veil_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.UNC15Probe_toolcc1 != ' ') {
                                                return <p>UNC 15 Probe : {item.UNC15Probe_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.medicinecup_toolcc1 != ' ') {
                                                return <p>ถ้วยนํ้ายา : {item.medicinecup_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Dappendish_toolcc1 != ' ') {
                                                return <p>Dappen dish : {item.Dappendish_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Mouthprop_toolcc1 != ' ') {
                                                return <p>Mouth prop : {item.Mouthprop_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Glasslab_toolcc1 != ' ') {
                                                return <p>Glass lab : {item.Glasslab_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Airotor_toolcc1 != ' ') {
                                                return <p>Airotor : {item.Airotor_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Contra_toolcc1 != ' ') {
                                                return <p>Contra : {item.Contra_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.cottonbud_toolcc1 != ' ') {
                                                return <p>ไม้พันสำลี : {item.cottonbud_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Rubbercup_toolcc1 != ' ') {
                                                return (
                                                    <p>Rubber cup/tip/Brush : {item.Rubbercup_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.AnestheticSyringe_toolcc1 != ' ') {
                                                return (
                                                    <p>Syringe ยาชา : {item.AnestheticSyringe_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.BladeHolder_toolcc1 != ' ') {
                                                return <p>Blade Holder : {item.BladeHolder_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Blade_toolcc1 != ' ') {
                                                return <p>Blade No.... : {item.Blade_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Compositstopperset_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        ชุดอุด Composit : {item.Compositstopperset_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Amalgamfillingset_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        ชุดอุด Amalgam : {item.Amalgamfillingset_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Compositsandingsetslowrewind_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        ชุดขัด Composit กรอช้า :{' '}
                                                        {item.Compositsandingsetslowrewind_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                    </td>
                                    <td>
                                        {Tool?.map(item => {
                                            if (item.Compositsandingsetfastrewinding_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        ชุดขัด Composit กรอเร็ว :{' '}
                                                        {item.Compositsandingsetfastrewinding_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.plasticcomposit_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        plastic composit : {item.plasticcomposit_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Spoonexcavatorlarge_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Spoon excavator ใหญ่ :{' '}
                                                        {item.Spoonexcavatorlarge_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.MatrixV3_toolcc1 != ' ') {
                                                return (
                                                    <p>Matrix V3 Ring ... : {item.MatrixV3_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.MatrixV3Forcep_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Matrix V3 Forcep : {item.MatrixV3Forcep_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Rounddimondbursetslow_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Round dimond bur (กรอช้า) :{' '}
                                                        {item.Rounddimondbursetslow_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Cylinderdimondbursetslow_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Cylinder dimond bur (กรอช้า) :{' '}
                                                        {item.Cylinderdimondbursetslow_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Rounddimondbursetfast_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Round dimond bur (กรอเร็ว) :{' '}
                                                        {item.Rounddimondbursetfast_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Cylinderdimondbursetfast_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Cylinder dimond bur (กรอเร็ว) :{' '}
                                                        {item.Cylinderdimondbursetfast_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Dycalcarrier_toolcc1 != ' ') {
                                                return (
                                                    <p>Dycal carrier : {item.Dycalcarrier_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Spatulaplastic_toolcc1 != ' ') {
                                                return (
                                                    <p>Spatula plastic : {item.Spatulaplastic_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Cementspatula_toolcc1 != ' ') {
                                                return (
                                                    <p>Cement spatula : {item.Cementspatula_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Mendrelscrubset_toolcc1 != ' ') {
                                                return (
                                                    <p>ชุดขัด Mendrel : {item.Mendrelscrubset_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Poponsmall_toolcc1 != ' ') {
                                                return (
                                                    <p>Pop on เล็ก/ใหญ่ : {item.Poponsmall_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Rubberdamset_toolcc1 != ' ') {
                                                return (
                                                    <p>ชุด Rubber dam : {item.Rubberdamset_toolcc1}</p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.clamp_toolcc1 != ' ') {
                                                return <p>clamp No. : {item.clamp_toolcc1}</p>
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Steelheadslowdown_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        หัว Steel กรอช้า : {item.Steelheadslowdown_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.Astropolpolishingset_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        ชุดขัด Astropol :{' '}
                                                        {item.Astropolpolishingset_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.IvoryTofflemirematrix_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        Ivory / Tofflemire matrix :{' '}
                                                        {item.IvoryTofflemirematrix_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                        {Tool?.map(item => {
                                            if (item.hightpowersuction_toolcc1 != ' ') {
                                                return (
                                                    <p>
                                                        hight power suction :{' '}
                                                        {item.hightpowersuction_toolcc1}
                                                    </p>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <br />
                    </div>
                </div>
            </StyleModal>
        </div>
    )
}

export default Adminmodal
