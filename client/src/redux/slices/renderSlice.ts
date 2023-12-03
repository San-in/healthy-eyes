import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface RenderState {
  isFirstRender: boolean;
}
const initialState: RenderState = {
  isFirstRender: true,
};

export const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: {
    toggleIsFirstRender: state => {
      state.isFirstRender = !state.isFirstRender;
    },
  },
});

export const {toggleIsFirstRender} = renderSlice.actions;
export const selectIsFirstRender = (state: RootState) =>
  state.render.isFirstRender;
export default renderSlice.reducer;
