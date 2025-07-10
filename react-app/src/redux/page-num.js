import { createSlice } from '@reduxjs/toolkit';

export const  workplacePageNum = createSlice({
    name: "workplacePageNum",
    initialState: { value: 0 },
    reducers: {
        setPageNum: (state, action) => {
            state.value = action.payload;
        }
    }

});

export const { setPageNum } = workplacePageNum.actions;
export const setPageNumReducer = workplacePageNum.reducer;