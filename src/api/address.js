import axios from 'axios';

export const getProvince = async () => {
	const response = await axios.get(
		'https://api.kerjoo.com/api/v1/reference/provinces ',
	);
	return response;
};

export const getCity = async (provinceId) => {
	const response = await axios.get(
		`https://api.kerjoo.com/api/v1/reference/regencies_of/${provinceId}`,
	);
	return response;
};

export const getDistrict = async (cityId) => {
	const response = await axios.get(
		`https://api.kerjoo.com/api/v1/reference/districts_of/${cityId}`,
	);
	return response;
};

export const getVillage = async (districtId) => {
	const response = await axios.get(
		`https://api.kerjoo.com/api/v1/reference/villages_of/${districtId}`,
	);
	return response;
};
