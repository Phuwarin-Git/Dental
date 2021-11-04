import styled from "styled-components";
import Modal from "react-modal";

const StyledCreate = styled(Modal)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border-radius: 20px;
min-height: 20%;
max-height: 90vh; 
min-width:70%;
`;

export default StyledCreate;
