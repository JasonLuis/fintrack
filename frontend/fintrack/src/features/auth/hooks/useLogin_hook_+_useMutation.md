# useLogin Hook + useMutation — Explicação Completa

## O hook criado

```ts
import { useMutation } from '@tanstack/react-query'
import { login } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'

export function useLogin() {
  const setTokens = useAuthStore((state) => state.setTokens)

  return useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      setTokens(data.access_token, data.refresh_token)
    }
  })
}
```

---

# Primeiro: o que é esse hook?

```ts
export function useLogin()
```

é um:

```txt
Custom Hook
```

---

# O que é Custom Hook?

É simplesmente:

```txt
uma função reutilizável com lógica React
```

---

# Exemplo simples

```ts
function useCounter() {
  const [count, setCount] = useState(0)

  return {
    count,
    increment: () => setCount((v) => v + 1)
  }
}
```

---

# Então o `useLogin`

encapsula:

- chamada API
- loading
- erro
- sucesso
- salvar token

Tudo em um único lugar.

---

# O que ele resolve?

Sem hook:

```tsx
Login.tsx
```

teria:

- fetch
- loading
- token
- erro
- persistência

Tudo misturado.

---

# Com hook

A tela fica limpa.

---

# Agora vamos para:

# useMutation

---

# O que é React Query?

[TanStack Query](https://tanstack.com/query/latest?utm_source=chatgpt.com)

É uma biblioteca para:

- requests
- cache
- loading
- sincronização de dados

---

# Ela possui dois hooks principais

---

# useQuery

Usado para:

```txt
GET
```

buscar dados.

---

# useMutation

Usado para:

```txt
POST
PUT
DELETE
PATCH
```

ações que modificam dados.

---

# Login é uma mutation

Porque:

```txt
POST /auth/login
```

---

# O que useMutation faz?

Ele gerencia automaticamente:

- loading
- erro
- sucesso
- retry
- estados assíncronos

---

# Exemplo SEM React Query

Você faria:

```ts
const [loading, setLoading] = useState(false)

const login = async () => {
  try {
    setLoading(true)

    const response = await fetch(...)

  } catch(error) {

  } finally {
    setLoading(false)
  }
}
```

---

# Com useMutation

Tudo isso fica automático.

---

# Essa linha

```ts
return useMutation({
```

cria uma mutation.

---

# mutationFn

```ts
mutationFn: login,
```

Define:

```txt
qual função será executada
```

---

# Então:

```txt
mutateAsync()
```

↓

executa:

```ts
login()
```

---

# O login()

vem daqui:

```ts
import { login } from '../services/auth.service'
```

---

# Esse service faz:

```txt
fetch POST login
```

---

# onSuccess

```ts
onSuccess: (data) => {
  setTokens(data.access_token, data.refresh_token)
}
```

Executa automaticamente:

```txt
quando a mutation dá certo
```

---

# Fluxo completo

```txt
Usuário clica Entrar
↓
mutateAsync()
↓
useMutation executa mutationFn
↓
auth.service.ts faz fetch
↓
API responde
↓
onSuccess executa
↓
setTokens salva no Zustand
↓
persist salva no localStorage
```

---

# O que o useMutation retorna?

MUITA coisa útil.

---

# mutate

Executa mutation.

```ts
mutate(data)
```

---

# mutateAsync

Versão async/await.

```ts
await mutateAsync(data)
```

---

# isPending

Loading da request.

```txt
true / false
```

---

# error

Erro da mutation.

---

# isSuccess

Se deu sucesso.

---

# isError

Se deu erro.

---

# Exemplo real

```ts
const { mutateAsync, isPending, error } = useLogin()
```

---

# mutateAsync

Executa login.

---

# isPending

Controla loading.

---

# error

Mostra erro na tela.

---

# Exemplo na prática

```ts
const onSubmit = async (data) => {
  await mutateAsync(data)
}
```

---

# Enquanto request acontece

```txt
isPending = true
```

---

# Então o botão pode fazer:

```tsx
disabled = { isPending }
```

---

# O mais importante

Você separou:

---

# UI

```txt
Login.tsx
```

---

# Lógica assíncrona

```txt
useLogin.ts
```

---

# HTTP

```txt
auth.service.ts
```

---

# Estado global

```txt
auth.store.ts
```

---

# Isso é arquitetura frontend moderna

---

# Estrutura final

```txt
Login.tsx
↓
useLogin.ts
↓
auth.service.ts
↓
fetch API
↓
auth.store.ts
```

---

# Por que isso é MUITO bom?

Porque:

- desacopla responsabilidades
- facilita manutenção
- facilita testes
- facilita reutilização

---

# React moderno usa MUITO isso

Especialmente:

- SaaS
- dashboards
- fintechs
- aplicações enterprise

---

# useMutation vs useQuery

## useQuery

Buscar dados:

```txt
GET /transactions
GET /profile
GET /dashboard
```

---

# useMutation

Modificar dados:

```txt
POST /login
POST /transactions
PUT /profile
DELETE /card
```

---

# Resumo final

```txt
Custom Hook = lógica reutilizável
useMutation = gerencia requests POST/PUT/DELETE
mutationFn = função executada
onSuccess = callback de sucesso
isPending = loading
mutateAsync = executa request
```

---

# Conceito principal

O hook `useLogin` existe para:

```txt
encapsular toda lógica do login
```

e deixar a tela:

```txt
somente responsável pela UI
```
