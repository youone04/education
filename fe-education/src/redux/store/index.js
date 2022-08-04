import { configureStore } from '@reduxjs/toolkit';
import { getDataDetailKursus } from '../reducers/ReducersDetailKursus/ReducersDetailKursus';
import { getDataKursus } from '../reducers/ReducersKursus/ReducersKursus';
import { getDataLogin } from '../reducers/ReducersLogin';
import { getDataUsers } from '../reducers/ReducersUsers';

export const store = configureStore({
  reducer: {
    login : getDataLogin,
    dataUsers : getDataUsers,
    dataKursus : getDataKursus,
    datDetailKursus: getDataDetailKursus
  },
})