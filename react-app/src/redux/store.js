import {configureStore} from '@reduxjs/toolkit';
import { setPageNumReducer } from './page-num';

export default configureStore({
    reducer: {
        workplacePageNum: setPageNumReducer,
    }
})