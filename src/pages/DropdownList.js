import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';
import { getCity, getDistrict, getProvince, getVillage } from '../api/address';
import {
	setProvince,
	setCity,
	setVillage,
	setDistrict,
} from '../redux/addressSlice';

const DropdownList = () => {
	const dispatch = useDispatch();

	// state
	const province = useSelector((state) => state.address.province);
	const city = useSelector((state) => state.address.city);
	const district = useSelector((state) => state.address.district);
	const village = useSelector((state) => state.address.village);

	const [provinceData, setProvinceData] = useState([]);
	const [cityData, setCityData] = useState([]);
	const [districtData, setDistrictData] = useState([]);
	const [villageData, setVillageData] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	// fuction
	const startLoading = () => {
		setIsLoading(true);
	};

	const stopLoading = () => {
		setIsLoading(false);
	};

	// effect
	useEffect(() => {
		startLoading();
		getProvince().then((res) => {
			stopLoading();
			setProvinceData(res.data);
		});
	}, []);

	useEffect(() => {
		if (province.id) {
			startLoading();
			getCity(province.id).then((res) => {
				stopLoading();
				setCityData(res.data);
			});
		}

		if (city.id) {
			startLoading();
			getDistrict(city.id).then((res) => {
				stopLoading();
				setDistrictData(res.data);
			});
		}

		if (district.id) {
			startLoading();
			getVillage(district.id).then((res) => {
				stopLoading();
				setVillageData(res.data);
			});
		}
	}, [province.id, city.id, district.id]);

	// event handler
	const handleClickProvince = (e) => {
		dispatch(setProvince({ id: e.target.id, value: e.target.value }));
	};

	const handleClickCity = (e) => {
		dispatch(setCity({ id: e.target.id, value: e.target.value }));
	};

	const handleClickDistrict = (e) => {
		dispatch(setDistrict({ id: e.target.id, value: e.target.value }));
	};

	const handleClickVillage = (e) => {
		dispatch(setVillage({ id: e.target.id, value: e.target.value }));
	};

	return (
		<>
			{isLoading && <Spinner />}
			<div className='d-flex flex-column align-items-center pt-4'>
				<div className='mb-3'>
					<Dropdown
						text={province.value}
						handleClickDropdown={handleClickProvince}
						values={provinceData}
					/>
				</div>
				<div className='mb-3'>
					<Dropdown
						text={city.value}
						handleClickDropdown={handleClickCity}
						values={cityData}
					/>
				</div>
				<div className='mb-3'>
					<Dropdown
						text={district.value}
						handleClickDropdown={handleClickDistrict}
						values={districtData}
					/>
				</div>
				<div className='mb-3'>
					<Dropdown
						text={village.value}
						handleClickDropdown={handleClickVillage}
						values={villageData}
					/>
				</div>
			</div>
		</>
	);
};

export default DropdownList;
