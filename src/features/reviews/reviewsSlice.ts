import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { reviewsData } from 'data';

interface reviewsDataType {
  id: number;
  name: string;
  image: string;
  job: string;
  text: string;
}

interface reviewsState {
  index: number;
  reviewsData: reviewsDataType[];
}

const checkIndex = (index: number) => {
  if (index < 0) return reviewsData.length - 1;
  else if (index === reviewsData.length) return 0;
  else return index;
};

const initialState: reviewsState = {
  index: 0,
  reviewsData,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    prev: (state) => {
      state.index = checkIndex((state.index -= 1));
    },
    next: (state) => {
      state.index = checkIndex((state.index += 1));
    },
    random: (state) => {
      const newIndex = Math.floor(Math.random() * reviewsData.length);
      if (newIndex === state.index) state.index = checkIndex(newIndex + 1);
      else state.index = newIndex;
    },
  },
});

export const { prev, next, random } = reviewsSlice.actions;
export const selectReviewsData = (state: RootState) => state.reviews;
export default reviewsSlice.reducer;
