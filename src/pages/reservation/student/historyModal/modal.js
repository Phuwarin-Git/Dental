import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import StyleModal from "./historyCss";
import { Button } from 'react-bootstrap';

const HistoryModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button style={{ background: '#ede861', color: 'black' }} onClick={openModal}>
                Details
            </Button>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >
                <CloseButton onClick={closeModal} />
                <div>
                    <center>
                        <p>Weight : </p>
                        <p>Height : </p>
                        <br />
                    </center>
                </div>
            </StyleModal>
        </div>
    );
};

export default HistoryModal;
