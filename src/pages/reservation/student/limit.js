import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
const StudentLimt = () => {

    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
    }


    return (
        <div>
            <Table striped bordered hover variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto', color: 'pink', maxWidth: '97%' }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
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
                {limit.map(item => {
                    return <tbody >
                        <tr>
                            <td style={{ color: 'white' }}>{item.date}</td>
                            <td style={{ color: 'white' }}>{item.time}</td>
                            <td style={{ color: 'white' }}>{item.od}</td>
                            <td style={{ color: 'white' }}>{item.tmd}</td>
                            <td style={{ color: 'white' }}>{item.oper}</td>
                            <td style={{ color: 'white' }}>{item.perio}</td>
                            <td style={{ color: 'white' }}>{item.sur}</td>
                            <td style={{ color: 'white' }}>{item.prosth}</td>
                            <td style={{ color: 'white' }}>{item.endo}</td>
                            <td style={{ color: 'white' }}>{item.xray}</td>
                            <td style={{ color: 'white' }}>{item.om}</td>
                            <td style={{ color: 'white' }}>{item.ortho}</td>
                        </tr>
                    </tbody>

                })}

            </Table>
        </div >
    )
}
export default StudentLimt;