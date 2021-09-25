import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import StyleModal from "./adminhistory";
import { Button } from 'react-bootstrap';

const Adminmodal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button style={{ background: '#1565C0', color: 'white' ,width:"150px",}} onClick={openModal}>
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
                        <h3 style={{ color: '#1565C0'}}>เครื่องมือเบิกงาน Endo</h3>
                    </center>
                    <div style={{marginLeft:"50px",}}>
                    <p>Syringe ยาชา จำนวน 1 ชิ้น </p>
                    <p>หัว Endo Burs Box จำนวน 1 ชิ้น</p>
                    <p>หัว Gate Drill ฟันหน้า 1 ชิ้น</p>
                    <p>Glasslab จำนวน 1 ชิ้น</p>
                    <p>ชุดเครื่องมือ FRC Box set จำนวน 1 ชิ้น</p>
                    <p>K - File 25 mm. (45-80) จำนวน 1 ชิ้น</p>
                    <p>เข็มล้าง เบอร์ 24/27 จำนวน 1 ชิ้น</p>
                    <br />
                    </div>
                </div>
            </StyleModal>
        </div>
    );
};

export default Adminmodal;
