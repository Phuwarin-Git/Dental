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

const ModalUser = ({ excel, setUser }) => {
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

    async function createUser() {
        const confirmBox = window.confirm("ต้องการยืนยันการเพิ่มรายชื่อผู้ใช้งานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            console.log("excel :", excel)
            for (let i = 0; i < excel.length; i++) {
                let a = [{
                    // date: listExcel[i].วันที่,
                    student_id: excel[i].ID,
                    first_name: excel[i].ชื่อสกุล,
                    student_year: excel[i].ชั้นปี,
                    email: excel[i].Email,
                    role: excel[i].ตำแหน่ง,

                }]
                console.log("Check A :", a)
                await axios.post("http://localhost:3000/name/createMultiTable", a).then((res) => {
                    console.log("Res Limit :", res)
                })
            }
            await axios.get("http://localhost:3000/name/find/all").then((item) => {
                console.log("Name :", item.data)
                setUser(item.data);
            });
            return closeModal();
        } else {
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
                                        <th>ID</th>
                                        <th>ชื่อ-สกุล</th>
                                        <th>ชั้นปี</th>
                                        <th>E-mail</th>
                                        <th>ตำแหน่ง</th>
                                    </tr>
                                </thead>
                                {excel.map(item => {
                                    return <tbody key={item.ลำดับ}>
                                        <tr>
                                            <td className='tdStudent'>{item.ID}</td>
                                            <td className='tdStudent'>{item.ชื่อสกุล}</td>
                                            <td className='tdStudent'>{item.ชั้นปี}</td>
                                            <td className='tdStudent'>{item.Email}</td>
                                            <td className='tdStudent'>{item.ตำแหน่ง}</td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                            <center>
                                <Button onClick={() => createUser()}>ยืนยัน</Button>
                                <Button onClick={() => closeModal()} style={{ marginLeft: '10px', backgroundColor: 'red' }}>ยกเลิก</Button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
            </StyleModal>
        </div>
    );
};

export default ModalUser;
