import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Style/Profile.css'


 const Profile = ({isRegistered}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getData()
    },[isRegistered])

    const getData = async () => {

        const response = await axios.get('http://localhost:4000/api/user/subscribers')
        setUsers(response.data)
   
    }

   
     const removeData = (_id) => {

        axios.delete(`http://localhost:4000/api/user/${_id}`).then(res => {
            const del = users.filter(user => _id !== user._id)
            setUsers(del)
           
        })

    }

    

    const renderBody = () => {
        return users && users.map(({_id, userName, email, phone,address }) => {
            return (
                <tr key={_id}>
                   
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                     <td>{address}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(_id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
           
            <table id='user'>
                <thead>
                    <tr>
                       
                         <th>USER NAME</th>
                          <th>EMAIL</th>
                           <th>MOBILE NO</th>
                            <th>ADDRESS</th>
                            <th>OPERATION</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}
export default Profile
