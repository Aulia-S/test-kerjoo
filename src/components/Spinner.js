import React from 'react';
import ReactDOM from 'react-dom';

import './Spinner.css';

const Spinner = () => {
	const content = (
		<div className='backdrop'>
			<div className='loading'>Getting data..</div>
		</div>
	);

	return ReactDOM.createPortal(
		content,
		document.querySelector('#loading-hook'),
	);
};

export default Spinner;
