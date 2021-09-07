import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { questionsData } from 'data';

export interface dataType {
  id: number;
  title: string;
  info: string;
}

interface initialStateType {
  data: dataType[];
}

const initialState: initialStateType = {
  data: questionsData,
};

const accordionSlice = createSlice({
  name: 'accordion',
  initialState,
  reducers: {},
});

export const selectAccordionData = (state: RootState) => state.accordion;
export default accordionSlice.reducer;
