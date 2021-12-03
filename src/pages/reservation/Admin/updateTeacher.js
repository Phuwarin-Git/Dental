import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";
import Form from 'react-bootstrap/Form'

const UpdateTeacher = ({
    item,
    editingIndex, setEditingIndex, getDetails
}) => {

    const [UpdateCase, setUpdate] = useState([]);

    const [getID, setID] = useState(item.student_id);
    const [getName, setName] = useState(item.first_name);
    const [getYear, setYear] = useState(item.student_year);
    const [getEmail, setEmail] = useState(item.email);
    const [getRole, setRole] = useState(item.role);


    useEffect(() => {
        console.log("Update :", UpdateCase)
    }, [UpdateCase])

    function handelEditInputChangeID(e) {
        setID({ student_id: e.target.value })
    }

    function handelEditInputChangeName(e) {
        setName({ first_name: e.target.value })
    }

    function handelEditInputChangeYear(e) {
        setYear({ student_year: parseInt(e.target.value) })
    }

    function handelEditInputChangeEmail(e) {
        setEmail({ email: e.target.value })
    }

    function handelEditInputChangeRole(e) {
        setRole({ role: e.target.value })
    }

    async function handelEditFormSubmit(e) {
        e.preventDefault();
        let id = editingIndex[0];

        await axios.put("http://localhost:3000/name/updateUser/" + id, getID);
        await axios.put("http://localhost:3000/name/updateUser/" + id, getName);
        await axios.put("http://localhost:3000/name/updateUser/" + id, getYear);
        await axios.put("http://localhost:3000/name/updateUser/" + id, getEmail);
        await axios.put("http://localhost:3000/name/updateUser/" + id, getRole);

        const removeIndex = editingIndex.filter((item) => {
            return item !== editingIndex[0];
        })
        setEditingIndex(removeIndex)

        return getDetails;

    }

    function setFalse(revIndex) {
        const removeIndex = editingIndex.filter((item) => {
            return item !== revIndex
        })
        setEditingIndex(removeIndex)
    }


    return (
        // <form>
        <tbody>
            <tr>
                <td className='tdStudent'>
                    <input onChange={handelEditInputChangeName} type={'text'} defaultValue={item.first_name}></input>
                </td>
                <td className='tdStudent'>
                    <input onChange={handelEditInputChangeEmail} type={'email'} defaultValue={item.email}></input>
                </td>
                <td className='tdStudent'>
                    <select style={{ marginTop: '-4px' }} onChange={handelEditInputChangeRole} type={'text'} defaultValue={item.role}>
                        <option value="teacher" label="teacher" />
                    </select>
                </td>
                <td className='tdStudent'><Button onClick={handelEditFormSubmit} style={{ backgroundColor: 'green' }}>อัพเดท</Button></td>
                <td className='tdStudent'><Button onClick={() => setFalse(item.id)} style={{ backgroundColor: 'red' }}>ยกเลิก</Button></td>
            </tr>
        </tbody>
        // </form>
    )
}

export default UpdateTeacher;