import React, {useContext, useState, useEffect } from 'react'
import {Context} from '../../Context'
import ShowAlbum from '../ShowAlbum'
import { photosUrl} from '../../Const'
import { getList } from '../../Services'
import Loader from '../Loader'
import './main.css'



const Albums = ({albums, showAlbum}) => {
	const [albumId, setAlbumId] = useState(0)
	const [userData, setUserData] = useState('')
	const [albumPhotos, setAlbumPhotos] = useState([])
	const [albumUpdate, setAlbumUpdate] = useState(false)

	const { findUser } = useContext(Context)
	
	useEffect(() => {
		setAlbumUpdate(false)
	}, [albumPhotos])
	function showAlbum(id, userId){
		setAlbumUpdate(true)
		setAlbumId(id)
		setUserData(findUser(userId))
		let com = `?albumId=${id}`
		getList(photosUrl, setAlbumPhotos, com)
	}

	let photos = albumPhotos.length > 0 && !albumUpdate ? <ShowAlbum data={{albumPhotos, userData, setAlbumId}}/> : <Loader />
	let shAlbums = albums.map(e => {
		return (
			<div className="albumList__list__item" key={e.id} onClick={() => showAlbum(e.id, e.userId)}>
				{findUser(e.userId)}
				<div className="albumList__list__title">
					{e.title}
				</div>
				
			</div>
		)
	})
	
	return (
			<div className="albumList" id="albums">
				<h3>Альбомы</h3>
				<div className="albumList__list">
					{
						albumId 
						? 
						photos
						:
						shAlbums
					}
				
				</div>
		</div>
	)
}

export default Albums


