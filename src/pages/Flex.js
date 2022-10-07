import React, { useState } from 'react';

import './Flex.css';
import Dropdown from '../components/Dropdown';

const Flex = () => {
	// state
	const [dropdown, setDropdown] = useState({ id: '', value: 'Pilih Tahun' });

	// event handler
	const handleClickDropdown = (e) => {
		setDropdown({ id: e.target.id, value: e.target.value });
	};
	return (
		<div className='mt-4 d-flex flex-column flex-md-row flex-wrap'>
			<div className='flex-item buttons'>
				<div className='d-flex justify-content-center'>
					<button className='m-2 btn btn-primary'>Tambah</button>
					<button className='m-2 btn btn-secondary'>Import</button>
					<button className='m-2 btn btn-secondary'>Export</button>
				</div>
			</div>
			<div className='flex-item'>
				<div className='d-flex justify-content-center m-2'>
					<div class='input-group mb-3'>
						<input
							type='search'
							class='form-control'
							placeholder='Type here..'
						/>
						<div class='input-group-append'>
							<button class='btn btn-outline-primary' type='button'>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='flex-item'>
				<div className='d-flex justify-content-center m-2'>
					<Dropdown
						text={dropdown.value}
						values={[
							{ id: 1, name: 2020 },
							{ id: 2, name: 2021 },
							{ id: 3, name: 2022 },
						]}
						handleClickDropdown={handleClickDropdown}
					/>
				</div>
			</div>
		</div>
	);
};

export default Flex;
