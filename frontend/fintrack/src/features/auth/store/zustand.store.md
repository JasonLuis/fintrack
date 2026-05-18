# Zustand Store — Explicação Completa

## O que é Zustand?

[Zustand](https://zustand-demo.pmnd.rs?utm_source=chatgpt.com)

Zustand é uma biblioteca de gerenciamento de estado global para React.

Pense assim:

```txt
useState  -> estado local do componente
Zustand   -> estado global da aplicação
```

---

# O que é uma Store?

Uma store é um local global onde a aplicação guarda estados importantes.

Exemplos:

- usuário logado
- token JWT
- tema dark/light
- carrinho de compras
- filtros globais

---

# Store de autenticação

## Código

```ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = {
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean

  setTokens: (accessToken: string, refreshToken: string) => void

  logout: () => void
}
```

---

# O que esse type representa?

Define o formato da store.

A store terá:

```ts
accessToken
refreshToken
isAuthenticated
```

e também funções:

```ts
setTokens()
logout()
```

---

# Criando a store

```ts
export const useAuthStore = create<AuthState>()(
```

Aqui o Zustand cria a store global.

---

# Por que começa com "use"?

Porque ela é usada como hook.

Exemplo:

```ts
const token = useAuthStore((state) => state.accessToken)
```

---

# Mas ela é hook?

Ela funciona como hook, mas tecnicamente é:

```txt
uma store global acessada via hook
```

---

# Persist Middleware

```ts
persist(
```

Esse middleware salva automaticamente os dados no:

```txt
localStorage
```

---

# Estado inicial

```ts
(set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
```

Usuário começa:

```txt
deslogado
```

---

# A função setTokens

```ts
setTokens: (accessToken, refreshToken) =>
  set({
    accessToken,
    refreshToken,
    isAuthenticated: true
  }),
```

---

# O que ela faz?

Quando o login dá certo:

```ts
setTokens(access_token, refresh_token)
```

Ela:

- salva os tokens
- marca usuário como autenticado

---

# Resultado

```txt
isAuthenticated = true
```

---

# A função logout

```ts
logout: () =>
  set({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false
  })
```

---

# O que ela faz?

Limpa:

- access token
- refresh token
- autenticação

---

# Resultado

```txt
usuário deslogado
```

---

# Configuração do persist

```ts
{
  name: 'fintrack-auth'
}
```

Define o nome salvo no localStorage.

---

# Exemplo real

```txt
localStorage["fintrack-auth"]
```

---

# Como usar no componente

## Pegando token

```ts
const token = useAuthStore((state) => state.accessToken)
```

---

# Pegando autenticação

```ts
const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
```

---

# Salvando login

```ts
const setTokens = useAuthStore((state) => state.setTokens)

setTokens(data.access_token, data.refresh_token)
```

---

# Fazendo logout

```ts
const logout = useAuthStore(
  (state) => state.logout
)

<button onClick={logout}>
  Sair
</button>
```

---

# Fluxo completo da autenticação

```txt
Usuário faz login
↓
API retorna tokens
↓
setTokens salva na store
↓
persist salva no localStorage
↓
Usuário continua logado mesmo após F5
```

---

# Estrutura ideal

```txt
src/
└── features/
    └── auth/
        ├── hooks/
        ├── services/
        ├── store/
        │   └── auth.store.ts
        ├── types/
        └── use-cases/
```

---

# Vantagens do Zustand

- simples
- leve
- rápido
- pouca boilerplate
- excelente DX
- muito usado no React moderno

---

# Zustand vs Context API

## Context API

Bom para:

- temas
- idioma
- estados simples

---

## Zustand

Melhor para:

- autenticação
- aplicações maiores
- estados globais complexos
- múltiplos componentes

---

# O que o Zustand resolve

Sem Zustand:

```txt
prop drilling
```

Você teria que passar props por vários componentes.

---

# Com Zustand

Qualquer componente acessa o estado global diretamente.

---

# Exemplo visual

```txt
Navbar
Sidebar
Dashboard
Profile
```

Todos conseguem acessar:

```txt
accessToken
isAuthenticated
user
```

sem props.

---

# Resumo final

```txt
Store = estado global
useAuthStore = hook para acessar a store
persist = salva no localStorage
set = atualiza o estado
logout = limpa autenticação
```

---

# Conceito importante

Pense na store como:

```txt
useState global da aplicação
```
