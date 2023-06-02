import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: '',
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

// Експорт редюсера
export const filterReducer = filterSlice.reducer;

// Експорт екшенів
export const { changeFilter } = filterSlice.actions;
