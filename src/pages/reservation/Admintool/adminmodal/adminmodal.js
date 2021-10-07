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
                        <h3 style={{ color: '#0047AB' , fontWeight: 'bold' }}>เครื่องมือเบิกงาน Endo</h3>
                    </center>
                    <div style={{ marginLeft: "50px", overflowY:'auto' }}>
                        <br />

                        <Table
                            striped
                            borderless
                            hover
                            variant=""
                            style={{ width: '650px' }}
                            bordered
                        >
                            <thead>
                                <tr>
                                    <th style={{ color: 'black', fontWeight: 'bold', fontSize: '18px',paddingLeft:'47px'}}>ชื่ออุปกรณ์</th>
                                    <th style={{ color: 'black', fontWeight: 'bold', fontSize: '18px',textAlign:'end'}}>จำนวน</th>
                                </tr>
                                
                            </thead>
                            {Tool.map(item => {
                                return <tbody key={Tool.ID}>
                                    <tr>
                                        <td style={{ color: 'black', fontSize: '18px', paddingLeft:'50px' }}>
                                        ชุดตรวจ 
                                         <br/>
                                          แก้วนํ้า  
                                          <br/>
                                          Tripple syring
                                          <br/>
                                          ผ้าเจาะกลาง
                                          <br/>
                                          ผ้าคลุม
                                          <br/>
                                          UNC 15 Probe
                                          </td> 

                                          <br/>

                                          <td style={{ color: 'black', fontSize: '18px', paddingRight:'10px' }}>                                             
                                          {item.testkit_toolcc1}
                                          <br/>
                                         {item.glassofwater_toolcc1}
                                         <br/>
                                         {item.Tripplesyring_toolcc1}
                                         <br/>
                                         {item.FabricMiddlepunch_toolcc1}
                                         <br/>
                                         {item.veil_toolcc1}
                                         <br/>
                                         {item.UNC15Probe_toolcc1}
                                         </td>
                                         
                                            

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
