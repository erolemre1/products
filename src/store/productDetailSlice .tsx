import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface productDetailState {
  products: any[];
}

const initialState: productDetailState = {
  products: [],
};

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productDetailSlice.actions;

export default productDetailSlice.reducer;
