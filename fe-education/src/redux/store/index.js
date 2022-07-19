import { configureStore } from '@reduxjs/toolkit';
import { getDataLogin } from '../reducers/ReducersLogin';
import { getDataUsers } from '../reducers/ReducersUsers';

export const store = configureStore({
  reducer: {
    login : getDataLogin,
    dataUsers : getDataUsers
  },
})