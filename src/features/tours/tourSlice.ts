import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import axios from 'axios';

export type dataType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

export interface toursState {
  status: 'idle' | 'loading' | 'failed';
  data: dataType[];
}

const initialState: toursState = { status: 'idle', data: [] };

export const fetchToursData = createAsyncThunk('tours/fetchTours', async () => {
  return axios
    .get('https://course-api.com/react-tours-project')
    .then((res) => res.data)
    .catch((error) => console.log(error));
});

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    removeTour: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToursData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchToursData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const { removeTour } = toursSlice.actions;
export const selectTourData = (state: RootState) => state.tours;
export default toursSlice.reducer;
