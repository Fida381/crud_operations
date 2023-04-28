import React from "react"
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'
export const View =  ({students, deleteStudent}) => {
    return students.map( dataa=>(
        <tr key={dataa.mail}>
            <td>{dataa.student}</td>
            <td>{dataa.address}</td>
            <td>{dataa.city}</td>
            <td>{dataa.mail}</td>
            <td className="delete-btn" >
                <Icon icon={trash} onClick={() => deleteStudent(dataa.mail)}></Icon>
                <Icon icon={edit}></Icon>
            </td>
          
        </tr>
    ))

}