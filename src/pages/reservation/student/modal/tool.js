import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import StyleModal from './index.view'


const ToolModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <StyleModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="modal"
            >

                <div>
                    <CloseButton />
                    Hello
                </div>
            </StyleModal>
        </div>
    );
};



export default ToolModal;
