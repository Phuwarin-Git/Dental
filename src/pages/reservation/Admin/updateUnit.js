import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";

const FormInputUnit = ({
    item,
    editingIndex, setEditingIndex, getDetails
}) => {

    const [UpdateCase, setUpdate] = useState([]);

    const [getUnit, setUnit] = useState(item.unit_code);
    const [getFloor, setFoolr] = useState(item.unit_floor);
    const [getType, setType] = useState(item.unit_type);


    useEffect(() => {
        console.log("Update :", UpdateCase)
    }, [UpdateCase])

    function handelEditInputChangeUnit(e) {
        setUnit({ unit_code: e.target.value })
    }

    function handelEditInputChangeFloor(e) {
        setFoolr({ unit_floor: e.target.value })
    }

    function handelEditInputChangeType(e) {
        setType({ unit_type: e.target.value })
    }


    async function handelEditFormSubmit(e) {
        e.preventDefault();
        let unit_id = editingIndex[0];

        await axios.put("http://localhost:3000/unit/updateUnit/" + unit_id, getUnit);
        await axios.put("http://localhost:3000/unit/updateUnit/" + unit_id, getFloor);
        await axios.put("http://localhost:3000/unit/updateUnit/" + unit_id, getType);

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
                    <input onChange={handelEditInputChangeUnit} type={'text'} defaultValue={item.unit_code}></input>
                </td>
                <td className='tdStudent'>
                    <input onChange={handelEditInputChangeFloor} type={'number'} defaultValue={item.unit_floor}></input>
                </td>
                <td className='tdStudent'>
                    <input onChange={handelEditInputChangeType} type={'text'} defaultValue={item.unit_type}></input>
                </td>
                <td className='tdStudent'>
                    {item.unavailable_start_date}
                </td>
                <td className='tdStudent'><Button onClick={handelEditFormSubmit} style={{ backgroundColor: 'green' }}>อัพเดท</Button></td>
                <td className='tdStudent'><Button onClick={() => setFalse(item.unit_id)} style={{ backgroundColor: 'red' }}>ยกเลิก</Button></td>
            </tr>
        </tbody>
        // </form>
    )
}

export default FormInputUnit;