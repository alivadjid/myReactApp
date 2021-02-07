import React, { useState } from 'react'

import './main.css'

const PostAdd = ({addPost}) => {
	const [ userId, setUserId ] = useState('')
	const [ theme, setTheme ] = useState('')
	const [ message, setMessage ] = useState('')

	return (
		<div className="addpost" id="addpost">
			<h3>Добавить Запись</h3>
			<div className="addpost__item">
				<div className="addpost__item__list">
				<input type="text"placeholder="userId" value={userId} onChange={e => setUserId(e.target.value)}/>
				</div>
				<div className="addpost__item__list">
					<input type="text"placeholder="тема" value={theme} onChange={e => setTheme(e.target.value)}/>
				</div>
				<div className="addpost__item__list">
					<input type="text"placeholder="сообщение" value={message} onChange={e => setMessage(e.target.value)}/>
				</div>
				
			</div>
			<button className="addpost__item__btn" onClick={()=> addPost(userId, theme, message)}>Добавить</button>
		</div>
	)
}

export default PostAdd