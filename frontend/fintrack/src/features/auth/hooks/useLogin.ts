import { login } from '../services/auth.services'
import { useAuthStore } from '../store/auth.store'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  const setTokens = useAuthStore((state) => state.setTokens)

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setTokens(data.acess_token, data.refresh_token)
    }
  })
}
