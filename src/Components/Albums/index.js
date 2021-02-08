import React, {useContext} from 'react'
import {Context} from '../../Context'
import './main.css'

const Albums = ({albums, showAlbum}) => {

	const { findUser } = useContext(Context)
	return (
		<div className="albumList" id="albums">
			<h3>Альбомы</h3>
			<div className="albumList__list">
					{
						albums.map(e => {
							return (
								<div className="albumList__list__item" key={e.id} onClick={() => showAlbum(e.id, e.userId)}>
									{findUser(e.userId)}
									<div className="albumList__list__title">
										{e.title}
									</div>
									
								</div>
							)
						})
					}
				
			</div>
		</div>
	)
}

export default Albums