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
    // const [listExcel, setList] = useState([]);
    const history = useHistory();

    // useEffect(() => {
    //     setList(excel)
    // }, [excel])

    // useEffect(() => {
    //     console.log('list :', listExcel)
    // }, [listExcel])


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
    }, [modalIsOpen])

    function createUser() {
        const confirmBox = window.confirm("ต้องการยืนยันการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            alert("การจำกัดงานสำเร็จ")
            console.log("excel :", excel)
            for (let i = 0; i < excel.length; i++) {
                let a = [{
                    // date: listExcel[i].วันที่,
                    id: excel[i].ลำดับ,
                    student_id: excel[i].ID,
                    first_name: excel[i].ชื่อ-สกุล,
                    student_year: excel[i].ชั้นปี,
                    email: excel[i].E-mail,
                    role: excel[i].ตำแหน่ง,
                    
                }]
                console.log("Check A :", a)
                axios.post("http://localhost:3000/limitcase/createMultiTable", a).then((res) => {
                    console.log("Res Limit :", res)
                })
            }
            return history.push('/StudentAdminDashboard')
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
                                        <th>ลำดับ</th>
                                        <th>ID</th>
                                        <th>ชื่อ-สกุล</th>
                                        <th>ชั้นปี</th>
                                        <th>E-mail</th>
                                        <th>ตำแหน่ง</th>
                                    </tr>
                                </thead>
                                {excel.map(item => {
                                    return <tbody key={item.limit_id}>
                                        <tr>
                                            <td className='tdStudent'>{item.id}</td>
                                            <td className='tdStudent'>{item.student_id}</td>
                                            <td className='tdStudent'>{item.first_name}</td>
                                            <td className='tdStudent'>{item.student_year}</td>
                                            <td className='tdStudent'>{item.email}</td>
                                            <td className='tdStudent'>{item.role}</td>
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

export default ConfirmLimit;
