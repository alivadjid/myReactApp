import React from 'react'

const Navbar = () => {
    
    return (
        <div>
            <ul className="navbar">
                <li>
                    <a href="#userList">Пользователи</a>
                </li>
                <li>
                    <a href="#postList">Посты</a>                    
                </li>
                <li>
                    <a href="#">Добавить пост</a>                    
                </li>
                <li>
                    <a href="#">Альбомы</a>                    
                </li>
            </ul>
        </div>
    )
}

export default Navbar