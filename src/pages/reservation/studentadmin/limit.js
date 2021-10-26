import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import FormInput from './updateForm';

const Limit = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);
    const [editingIndex, setEditingIndex] = useState([]);


    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

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


    return (
        <div>
            <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>จำนวนภาระงาน</h1>
            <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
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
        </div >
    )
}
export default Limit;