import React, { useState, useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import StyleModal from "./historyCss";
import { Button } from 'react-bootstrap';
import axios from "axios";
import './modalCss.css'

const HistoryModal = ({ unique, unit, name, year, date, clinic, type, patient, dn, hn }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [tools, setTools] = useState([]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        getTools();
    }, [modalIsOpen])

    const getTools = () => {
        axios.get('http://localhost:3000/Tool/find/all').then((item) => {
            console.log("data :", item.data)
            return filterToolsDetails(item.data);
        });
    }

    const filterToolsDetails = (item) => {
        const res = item.filter((item) => {
            return (item.uniqueID === unique)
        })
        console.log("Details Tools:", res)
        // const myJSON = JSON.stringify(res, null, 2);

        setTools(res);
    }

    return (
        <div>
            <Button style={{ background: '#0080ff', color: 'white' }} onClick={openModal}>
                รายละเอียด
            </Button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >

                <div>
                    <Card border="dark" style={{ width: '400px' }}>

                        <Card.Header><h2 style={{ color: '#0080ff', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>ข้อมูลการจอง</h2>
                            <CloseButton style={{ marginLeft: '85%', marginTop: '-50px' }} onClick={closeModal} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{ color: '#0080ff', textAlign: 'center', fontSize: '25px', marginTop: '-10px' }}>รายละเอียด</Card.Title>
                            <Card.Text>
                                <Container>
                                    <Row>
                                        <Col><p>Date : {date}</p></Col>
                                        <Col><p>Clinic : {clinic}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p>Name : {name}</p> </Col>
                                        <Col><p>Year : {year}</p> </Col>
                                    </Row>
                                    <Row>
                                        <Col><p>Work Type : {type}</p></Col>
                                        <Col><p>Unit : {unit}</p></Col>

                                    </Row>
                                    <Row>
                                        <Col><p>dn : {dn}</p></Col>
                                        <Col><p>hn : {hn}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p>Patient : {patient}</p></Col>
                                    </Row>
                                </Container>
                                <Card.Title style={{ color: '#0080ff', textAlign: 'center', fontSize: '25px' }}>รายการอุปกรณ์</Card.Title>
                                <Container>
                                    <Table
                                        striped
                                        bordered
                                        hover
                                        variant=''
                                        style={{
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            maxWidth: '97%',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <thead className='theadAdmin'>
                                            <tr>
                                                <th style={{ color: '#0080ff', fontWeight: 'normal' }}>อุปกรณ์</th>
                                                <th style={{ color: '#0080ff', fontWeight: 'normal' }}>อุปกรณ์</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{}}>
                                                <td style={{ backgroundColor: 'white' }}>
                                                    {tools?.map(item => {
                                                        if (item.testkit_toolcc1 != ' ') {
                                                            return <p>ชุดตรวจ : {item.testkit_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.glassofwater_toolcc1 != ' ') {
                                                            return <p>แก้วนํ้า : {item.glassofwater_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Tripplesyring_toolcc1 != ' ') {
                                                            return (
                                                                <p>Tripple syring : {item.Tripplesyring_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.FabricMiddlepunch_toolcc1 != ' ') {
                                                            return (
                                                                <p>ผ้าเจาะกลาง : {item.FabricMiddlepunch_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.veil_toolcc1 != ' ') {
                                                            return <p>ผ้าคลุม : {item.veil_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.UNC15Probe_toolcc1 != ' ') {
                                                            return <p>UNC 15 Probe : {item.UNC15Probe_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.medicinecup_toolcc1 != ' ') {
                                                            return <p>ถ้วยนํ้ายา : {item.medicinecup_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Dappendish_toolcc1 != ' ') {
                                                            return <p>Dappen dish : {item.Dappendish_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Mouthprop_toolcc1 != ' ') {
                                                            return <p>Mouth prop : {item.Mouthprop_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Glasslab_toolcc1 != ' ') {
                                                            return <p>Glass lab : {item.Glasslab_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Airotor_toolcc1 != ' ') {
                                                            return <p>Airotor : {item.Airotor_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Contra_toolcc1 != ' ') {
                                                            return <p>Contra : {item.Contra_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.cottonbud_toolcc1 != ' ') {
                                                            return <p>ไม้พันสำลี : {item.cottonbud_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Rubbercup_toolcc1 != ' ') {
                                                            return (
                                                                <p>Rubber cup/tip/Brush : {item.Rubbercup_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.AnestheticSyringe_toolcc1 != ' ') {
                                                            return (
                                                                <p>Syringe ยาชา : {item.AnestheticSyringe_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.BladeHolder_toolcc1 != ' ') {
                                                            return <p>Blade Holder : {item.BladeHolder_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Blade_toolcc1 != ' ') {
                                                            return <p>Blade No.... : {item.Blade_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                <td style={{ backgroundColor: 'white' }}>
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
                                                        if (item.MatrixV3_toolcc1 != ' ') {
                                                            return (
                                                                <p>Matrix V3 Ring ... : {item.MatrixV3_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
                                                        if (item.Dycalcarrier_toolcc1 != ' ') {
                                                            return (
                                                                <p>Dycal carrier : {item.Dycalcarrier_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Spatulaplastic_toolcc1 != ' ') {
                                                            return (
                                                                <p>Spatula plastic : {item.Spatulaplastic_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Cementspatula_toolcc1 != ' ') {
                                                            return (
                                                                <p>Cement spatula : {item.Cementspatula_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Mendrelscrubset_toolcc1 != ' ') {
                                                            return (
                                                                <p>ชุดขัด Mendrel : {item.Mendrelscrubset_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Poponsmall_toolcc1 != ' ') {
                                                            return (
                                                                <p>Pop on เล็ก/ใหญ่ : {item.Poponsmall_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.Rubberdamset_toolcc1 != ' ') {
                                                            return (
                                                                <p>ชุด Rubber dam : {item.Rubberdamset_toolcc1}</p>
                                                            )
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
                                                        if (item.clamp_toolcc1 != ' ') {
                                                            return <p>clamp No. : {item.clamp_toolcc1}</p>
                                                        } else {
                                                            return
                                                        }
                                                    })}
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                                    {tools?.map(item => {
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
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </StyleModal>
        </div>
    );
};

export default HistoryModal;
