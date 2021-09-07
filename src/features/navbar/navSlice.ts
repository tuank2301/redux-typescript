import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface indexType {
  index: 0 | 1 | 2 | 3;
}

const initialState: indexType = {
  index: 0,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = navSlice.actions;
export const selectNav = (state: RootState) => state.nav;
export default navSlice.reducer;
