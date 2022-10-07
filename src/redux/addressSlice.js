import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
	name: 'address',
	initialState: {
		province: {
			id: '',
			value: 'Pilih Provinsi',
		},
		city: {
			id: '',
			value: 'Pilih Kota',
		},
		district: {
			id: '',
			value: 'Pilih Kecamatan',
		},
		village: {
			id: '',
			value: 'Pilih Desa',
		},
	},
	reducers: {
		setProvince: (state, action) => {
			state.province.id = action.payload.id;
			state.province.value = action.payload.value;
		},
		setCity: (state, action) => {
			state.city.id = action.payload.id;
			state.city.value = action.payload.value;
		},
		setDistrict: (state, action) => {
			state.district.id = action.payload.id;
			state.district.value = action.payload.value;
		},
		setVillage: (state, action) => {
			state.village.id = action.payload.id;
			state.village.value = action.payload.value;
		},
	},
});

// export action
export const { setProvince, setCity, setDistrict, setVillage } =
	addressSlice.actions;

// export reducer
export default addressSlice.reducer;
