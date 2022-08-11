import { configureStore } from '@reduxjs/toolkit';
import { getDataBelajar } from '../reducers/reducersBelajar/reducersBelajar';
import { getDataKursusBeli } from '../reducers/reducersBeli/reducersBeli';
import { getDataDetailKursus } from '../reducers/ReducersDetailKursus/ReducersDetailKursus';
import { getDataKursus } from '../reducers/ReducersKursus/ReducersKursus';
import { getDataKursusPublic } from '../reducers/ReducersKursusPublic/ReducersKursusPublic';
import { getDataLogin } from '../reducers/ReducersLogin';
import { getDataMetodePembayaran } from '../reducers/reducersMetodePembayaran/reducersMetodePembayaran';
import { getDataPembelianAdmin } from '../reducers/reducersPembelianAdmin/reducersPembelianAdmin';
import { getDataUsers } from '../reducers/ReducersUsers';

export const store = configureStore({
  reducer: {
    login : getDataLogin,
    dataUsers : getDataUsers,
    dataKursus : getDataKursus,
    datDetailKursus: getDataDetailKursus,
    dataKursusPublic : getDataKursusPublic,
    dataKursusBeli : getDataKursusBeli,
    dataBelajar : getDataBelajar,
    dataMetodePembayaran: getDataMetodePembayaran,
    dataPembelianAdmin: getDataPembelianAdmin
  },
})