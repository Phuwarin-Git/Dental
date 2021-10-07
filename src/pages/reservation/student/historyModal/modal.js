import React, { useState, useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyleModal from "./historyCss";
import { Button } from 'react-bootstrap';
import axios from "axios";
import './modalCss.css'

const HistoryModal = ({ unique, unit, name, year, date, clinic, type, patient, dn, hn }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [tools, setTools] = useState([]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        getTools();
    }, [modalIsOpen])

    const getTools = () => {
        axios.get("http://localhost:3000/tool/find/notnull").then((item) => {
            console.log("data :", item.data)
            return filterToolsDetails(item.data);
        });
    }

    const filterToolsDetails = (item) => {
        const res = item.filter((item) => {
            return (item.uniqueID === unique)
        })
        setTools(res);
        console.log("Details Tools:", res)
        console.log("Tool :", tools)

        // for (const key in tools) {
        //     console.log(`${key}: ${tools[key]}`);
        // }
    }

    return (
        <div>
            <Button style={{ background: '#2884ed', color: 'black' }} onClick={openModal}>
                Details
            </Button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >

                <div>
                    <Card border="dark" style={{ width: '400px' }}>

                        <Card.Header><h2>รายละเอียด</h2>
                            <CloseButton style={{ marginLeft: '85%', marginTop: '-50px' }} onClick={closeModal} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>การจอง</Card.Title>
                            <Card.Text>
                                <Container>
                                    <Row>
                                        <Col><p>Date : {date}</p></Col>
                                        <Col><p>Clinic : {clinic}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p>Name : {name}</p> </Col>
                                        <Col><p>Year : {year}</p> </Col>
                                    </Row>
                                    <Row>
                                        <Col><p>Work Type : {type}</p></Col>
                                        <Col><p>Unit : {unit}</p></Col>

                                    </Row>
                                    <Row>
                                        <Col><p>dn : {dn}</p></Col>
                                        <Col><p>hn : {hn}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p>Patient : {patient}</p></Col>
                                    </Row>
                                </Container>
                                <Card.Title style={{ textAlign: 'center' }}>รายการอุปกรณ์</Card.Title>
                                <Container>
                                    {tools.map(item => {
                                        return <div key={item.key}>
                                            <p>{item.uniqueID}</p>
                                        </div>
                                    })}
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </StyleModal>
        </div>
    );
};

export default HistoryModal;
