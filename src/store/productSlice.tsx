import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: any[];
  totalCount: number;
}

const initialState: ProductState = {
  products: [],
  totalCount: 0,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

export const { setProducts, setTotalCount } = productSlice.actions;
export default productSlice.reducer;
