import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import toursReducer from '../features/tours/tourSlice';
import reviewsReducer from '../features/reviews/reviewsSlice';
import accordionReducer from '../features/accordion/accordion';
import navReducer from '../features/navbar/navSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    counter: counterReducer,
    tours: toursReducer,
    reviews: reviewsReducer,
    accordion: accordionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
