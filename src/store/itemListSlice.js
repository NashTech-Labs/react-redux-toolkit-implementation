import { createSlice } from "@reduxjs/toolkit";


const ItemSlice = createSlice({
    name: "itemList",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    }
});


export default ItemSlice;