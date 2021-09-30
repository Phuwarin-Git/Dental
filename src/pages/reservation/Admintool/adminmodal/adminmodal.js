import React, { useContext, useState, useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import StyleModal from "./adminhistory";
import { Button } from 'react-bootstrap';
import axios from "axios";
import Table from 'react-bootstrap/Table'

const Adminmodal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [Tool, setDetials] = useState([]);

    useEffect(() => {
        getTool();
    }, [])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const getTool = () => {
        axios.get("http://localhost:3000/Tool/find/all").then((item) => {
            setDetials(item.data)
            console.log("data :", item.data)
        });
    }

    return (

        <div>
            <Button style={{ background: '#1565C0', color: 'white', width: "150px", }} onClick={openModal}>
                อุปกรณ์
            </Button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >
                <CloseButton onClick={closeModal} />
                <div>
                    <center style={{}}>
                        <br />
                        <h3 style={{ color: '#0047AB' }}>เครื่องมือเบิกงาน Endo</h3>
                    </center>
                    <div style={{ marginLeft: "50px", }}>
                        <br />

                        <Table
                            className="tableResponsive"
                            striped
                            borderless
                            hover
                            variant="dark"
                            style={{ width: '800px' }}
                        >
                            <thead>
                                <tr>
                                    <th>ชื่ออุปกรณ์</th>
                                </tr>
                            </thead>
                            {Tool.map(item => {
                                return <tbody key={Tool.ID}>
                                    <tr>
                                        <td style={{ color: 'white' }}>ชุดตรวจ จำนวน :    {item.testkit_toolcc1}</td>
                                    </tr>
                                </tbody>
                            })}
                        </Table>

                        <br />
                    </div>
                </div>
            </StyleModal>
        </div>
    );
};

export default Adminmodal;
