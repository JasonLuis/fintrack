export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  acess_token: string
  refresh_token: string
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) throw new Error('E-mail ou senha inválidos')

  return response.json()
}
