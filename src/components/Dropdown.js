import React from 'react';

const Dropdown = (props) => {
	return (
		<div class='btn-group dropright'>
			<button
				class='btn btn-primary dropdown-toggle'
				type='button'
				id='dropdownMenuButton'
				data-toggle='dropdown'
				aria-haspopup='true'
				aria-expanded='false'>
				{props.text}
			</button>
			<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
				{props.values &&
					props.values.map((value) => (
						<button
							key={value.id}
							id={value.id}
							class='dropdown-item'
							value={value.name}
							onClick={props.handleClickDropdown}>
							{value.name}
						</button>
					))}
			</div>
		</div>
	);
};

export default Dropdown;
