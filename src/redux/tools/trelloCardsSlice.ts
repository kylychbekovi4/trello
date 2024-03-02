import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PostProps, TrelloCards } from "../../types";

const url2 = import.meta.env.VITE_BACKEND_URL2;

interface TypeInitialState {
	card: TrelloCards[];
}

const initialState: TypeInitialState = {
	card: [],
};

// ! get
export const getTrelloCards = createAsyncThunk(
	"trelloCards/getTrelloCards",
	async () => {
		try {
			const response = await axios.get(url2);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

// ! post
export const postTrelloCards = createAsyncThunk(
	"trelloCards/postTrelloCards",
	async (newTrello: PostProps) => {
		try {
			const response = await axios.post(url2, newTrello);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

//! patch
export const patchTrello = createAsyncThunk(
	"/trelloCards/patchTrelloCards",
	async ({ newObject, _id }: { newObject: TrelloCards; _id: number }) => {
		try {
			const response = await axios.patch(`${url2}/${_id}`, newObject);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

// ! put
export const putTrello = createAsyncThunk(
	"/trelloCards/putTrelloCards",
	async ({ newObject, _id }: { newObject: TrelloCards; _id: number }) => {
		try {
			const response = await axios.put(`${url2}/${_id}`, newObject);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

// ! delete
export const deleteTrello = createAsyncThunk(
	"/trelloCards/deleteTrelloCards",
	async (id: number) => {
		try {
			const response = await axios.delete(`${url2}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

const trelloCardsReducer = createSlice({
	name: "trelloCards",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// ! get
			.addCase(getTrelloCards.fulfilled, (state, action) => {
				state.card = action.payload;
			})
			// ! post
			.addCase(postTrelloCards.fulfilled, (state, actions) => {
				state.card = actions.payload;
			})
			// ! patch
			.addCase(patchTrello.fulfilled, (state, actions) => {
				state.card = actions.payload;
			})
			// ! put
			.addCase(putTrello.fulfilled, (state, action) => {
				state.card = action.payload;
			})
			// ! delete
			.addCase(deleteTrello.fulfilled, (state, action) => {
				state.card = action.payload;
			});
	},
});

export const trelloCards = trelloCardsReducer.reducer;
