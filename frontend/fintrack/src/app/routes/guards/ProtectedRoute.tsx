import { useAuthStore } from '@/features/auth/store/auth.store'
import { Navigate, Outlet } from 'react-router-dom'

// Proteção de rotas: caso o usuario não esteja logado, sera redirecionado para a tela de login

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) return <Navigate to="/" />

  return <Outlet />
}
