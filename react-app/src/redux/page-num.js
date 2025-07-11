import { createSlice } from '@reduxjs/toolkit';

export const  workplacePageNum = createSlice({
    name: "workplacePageNum",
    initialState: { value: 0, category: "apps" },
    reducers: {
        setPageNum: (state, action) => {
            state.value = action.payload.value;
            state.category = action.payload.category;
        }
    }

});

export const { setPageNum } = workplacePageNum.actions;
export const setPageNumReducer = workplacePageNum.reducer;