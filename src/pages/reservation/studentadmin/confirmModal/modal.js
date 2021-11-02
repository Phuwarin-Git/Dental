import React, { useState, useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";
import StyleModal from "./LimitCss";
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import axios from "axios";
import './modalCss.css'

const ConfirmLimit = ({ excel }) => {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const history = useHistory();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
    }, [modalIsOpen])

    function createLimit(date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho) {
        console.log("Limit :", date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho);
        const ApiSet = ({ date: date, time: time, od: od, tmd: tmd, oper: oper, perio: perio, sur: sur, prosth: prosth, endo: endo, xray: xray, om: om, ortho: ortho })
        const confirmBox = window.confirm("ต้องการยืนยันการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            alert("การจำกัดงานสำเร็จ")
            return axios.post("http://localhost:3000/limitcase/create", ApiSet).then((res) => {
                console.log("Res Limit :", res)
                return history.push('/StudentAdminDashboard')
            })
        } else {
            alert("โปรตรวจสอบข้อมูลอีกครั้ง")
            console.log(confirmBox)
        }

    }

    return (
        <div>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >

                <div>
                    <Card border="dark">

                        <Card.Header><h2>รายละเอียด</h2>
                            <CloseButton style={{ marginLeft: '85%', marginTop: '-50px' }} onClick={closeModal} />
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover variant="">
                                <thead className='theadAdmin'>
                                    <tr>
                                        <th>วันที่</th>
                                        <th>เวลา</th>
                                        <th>OD</th>
                                        <th>TMD</th>
                                        <th>OPER</th>
                                        <th>PERIO</th>
                                        <th>SUR</th>
                                        <th>RPOSTH</th>
                                        <th>ENDO</th>
                                        <th>X-RAY</th>
                                        <th>OM</th>
                                        <th>ORTHO</th>
                                    </tr>
                                </thead>
                                {excel.map(item => {
                                    return <tbody key={item.limit_id}>
                                        <tr>
                                            <td className='tdStudent'>{item.วันที่}</td>
                                            <td className='tdStudent'>{item.เวลา}</td>
                                            <td className='tdStudent'>{item.OD}</td>
                                            <td className='tdStudent'>{item.TMD}</td>
                                            <td className='tdStudent'>{item.OPER}</td>
                                            <td className='tdStudent'>{item.PERIO}</td>
                                            <td className='tdStudent'>{item.SUR}</td>
                                            <td className='tdStudent'>{item.RPOSTH}</td>
                                            <td className='tdStudent'>{item.ENDO}</td>
                                            <td className='tdStudent'>{item.XRAY}</td>
                                            <td className='tdStudent'>{item.OM}</td>
                                            <td className='tdStudent'>{item.ORTHO}</td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                            <center>
                                <Button onClick={() => createLimit()}>ยืนยัน</Button>
                                <Button style={{ marginLeft: '10px', backgroundColor: 'red' }}>ยกเลิก</Button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
            </StyleModal>
        </div>
    );
};

export default ConfirmLimit;
