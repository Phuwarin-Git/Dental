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

    return (
        <tbody>
            <tr>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'>x</td>
                <td className='tdStudent'><Button style={{ backgroundColor: 'green' }}>อัพเดท</Button></td>
                <td className='tdStudent'><Button onClick={() => setFalse(item.limit_id)} style={{ backgroundColor: 'red' }}>ยกเลิก</Button></td>
            </tr>
        </tbody>
    )
}

export default FormInput;