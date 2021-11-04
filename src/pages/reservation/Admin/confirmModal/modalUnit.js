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

    function createUnit() {
        const confirmBox = window.confirm("ต้องการยืนยันการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            alert("การจำกัดงานสำเร็จ")
            console.log("excel :", excel)
            for (let i = 0; i < excel.length; i++) {
                let a = [{
                    // date: listExcel[i].วันที่,
                    unit_id: excel[i].ลำดับ,
                    unit_code: excel[i].Name,
                    unit_floor: excel[i].ชั้น,
                    unit_type: excel[i].ประเภท,
                    unavailable_start_date: excel[i].วันเริ่มต้นการปิดใช้งาน,
                    unavailable_end_date: excel[i].วันสิ้นสุดการปิดใช้งาน,
                   
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
                                        <th>Name</th>
                                        <th>ชั้น</th>
                                        <th>ประเภท</th>
                                        <th>วันเริ่มต้นการปิดใช้งาน</th>
                                        <th>วันสิ้นสุดการปิดใช้งาน</th>
                                     
                                    </tr>
                                </thead>
                                {excel.map(item => {
                                    return <tbody key={item.limit_id}>
                                        <tr>
                                            <td className='tdStudent'>{item.unit_id}</td>
                                            <td className='tdStudent'>{item.unit_code}</td>
                                            <td className='tdStudent'>{item.unit_floor}</td>
                                            <td className='tdStudent'>{item.unit_type}</td>
                                            <td className='tdStudent'>{item.unavailable_start_date}</td>
                                            <td className='tdStudent'>{item.unavailable_end_date}</td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                            <center>
                                <Button onClick={() => createUnit()}>ยืนยัน</Button>
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
