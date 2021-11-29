import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import FormInput from './updateForm';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";

const Limit = ({ setIsOpen }) => {
    const { user, limit, setLimit } = useContext(AuthContext);
    const [searchDate, setSearchDate] = useState([]);
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

    async function deleteLimitCase(id) {
        console.log("Delete ID :", id)
        const confirmBox = window.confirm("ต้องการลบการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            await axios.delete("http://localhost:3000/limitcase/delete/" + id);
            return axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setLimit(item.data);
            });
        } else {
            console.log(confirmBox)
        }
    }

    function changeStatus(ID) {
        setEditingIndex([...editingIndex, ID])
    }

    function openModal() {
        return setIsOpen(true);
    }

    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setLimit(item.data);
        });
        console.log("Change Date :", e.target.value)
        setSearchDate(e.target.value)
    }

    function Searching() {
        console.log("Searching :", searchDate)
        const checking = limit.filter((item) => {
            return item.date === searchDate
        })
        console.log("Filter Date", checking)
        setLimit(checking)
    }



    return (
        <div >
            <Row>
                <Col sm={10}>
                    <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '20px' }}>ค้นหาวันที่ : </label>

                    <input
                        style={{ fontSize: '18px' }}
                        type="date"
                        class="searchTerm"
                        id="input_text"
                        placeholder="ค้นหาวันที่"
                        onChange={onChangeSearch}
                    >
                    </input>
                    <button onClick={() => Searching()} type="submit" class="searchButton">
                        <BsSearch />
                    </button></Col>
                <Col sm={2}>
                    <Button onClick={() => openModal()} style={{ backgroundColor: '#198CFF', fontWeight: 'bold', marginLeft: '-30px', marginBottom: '-38px' }}>จำกัดภาระงาน</Button>
                </Col>
            </Row>


            <Table striped bordered hover variant="" style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}>
                <thead className='theadAdmin'>
                    <tr style={{ fontSize: '18px' }}>
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
                        <th>แก้ไขรายละเอียด</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                {limit.map(item => {
                    return editingIndex.includes(item.limit_id) ? (
                        <FormInput item={item}
                            editingIndex={editingIndex}
                            setEditingIndex={setEditingIndex}
                            getDetails={getDetails()}
                        />) : (<tbody key={item.limit_id}>
                            {console.log("-----rerender----")}
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
                                <td className='tdStudent'>{item.pedo}</td>
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