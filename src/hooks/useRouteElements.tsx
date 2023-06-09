import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import routes from '../configs/routes';
import DefaultLayout from '../layouts/DefaultLayout';
import NoneLayout from '../layouts/NoneLayout';
import Home from '../pages/Home'
import DangNhap from '../pages/DangNhap';
import QuanLyVe from '../pages/QuanLyVe';
import DoiSoatVe from '../pages/DoiSoatVe';
import CaiDat from '../pages/CaiDat';

const ProtectedRoute = () => {
  return true ? <Outlet /> : <Navigate to={routes.DangNhap} />
}

const RejectedRoute = () => {
  const isAuthenticated: boolean = true

  return !isAuthenticated ? <Outlet /> : <Navigate to={routes.home} />
}

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: routes.home,
          index: true,
          element: (
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          )
        },
        {
          path: routes.QuanLyVe,
          element: (
            <DefaultLayout>
              <QuanLyVe />
            </DefaultLayout>
          )
        },
        {
          path: routes.DoiSoatVe,
          element: (
            <DefaultLayout>
              <DoiSoatVe />
            </DefaultLayout>
          )
        },
        {
          path: routes.CaiDat,
          element: (
            <DefaultLayout>
              <CaiDat />
            </DefaultLayout>
          )
        },
        {
          path: routes.CaiDat_Goi,
          element: (
            <DefaultLayout>
              <CaiDat />
            </DefaultLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: routes.DangNhap,
          element: (
            <NoneLayout>
              <DangNhap />
            </NoneLayout>
          )
        }
      ]
    }
  ])

  return routeElement
}

export default useRouteElement