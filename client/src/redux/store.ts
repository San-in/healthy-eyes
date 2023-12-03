import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import renderReducer from './slices/renderSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    render: renderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
