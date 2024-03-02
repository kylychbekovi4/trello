import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { trelloReducer } from "./tools/trelloSlice";
import { trelloCards } from "./tools/trelloCardsSlice";

export const store = configureStore({
	reducer: {
		trelloReducer,
		trelloCards,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
