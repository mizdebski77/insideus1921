import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FavItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface FavState {
    favItems: FavItem[];
    favTotalAmount: number;
    favTotalQuantity: number;
}
const loadFavFromLocalStorage = (): FavState => {
    try {
        const data = localStorage.getItem("fav");
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.warn("Błąd przy ładowaniu ulubionych z localStorage:", error);
    }

    return {
        favItems: [],
        favTotalAmount: 0,
        favTotalQuantity: 0,
    };
};

const saveFavToLocalStorage = (state: FavState) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem("fav", serialized);
    } catch (error) {
        console.warn("Błąd przy zapisie ulubionych do localStorage:", error);
    }
};
const initialState: FavState = loadFavFromLocalStorage();
const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        addToFav: (state, action: PayloadAction<Omit<FavItem, "favQuantity">>) => {
            const exists = state.favItems.some(item => item.id === action.payload.id);
            if (!exists) {
                state.favItems.push(action.payload);
                state.favTotalQuantity += 1;
                state.favTotalAmount += action.payload.price;
                saveFavToLocalStorage(state);
            }
        },

        removeFromFav: (state, action: PayloadAction<{ id: string }>) => {
            const itemToRemove = state.favItems.find(item => item.id === action.payload.id);
            if (!itemToRemove) return;

            state.favItems = state.favItems.filter(item => item.id !== action.payload.id);
            state.favTotalAmount -= itemToRemove.price;
            state.favTotalQuantity -= 1;
            saveFavToLocalStorage(state);
        },

        clearFav: (state) => {
            state.favItems = [];
            state.favTotalAmount = 0;
            state.favTotalQuantity = 0;
            saveFavToLocalStorage(state);
        }
    }
});

export const selectItemsState = (state: RootState) => state.fav;
export const selectItems = (state: RootState) => state.fav.favItems;
export const selectFavTotal = (state: RootState) => ({
    amount: state.fav.favTotalAmount,
    quantity: state.fav.favTotalQuantity,
});

export const { addToFav, removeFromFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
