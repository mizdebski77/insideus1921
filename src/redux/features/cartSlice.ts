import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface CartState {
    cartItems: CartItem[];
    cartTotalAmount: number;
    cartTotalQuantity: number;
}

const loadCartFromLocalStorage = (): CartState => {
    try {
        const data = localStorage.getItem("cart");
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.warn("Błąd przy ładowaniu koszyka z localStorage:", error);
    }

    return {
        cartItems: [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0,
    };
};

const saveCartToLocalStorage = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    } catch (error) {
        console.warn("Błąd przy zapisie koszyka do localStorage:", error);
    }
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const exists = state.cartItems.some(item => item.id === action.payload.id);

            if (!exists) {
                state.cartItems.push(action.payload);
                state.cartTotalQuantity += 1;
                state.cartTotalAmount += action.payload.price;
                saveCartToLocalStorage(state);
            }
        },

        removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
            const itemToRemove = state.cartItems.find(item => item.id === action.payload.id);

            if (!itemToRemove) return;

            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartTotalQuantity -= 1;
            state.cartTotalAmount -= itemToRemove.price;
            saveCartToLocalStorage(state);
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
            saveCartToLocalStorage(state);
        }
    }
});

export const selectItemsState = (state: RootState) => state.cart;
export const selectItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotal = (state: RootState) => ({
    amount: state.cart.cartTotalAmount,
    quantity: state.cart.cartTotalQuantity,
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
