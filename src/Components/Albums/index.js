import React from 'react'

import './main.css'

const Albums = ({albums, findUser, showAlbum}) => {


	return (
		<div className="albumList" id="albums">
			<h3>Альбомы</h3>
			<div className="albumList__list">
					{
						albums.map(e => {
							return (
								<div className="albumList__list__item" key={e.id} onClick={() => showAlbum(e.id)}>
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