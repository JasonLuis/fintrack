import { useAuthStore } from '@/features/auth/store/auth.store'
import { Navigate, Outlet } from 'react-router-dom'

// Caso o usuario esteja logado, manda direto para tela do dashboard
export const GuestRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (isAuthenticated) return <Navigate to="/dashboard" />

  return <Outlet />
}
