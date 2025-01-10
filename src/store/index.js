import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./itemListSlice";

const store = configureStore({
    reducer: {
        itemStore: ItemSlice.reducer,
    }
});

export const itemAction = ItemSlice.actions;

export default store;