import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import sectionsData from './directory.data';

function Directory() {
	const [ sections, setSections ] = useState(sectionsData);

	return (
		<div className="directory-menu">
			{sections.map(({ title, id, imageUrl, size }) => {
				return <MenuItem key={id} id={id} title={title} imageUrl={imageUrl} size={size} />;
			})}
		</div>
	);
}

export default Directory;
