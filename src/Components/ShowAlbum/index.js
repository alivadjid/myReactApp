import React from 'react'

import './main.css'

const ShowAlbum = ({albumPhotos, userData, setAlbumId}) => {
	
	return (
		<div className="showAlbum">
			{userData}
			<button onClick={() => setAlbumId(0)}>Вернуться назад</button>
			<div className="showAlbum__list">
			
			{
				albumPhotos.map(e => {
					return (
						<div className="showAlbum__list__item" key={e.id}>
							<img src={e.url}/>
							<div>
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

export default ShowAlbum