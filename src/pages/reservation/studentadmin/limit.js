import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import FormInput from './updateForm';
import * as XLSX from "xlsx";
import ConfirmLimit from './confirmModal/modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Limit = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);
    const [editingIndex, setEditingIndex] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])
    useEffect(() => {
        console.log("Excell File :", items)
    }, [items])

    const getDetails = () => {
        // http://selab.mfu.ac.th:8318/limitcase/find/all
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
    }

    function deleteLimitCase(id) {
        // let letmitid = { limit_id: id }
        console.log("Delete ID :", id)
        // axios.delete("http://localhost:3000/limitcase/delete/" + id);
        // return history.push('/StudentAdminDashboard')
        const confirmBox = window.confirm("ต้องการลบการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            alert("ลบการจำกัดงานสำเร็จ")
            axios.delete("http://localhost:3000/limitcase/delete/" + id);
            return history.push('/StudentAdminDashboard')
        } else {
            alert("โปรตรวจสอบข้อมูลอีกครั้ง")
            console.log(confirmBox)
        }
    }

    function changeStatus(ID) {
        setEditingIndex([...editingIndex, ID])
    }

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
        });
    }



    return (
        <div>
            <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>จำนวนภาระงาน</h1>

            <Row>
                <Col>
                    <Button>จำกัดภาระงาน</Button>
                </Col>
                <Col>
                    <label>Excel</label> <input style={{ marginLeft: '78%', marginBottom: '10px' }} type="file" onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }} />
                </Col>
            </Row>



            <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}>
                <thead className='theadAdmin'>
                    <tr style={{ fontSize: '16px' }}>
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
                        <th>แก้ไขรายละเอียด</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                {limit.map(item => {
                    return editingIndex.includes(item.limit_id) ? (
                        <FormInput item={item}
                            editingIndex={editingIndex}
                            setEditingIndex={setEditingIndex}
                        />) : (<tbody key={item.limit_id}>
                            <tr>
                                <td className='tdStudent'>{item.date}</td>
                                <td className='tdStudent'>{item.time}</td>
                                <td className='tdStudent'>{item.od}</td>
                                <td className='tdStudent'>{item.tmd}</td>
                                <td className='tdStudent'>{item.oper}</td>
                                <td className='tdStudent'>{item.perio}</td>
                                <td className='tdStudent'>{item.sur}</td>
                                <td className='tdStudent'>{item.prosth}</td>
                                <td className='tdStudent'>{item.endo}</td>
                                <td className='tdStudent'>{item.xray}</td>
                                <td className='tdStudent'>{item.om}</td>
                                <td className='tdStudent'>{item.ortho}</td>
                                <td className='tdStudent'><Button onClick={() => changeStatus(item.limit_id)}>แก้ไข</Button></td>
                                <td className='tdStudent'><Button onClick={() => deleteLimitCase(item.limit_id)} style={{ backgroundColor: 'red' }}>ลบ</Button></td>
                            </tr>
                        </tbody>)
                })}
            </Table>
            {items.length != 0 ? (<div>
                <h1>มาแล้ว</h1>
                <ConfirmLimit excel={items} /></div>) : (console.log("ยัง"))}
        </div >
    )
}
export default Limit;