'use client';
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from './features/cartSlice';
import favReducer from './features/favSlice';
import deliveryReducer from './features/deliverySlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    fav: favReducer,
    delivery: deliveryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
