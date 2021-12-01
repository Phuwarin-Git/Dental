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

const ModalUnit = ({ excel, setUnit, openModalPlase }) => {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const [listExcel, setList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setList(excel)
    }, [excel])

    useEffect(() => {
        console.log('list :', listExcel)
    }, [listExcel])


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
    }, [modalIsOpen])

    async function createUnit() {
        openModalPlase(false)
        const confirmBox = window.confirm("ต้องการยืนยันการเพิ่มรายชื่อยูนิตหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            console.log("excel :", excel)
            for (let i = 0; i < excel.length; i++) {
                let a = [{
                    // date: listExcel[i].วันที่,
                    unit_code: excel[i].Name,
                    unit_floor: excel[i].ชั้น,
                    unit_type: excel[i].ประเภท,
                    unavailable_start_date: "active",
                    unavailable_end_date: "non",

                }]
                console.log("Check A :", a)
                await axios.post("http://localhost:3000/unit/createMultiTable", a).then((res) => {
                    console.log("Res Limit :", res)
                })
            }
            await axios.get("http://localhost:3000/unit/find/all").then((item) => {
                console.log("Unit :", item.data)
                return setUnit(item.data);
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
                                        <th>Name</th>
                                        <th>ชั้น</th>
                                        <th>ประเภท</th>

                                    </tr>
                                </thead>
                                {excel.map(item => {
                                    return <tbody key={item.limit_id}>
                                        <tr>
                                            <td className='tdStudent'>{item.Name}</td>
                                            <td className='tdStudent'>{item.ชั้น}</td>
                                            <td className='tdStudent'>{item.ประเภท}</td>
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

export default ModalUnit;
