import React from 'react'

import './main.css'

const ShowAlbum = ({albumPhotos}) => {
	return (
		<div className="showAlbum__list">
			{
				albumPhotos.map(e => {
					return (
						<div className="showAlbum__list__item" key={e.id}>
							<img src={e.url}/>
						</div>
					)
				})
			}
		</div>
		

	)
}

export default ShowAlbum