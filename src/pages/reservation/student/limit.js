import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../App';
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";
const StudentLimt = ({ setIsOpen }) => {

    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);
    const [searchDate, setSearchDate] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
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

    function openModal() {
        return setIsOpen(true);
    }


    return (
        <div>
            <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>จำนวนภาระงาน</h1>
            <Row>
                <Col sm={10}>
                    <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '25%' }}>ค้นหาวันที่ : </label>
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
            <Table
                striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%', marginTop: '20px' }}
            > <thead className='theadAdmin'>
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
                        <th>X-RAY</th>
                        <th>OM</th>
                        <th>ORTHO</th>
                    </tr>
                </thead>
                {limit.map(item => {
                    return <tbody style={{ color: 'black' }}>
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
                        </tr>
                    </tbody>

                })}

            </Table>
        </div >
    )
}
export default StudentLimt;