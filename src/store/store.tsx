import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import productDetailReducer from './productDetailSlice ';
import basketReducer from './basketSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
