import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './page/dashboard/dashboard';
import Prestasi from './page/prestasi/prestasi';
import KampusMerdeka from './page/kampusMerdeka/kampusMerdeka';
import Login from './page/login/login';
import Error from './page/error/error';
import Iku from './page/rektor/iku/iku';
import DashboardAdminUmum from './page/admin/adminUmum/dashboard/dashboard'
import DashboardCabang from './page/admin/adminCabang/dashboard/dashboard'

// protect route
import HasSigninRoute from './routes/hasSigninRoute';
import Iku2Route from './routes/iku2Route';
import RektorRoute from './routes/rektorRoute'
import AdminRoute from './routes/adminRoute'
import AdminUmumRoute from './routes/adminUmumRoute';
import AdminCabangRoute from './routes/adminCabangRoute'
import CreatePrestasi from './page/dosen/prestasi/createPrestasti/create';
import CreateKM from './page/dosen/kampusMerdeka/createKM/create';
import DetailKM from './page/dosen/kampusMerdeka/detailKM/detail';
import UpdateKM from './page/dosen/kampusMerdeka/updateKM/update';
import UploadDokumen from './page/dosen/uploadDokumen/upload';
import DetailPrestasi from './page/dosen/prestasi/detailPrestasi/detail';
import UpdatePrestasi from './page/dosen/prestasi/updatePrestasi/update';
import AdminPrestasi from './page/admin/adminUmum/prestasi/prestasi';
import DetailPrestasiUmum from './page/admin/adminUmum/prestasi/detailPrestasi/detail';
import UpdatePrestasiAdminUmum from './page/admin/adminUmum/prestasi/updatePrestasi/update';
import KampusMerdekaAdminUmum from './page/admin/adminUmum/kampusMerdeka/kampusMerdeka';
import DetailKMAdminUmum from './page/admin/adminUmum/kampusMerdeka/detail/detail';
import UpdateKMAdminUmum from './page/admin/adminUmum/kampusMerdeka/update/update';
import StatistikAdmin from './page/admin/adminUmum/statistik/statistik';
import DetailStatistik from './page/admin/adminUmum/statistik/detailStatistik';
import DetailStatistikRector from './page/rektor/detailStatistik/detailStatistik';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<HasSigninRoute />}>
          <Route path='/' element={<Login />} />
        </Route>

        <Route element={<Iku2Route />}>
          <Route path="dashboard">
            <Route index path='' element={<Dashboard />} />
            <Route path="prestasi">
              <Route path='' element={<Prestasi />} />
              <Route path='create' element={<CreatePrestasi />} />
              <Route path='detail/:detailPrestasi' element={<DetailPrestasi />} />
              <Route path='update/:detailPrestasi' element={<UpdatePrestasi />} />
              <Route path=':typeDokumen/:dokumen/:detailPrestasi' element={<UploadDokumen />} />
            </Route>
            <Route path="kampus-merdeka">
              <Route path='' element={<KampusMerdeka />} />
              <Route path='create' element={<CreateKM />} />
              <Route path='detail/:detailKM' element={<DetailKM />} />
              <Route path='update/:detailKM' element={<UpdateKM />} />
              <Route path=':typeDokumen/:dokumen/:detailKM' element={<UploadDokumen />} />
            </Route>
          </Route>
        </Route>

        <Route path="/iku" element={<RektorRoute />}>
          <Route index path="" element={<Iku />} />
          <Route path=":detailStat" element={<DetailStatistikRector />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route element={<AdminUmumRoute />}>
            <Route path="dashboard/admin/umum">
            </Route>
          </Route>
          <Route element={<AdminCabangRoute />}>
            {/* <Route path="/dashboard/admin" element={<DashboardCabang />} /> */}
            <Route path="/dashboard/admin">
              <Route path="" element={<DashboardAdminUmum />} />
              <Route path="statistik" element={<StatistikAdmin />} />
              <Route path="statistik/:detailStat" element={<DetailStatistik />} />
              <Route path="prestasi">
                <Route path="" element={<AdminPrestasi />} />
                <Route path="detail/:detailPrestasi" element={<DetailPrestasiUmum />} />
                <Route path="update/:detailPrestasi" element={<UpdatePrestasiAdminUmum />} />
                <Route path=':typeDokumen/:dokumen/:detailPrestasi' element={<UploadDokumen />} />
              </Route>
              <Route path="kampus-merdeka">
                <Route path="" element={<KampusMerdekaAdminUmum />} />
                <Route path="detail/:detailKM" element={<DetailKMAdminUmum />} />
                <Route path="update/:detailKM" element={<UpdateKMAdminUmum />} />
                <Route path=':typeDokumen/:dokumen/:detailKM' element={<UploadDokumen />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
