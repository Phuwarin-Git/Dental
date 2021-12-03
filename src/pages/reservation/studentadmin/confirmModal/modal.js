import React, { useEffect, useContext, } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import Card from 'react-bootstrap/Card'
import StyleModal from "./LimitCss";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import axios from "axios";
import './modalCss.css'
import { AuthContext } from '../../../../App';

const ConfirmLimit = ({ excel, setLimit, CloseReser, details }) => {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const { currentDate, currentMonth } = useContext(AuthContext);
    let history = useHistory();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
    }, [modalIsOpen])

    async function createLimit() {
        const findCaseReserved = details.filter((item) => {

            return (item.date === excel.วันที่ && item.time === excel.เวลา)
        })
        console.log("findCase duplicate :", findCaseReserved)

        if (findCaseReserved.length !== 0) {
            return alert("ไม่สามารถกำหนดภาระงานในช่วงเวลาเดียวกันได้")
        } else {
            const confirmBox = window.confirm("ต้องการยืนยันการจำกัดงานหรือไม่")
            if (confirmBox == true) {
                console.log(confirmBox)
                console.log("excel :", excel)
                for (let i = 0; i < excel.length; i++) {
                    let a = [{
                        date: excel[i].วันที่,
                        time: excel[i].เวลา,
                        od: excel[i].OD,
                        tmd: excel[i].TMD,
                        oper: excel[i].OPER,
                        perio: excel[i].PERIO,
                        sur: excel[i].SUR,
                        prosth: excel[i].RPOSTH,
                        endo: excel[i].ENDO,
                        pedo: excel[i].PEDO,
                        xray: excel[i].XRAY,
                        om: excel[i].OM,
                        ortho: excel[i].ORTHO,
                        odyOd: 0,
                        odyTmd: 0,
                        odyOper: 0,
                        odyPerio: 0,
                        odySur: 0,
                        odyProsth: 0,
                        odyEndo: 0,
                        odyPedo: 0,
                        odyXray: 0,
                        odyOm: 0,
                        odyOrtho: 0
                    }]
                    console.log("Check A :", a)
                    await axios.post("http://localhost:3000/limitcase/createMultiTable", a).then((res) => {
                        console.log("Res Limit :", res)
                    })

                }
                await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                    console.log("Limit :", item.data)

                    let findMonth = item.data;
                    let filterMonth = findMonth.filter((item) => {
                        let a = item.date;
                        let thisDate = currentDate.slice(8)
                        let digitRealDate = (a).slice(8)
                        // console.log("วันที่ทะไหย่ :", thisDatte)
                        let digitData = (a).slice(5, 7)
                        let parsed = parseInt(digitData)
                        return (parsed >= currentMonth && digitRealDate >= thisDate)
                    })
                    // && digitRealDate=>
                    return setLimit(filterMonth);
                });
                CloseReser(false);
                closeModal();
                return history.push('/StudentAdminDashboard')
            } else {
                console.log(confirmBox)
            }
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
                                        <th>PROSTH</th>
                                        <th>ENDO</th>
                                        <th>PEDO</th>
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
                                            <td className='tdStudent'>{item.PEDO}</td>
                                            <td className='tdStudent'>{item.XRAY}</td>
                                            <td className='tdStudent'>{item.OM}</td>
                                            <td className='tdStudent'>{item.ORTHO}</td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                            <center>
                                <Button onClick={() => createLimit()}>ยืนยัน</Button>
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
