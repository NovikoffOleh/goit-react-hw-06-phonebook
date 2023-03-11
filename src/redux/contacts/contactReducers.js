import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactActions';

const INITIAL_CONTACT_LIST = [
  {id: 'id-1', name: 'Григорій Сковорода', number: '(044)459-12-56'},
  {id: 'id-2', name: 'Тарас Бульба', number: '(050)443-89-12'},
  {id: 'id-3', name: 'Одарка Павленко', number: '(069)645-17-79'},
  {id: 'id-4', name: 'Ілона Зріні', number: '(0412)227-91-26'},
];

const items = createReducer(INITIAL_CONTACT_LIST, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});