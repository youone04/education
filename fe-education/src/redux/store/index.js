import { configureStore } from '@reduxjs/toolkit';
import { getDataBatch } from '../reducers/reducersBatch/reducersBatch';
import { getDataBelajar } from '../reducers/reducersBelajar/reducersBelajar';
import { getDataKursusBeli } from '../reducers/reducersBeli/reducersBeli';
import { getDataDetailKursus } from '../reducers/ReducersDetailKursus/ReducersDetailKursus';
import { getDataDetailKursusPublic } from '../reducers/reducersDetailKursusPublic/reducersDetailKursusPublic';
import { getDataSertifikat } from '../reducers/reducerSertifikat/reducerSertifikat';
import { getDataKursus } from '../reducers/ReducersKursus/ReducersKursus';
import { getDataKursusPublic } from '../reducers/ReducersKursusPublic/ReducersKursusPublic';
import { getDataLogin } from '../reducers/ReducersLogin';
import { getDataMetodePembayaran } from '../reducers/reducersMetodePembayaran/reducersMetodePembayaran';
import { getDataPembelianAdmin } from '../reducers/reducersPembelianAdmin/reducersPembelianAdmin';
import { getDataPendapatanBatch } from '../reducers/reducersPendapatanBatch/reducersPendapatanBatch';
import { getDataPendapatanPengajar } from '../reducers/reducersPendapatanPengajar/reducersPendapatanPengajar';
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
    dataPembelianAdmin: getDataPembelianAdmin,
    dataPendapatanBatch : getDataPendapatanBatch,
    dataBatch : getDataBatch,
    dataPendapatanPengajar: getDataPendapatanPengajar,
    dataDetailKursusPublic: getDataDetailKursusPublic,
    dataSertifikat : getDataSertifikat
  },
})