import React from 'react'
import './main.css'

const Users = ({ users }) => {
    return (
        <div className="users" id="userList">
            <h4> Пользователи</h4>
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Логин</th>
                        <th>Почта</th>
                        <th>Адрес</th>
                        <th>Телефон</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(el => {
                            return (
                                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.username}</td>
                                    <td>{el.email}</td>
                                    <td>{el.address.street}, {el.address.suite}</td>
                                    <td>{el.phone}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
                    
            </table>
           
        </div>
    )
}

export default Users