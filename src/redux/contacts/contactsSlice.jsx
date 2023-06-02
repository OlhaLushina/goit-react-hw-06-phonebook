import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsInitialState from 'data/contacts.json';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Експорт редюсера
export const contactsReducer = contactsSlice.reducer;

// Експорт екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
