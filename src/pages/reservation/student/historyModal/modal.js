import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyleModal from "./historyCss";
import { Button } from 'react-bootstrap';
import './modalCss.css'

const HistoryModal = ({ unit, name, year, date, clinic, type, patient, dn, hn }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button style={{ background: '#262626', color: '#34fa6c', marginLeft: '75%', marginTop: '-10%' }} onClick={openModal}>
                Details
            </Button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >
                <CloseButton style={{ marginLeft: '85%', marginTop: '10px' }} onClick={closeModal} />
                <div>
                    <center>
                        <h1 style={{ color: 'black' }}>รายละเอียดการจอง</h1>
                        <Container>
                            <Row>
                                <Col><p>Date : {date}</p></Col>
                                <Col><p>Clinic : {clinic}</p></Col>

                            </Row>
                            <Row>
                                <Col sm={8}><p>Name : {name}</p> </Col>
                                <Col sm={4}><p>Year : {year}</p> </Col>
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
                        <h1 style={{ color: 'black' }}>รายการอุปกรณ์</h1>
                    </center>
                </div>
            </StyleModal>
        </div>
    );
};

export default HistoryModal;
