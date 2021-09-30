import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
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
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
    }


    return (
        <div>
            <h1 style={{ marginLeft: '-350px' }}>จำนวนภาระงาน</h1>
            <Table
                style={{
                    borderRadius: '10px',
                    marginLeft: '-350px',
                    minWidth: '1000px'
                }}
                striped
                borderless
                hover
                variant="primary"
            > <thead style={{ backgroundColor: '#1f5bcc', color: 'white' }}>
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
                    return <tbody style={{ color: 'black' }}>
                        <tr>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.od}</td>
                            <td>{item.tmd}</td>
                            <td>{item.oper}</td>
                            <td>{item.perio}</td>
                            <td>{item.sur}</td>
                            <td>{item.prosth}</td>
                            <td>{item.endo}</td>
                            <td>{item.xray}</td>
                            <td>{item.om}</td>
                            <td>{item.ortho}</td>
                        </tr>
                    </tbody>

                })}

            </Table>
        </div >
    )
}
export default StudentLimt;