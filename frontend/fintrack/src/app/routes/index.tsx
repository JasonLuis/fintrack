import Login from '@/features/auth/pages/Login'
import Dashboard from '@/features/dashboard/Dashborad'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])
