import { DeliveryOptions } from "@/app/constants/delivery";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeliveryState {
    selectedId: string | null;
    lockerNumber: string;
    deliveryCost: number;
}

const initialState: DeliveryState = {
    selectedId: null,
    lockerNumber: "",
    deliveryCost: 0,
};

const deliverySlice = createSlice({
    name: "delivery",
    initialState,
    reducers: {
        setSelectedDelivery: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;

            // Ustawienie kosztu dostawy na podstawie wybranego ID
            const delivery = DeliveryOptions.find(
                (opt) => opt.id.toString() === action.payload
            );
            state.deliveryCost = delivery ? Number(delivery.price) : 0;
        },
        setLockerNumber: (state, action: PayloadAction<string>) => {
            state.lockerNumber = action.payload;
        },
    },
});

export const { setSelectedDelivery, setLockerNumber } = deliverySlice.actions;
export default deliverySlice.reducer;
