import Login from '@/features/auth/pages/Login'
import Dashboard from '@/features/dashboard/pages/Dashborad'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { GuestRoute } from './guards/GuestRoute'
import { ProtectedRoute } from './guards/ProtectedRoute'
import { Layout } from '@/components/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    element: <GuestRoute />, //verifica se o usuario esta logado e caso esteja, envia para a tela de dashboard
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    element: <ProtectedRoute />, // proteção de rotas, caso não esteja logado, envia para a tela de login
    children: [
      {
        element: <Layout />, // adiciona layout a pagina
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />
          }
        ]
      }
    ]
  }
])
