import { createSlice } from "@reduxjs/toolkit";

export const initialState: {
    items: any[];
} = {
    items: [],
}

const basketStore = createSlice({
    name: 'basket',
    initialState,
    reducers: {

    }
});


export default basketStore;