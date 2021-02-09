import React, { useState } from 'react'

import './main.css'

const PostAdd = ({addPost}) => {
	const [ userId, setUserId ] = useState('')
	const [ theme, setTheme ] = useState('')
	const [ message, setMessage ] = useState('')

	function newPost(){
		addPost(userId, theme, message)
		setUserId('')
		setTheme('')
		setMessage('')
	}
	
	return (
		<div className="addpost" id="addpost">
			<h3>Добавить Запись</h3>
			<div className="addpost__item">
				<div className="addpost__item__list">
				<input type="text"placeholder="userId (1-10)" value={userId} onChange={e => setUserId(e.target.value)}/>
				</div>
				<div className="addpost__item__list">
					<input type="text"placeholder="тема" value={theme} onChange={e => setTheme(e.target.value)}/>
				</div>
				<div className="addpost__item__list">
					<input type="text"placeholder="сообщение" value={message} onChange={e => setMessage(e.target.value)}/>
				</div>
				
			</div>
			<button className="addpost__item__btn" onClick={()=> newPost()}>Добавить</button>
		</div>
	)
}

export default PostAdd