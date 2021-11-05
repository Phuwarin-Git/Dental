import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const FormInput = ({
    item,
    editingIndex, setEditingIndex,
    todos, setTodos
}) => {

    const [value, setValue] = useState(item.text);

    function handelEditInputChange(e) {
        setValue(e.target.value)
    }

    function handelEditFormSubmit(e) {
        e.preventDefault();
        const updateItem = todos.map((up) => {
            return up.id === item.id ? { id: item.id, text: value } : up;
        });
        setTodos(updateItem);
        setFalse(item.id);
    }

    function setFalse(revIndex) {
        const removeIndex = editingIndex.filter((item) => {
            return item !== revIndex
        })
        setEditingIndex(removeIndex)
    }

    function submitForm() {
        return console.log("form Submit ===>",)
    }

    return (
        // <form>
        <tbody>
            <tr onSubmit={() => submitForm()}>
                <td className='tdStudent'>
                    <input type={'date'} style={{ width: '180px' }} defaultValue={item.date}></input>
                </td>
                <td className='tdStudent'>
                    <input style={{ width: '65px' }} defaultValue={item.time}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.od}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.tmd}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.oper}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.perio}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.sur}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.prosth}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.endo}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.xray}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.om}></input>
                </td>
                <td className='tdStudent'>
                    <input type={'number'} style={{ width: '35px' }} defaultValue={item.ortho}></input>
                </td>
                <td className='tdStudent'><Button type={'submit'} style={{ backgroundColor: 'green' }}>อัพเดท</Button></td>
                <td className='tdStudent'><Button onClick={() => setFalse(item.limit_id)} style={{ backgroundColor: 'red' }}>ยกเลิก</Button></td>
            </tr>
        </tbody>
        // </form>
    )
}

export default FormInput;