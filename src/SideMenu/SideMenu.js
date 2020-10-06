import React from 'react'
import Playlist from '../Playlist/Playlist'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './index.css'

/**
 * Rendering the side menu
 * @param {*} props 
 */
export default function SideMenu(props) {
	const { playlist, remove, removeItem } = props;
	
	return (
		<>
			<input type="checkbox" name="hamburger" id="hamburger"/>
			<label htmlFor="hamburger">
				<FontAwesomeIcon icon={faBars} />
			</label>
			<div className="SideMenu">
				<h2>Your Playlists</h2>
				<Playlist
					playlist={playlist}
					remove={remove}
					removeItem={removeItem}
				/>
			</div>
		</>
	)
}
