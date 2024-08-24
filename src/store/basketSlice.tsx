import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    setBasketItems: (state, action) => {
      state.items = action.payload;
    },
    setBasketItemsTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    addBasketItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.count = (existingItem.count || 1) + 1;
      } else {
        state.items.push({ ...newItem, count: 1 });
      }
    },
    removeBasketItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { setBasketItems, addBasketItem, removeBasketItem, setBasketItemsTotalPrice } = basketSlice.actions;
export default basketSlice.reducer;
