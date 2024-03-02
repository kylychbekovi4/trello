import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { newData } from "../../types";

const url = import.meta.env.VITE_BACKEND_URL;

interface TrelloPlatform {
	data: Data[];
	loading: boolean;
	error: null | string;
}

const initialState: TrelloPlatform = {
	data: [],
	loading: false,
	error: null,
};

export interface Data {
	_id?: number;
	title: string;
	password: string | number;
	userProfile: string;
}

export const postTrello = createAsyncThunk(
	"todo/postTouTube",
	async (newTrello: newData) => {
		try {
			const response = await axios.post(url, newTrello);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const getTrello = createAsyncThunk("trello/getTrello", async () => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

const trelloSlice = createSlice({
	name: "trello",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTrello.pending, (state) => {
				state.loading = true;
			})
			.addCase(getTrello.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getTrello.rejected, (state, action) => {
				state.error = action.error.message || null;
				state.loading = false;
			})
			.addCase(postTrello.pending, (state) => {
				state.loading = true;
			})
			.addCase(postTrello.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(postTrello.rejected, (state, action) => {
				state.error = action.error.message || null;
				state.loading = false;
			});
	},
});

export const trelloReducer = trelloSlice.reducer;
