# React Hook Form + Zod — Explicação Completa

## Visão geral

Hoje no React moderno, a combinação:

- React Hook Form
- Zod

virou praticamente o padrão para formulários.

Essa combinação resolve:

- validação
- tipagem
- gerenciamento de formulário
- erros
- performance
- integração com API

---

# Fluxo completo

```txt
Usuário digita
↓
React Hook Form captura
↓
Zod valida
↓
Se inválido:
  mostra erro
↓
Se válido:
  submit executa
```

---

# Parte 1 — O que é Zod?

Zod é uma biblioteca de:

- validação
- tipagem TypeScript

Ela permite definir regras para objetos.

---

# Exemplo simples

```ts
const schema = z.object({
  name: z.string(),
  age: z.number()
})
```

Isso define:

```txt
Objeto:
- name -> string
- age -> number
```

---

# Schema do Login

```ts
const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  remember: z.boolean().optional()
})
```

Aqui estamos definindo as regras do formulário.

---

# Campo email

```ts
email: z.string().email('Informe um e-mail válido')
```

Significa:

```txt
- precisa ser string
- precisa ser email válido
```

---

# Campo password

```ts
password: z.string().min(6)
```

Significa:

```txt
- string
- mínimo 6 caracteres
```

---

# Campo remember

```ts
remember: z.boolean().optional()
```

Significa:

```txt
- boolean
- opcional
```

---

# z.infer

```ts
type FormValues = z.infer<typeof schema>
```

Isso gera automaticamente:

```ts
type FormValues = {
  email: string
  password: string
  remember?: boolean
}
```

Sem precisar escrever manualmente.

---

# Vantagem disso

Sem Zod:

```ts
type FormValues = {
  email: string
  password: string
}
```

e depois:

```ts
if (password.length < 6)
```

Com Zod:

- validação centralizada
- tipagem automática
- menos repetição
- menos bugs

---

# Parte 2 — useForm

O `useForm` vem do:

React Hook Form.

Ele controla:

- inputs
- estado
- submit
- erros
- loading
- validação

---

# Destructuring

```ts
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm<FormValues>({
```

Isso é um destructuring.

---

# Tipagem do formulário

```ts
useForm<FormValues>()
```

Significa:

```txt
Esse formulário usa o tipo FormValues
```

Agora o React Hook Form sabe:

```txt
email -> string
password -> string
remember -> boolean
```

---

# O que vem do useForm

## register

Conecta os inputs ao formulário.

---

## handleSubmit

Valida e executa o submit.

---

## errors

Contém os erros de validação.

---

## isSubmitting

Indica se o formulário está sendo enviado.

---

# Parte 3 — Resolver

```ts
resolver: zodResolver(schema),
```

Essa linha conecta:

```txt
React Hook Form
↓
Zod
```

Fluxo:

```txt
handleSubmit
↓
Zod valida schema
↓
Se válido:
  submit executa
↓
Se inválido:
  errors preenchido
```

---

# Parte 4 — register

```tsx
<input {...register('email')} />
```

O `register` conecta o input ao formulário.

Ele adiciona automaticamente:

```txt
- onChange
- onBlur
- ref
- name
- controle interno
```

---

# Sem React Hook Form

Você faria:

```tsx
const [email, setEmail] = useState('')
```

e:

```tsx
onChange={(e) => setEmail(e.target.value)}
```

---

# Com register

Tudo isso é automático.

---

# Parte 5 — errors

```tsx
{
  errors.email && <p>{errors.email.message}</p>
}
```

Significa:

```txt
Se existir erro no email
↓
mostra mensagem
```

---

# Exemplo

Usuário digita:

```txt
abc
```

Zod valida:

```txt
não é email válido
```

Então:

```ts
errors.email.message
```

vira:

```txt
"Informe um e-mail válido"
```

---

# Parte 6 — handleSubmit

```tsx
<form onSubmit={handleSubmit(() => {})}>
```

O `handleSubmit`:

```txt
1. previne reload
2. valida schema
3. executa callback
```

---

# Exemplo real

```tsx
const onSubmit = (data: FormValues) => {
  console.log(data)
}
```

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
```

---

# Dados recebidos

```ts
{
  email: 'teste@gmail.com',
  password: '123456',
  remember: true
}
```

---

# Parte 7 — isSubmitting

```tsx
disabled = { isSubmitting }
```

Significa:

```txt
Durante submit:
↓
desabilita botão
```

Muito usado para evitar:

- duplo clique
- múltiplas requests

---

# O que o mercado usa hoje

React moderno geralmente usa:

- React Hook Form
- Zod

Porque isso resolve:

- performance
- tipagem
- validação
- DX
- integração backend

---

# O mais forte do Zod

Você pode usar o MESMO schema no:

- frontend
- backend

---

# Exemplo

```ts
auth.schema.ts
```

Usado em:

- React
- Node
- API

---

# Benefícios

- evita divergência
- reduz bugs
- centraliza regras

---

# Próximos passos para estudar

## 1. register

Entender como inputs são conectados.

---

## 2. handleSubmit

Entender fluxo de submit.

---

## 3. Submit real

Integrar com API.

---

## 4. React Query

Gerenciar requests.

---

## 5. Estados de loading/error

Experiência do usuário.

---

# Conclusão

Você já está entrando no padrão profissional de React moderno.

Essa stack:

- React Hook Form
- Zod
- React Query

é extremamente usada em:

- SaaS
- fintechs
- dashboards
- sistemas corporativos
- startups
