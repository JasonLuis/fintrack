import { Link } from 'react-router-dom'
import { z } from 'zod'
import { Sparkles, Mail, Lock, EyeOff, Eye, ArrowRight } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { Helper } from '@/shared/helpers/Helper'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleIcon from '@/assets/google-icon.svg'

const form = z.object({
  email: z.email({ message: 'Informe um e-mail válido' }),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  remember: z.boolean().optional()
})

type FormValues = z.infer<typeof form>

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(form),
    defaultValues: { email: '', password: '', remember: true }
  })

  const monthlySeries = [
    { month: 'Jan', income: 12400, expense: 8200 },
    { month: 'Fev', income: 11800, expense: 7950 },
    { month: 'Mar', income: 13200, expense: 9100 },
    { month: 'Abr', income: 12900, expense: 8600 },
    { month: 'Mai', income: 13800, expense: 9400 },
    { month: 'Jun', income: 14250, expense: 8950 },
    { month: 'Jul', income: 14600, expense: 9650 },
    { month: 'Ago', income: 15100, expense: 10120 },
    { month: 'Set', income: 14800, expense: 9700 },
    { month: 'Out', income: 15400, expense: 10500 },
    { month: 'Nov', income: 15900, expense: 10800 },
    { month: 'Dez', income: 16800, expense: 11200 }
  ]
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">
      {/*Parte esquerda*/}
      <div
        className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0F172A 0%, #0a1f3d 60%, #0d2e1f 100%)' }}
      >
        <div
          className="absolute -top-32 -left-20 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-20 blur-3xl bg-accent" />

        <Link to="/" className="relative flex items-center gap-2 text-foreground">
          <div
            className="h-10 w-10 rounded-xl grid place-items-center"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <Sparkles className="h-5 w-5 text-background" />
          </div>
          <div>
            <div className="font-bold tracking-tight">FinTrack</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              finance OS
            </div>
          </div>
        </Link>

        <div className="relative space-y-8">
          <h2 className="text-4xl font-bold tracking-tight leading-tight max-w-md">
            Controle suas finanças de forma{' '}
            <span className="gradient-text">simples e inteligente</span>.
          </h2>
          <div className="relative max-w-sm">
            <div className="rounded-[2.5rem] border border-border bg-card/80 backdrop-blur p-4 shadow-2xl">
              <div className="rounded-3xl bg-background p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      Saldo
                    </div>
                    <div className="text-xl font-bold">{Helper.currency(28430.55)}</div>
                  </div>
                  <div className="px-2 py-0.5 rounded-full text-[10px] bg-primary/15 text-primary">
                    +8.2%
                  </div>
                </div>
                <div className="h-28">
                  <ResponsiveContainer>
                    <AreaChart data={monthlySeries}>
                      <defs>
                        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22C55E" stopOpacity={0.7} />
                          <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="gExpense" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#EF4444" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#22C55E"
                        strokeWidth={2.5}
                        fill="url(#lg)"
                      />
                      <Area
                        type="monotone"
                        dataKey="expense"
                        stroke="#EF4444"
                        strokeWidth={2.5}
                        fill="url(#gExpense)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-secondary/40 p-2">
                    <div className="text-[9px] text-muted-foreground">Receitas</div>
                    <div className="text-sm font-semibold text-primary">
                      {Helper.currency(14800)}
                    </div>
                  </div>
                  <div className="rounded-xl bg-secondary/40 p-2">
                    <div className="text-[9px] text-muted-foreground">Despesas</div>
                    <div className="text-sm font-semibold">{Helper.currency(1300)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="text-lg font-bold gradient-text">+5</div>
              <div className="text-[11px] text-muted-foreground">Casais conectados</div>
            </div>
            <div>
              <div className="text-lg font-bold gradient-text">R$ 2K</div>
              <div className="text-[11px] text-muted-foreground">Movimentados</div>
            </div>
            <div>
              <div className="text-lg font-bold gradient-text">5</div>
              <div className="text-[11px] text-muted-foreground">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte da direita - Tela de login */}
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-2">
            <div
              className="h-9 w-9 rounded-xl grid place-items-center bg-gradient"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <span className="font-bold">FinTrack</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bem-vindo(a) de volta 👋</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Acesse sua conta para continuar gerenciando suas finanças.
            </p>
          </div>
          <form onSubmit={handleSubmit(() => {})} className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">E-mail</label>
              <div className="mt-1 flex items-center gap-2 px-3 h-11 rounded-xl border border-border bg-secondary/40 focus-within:border-primary transition">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input
                  {...register('email')}
                  type="email"
                  placeholder="voce@email.com"
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs text-muted-foreground">Senha</label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Esqueci a senha
                </Link>
              </div>
              <div className="mt-1 flex items-center gap-2 px-3 h-11 rounded-xl border border-border bg-secondary/40 focus-within:border-primary transition">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-destructive mt-1">{errors.password.message}</p>
              )}
            </div>
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <input
                type="checkbox"
                {...register('remember')}
                className="accent-primary h-4 w-4 rounded"
              />
              Lembrar de mim
            </label>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full h-11 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 text-background transition hover:opacity-90 cursor-pointer"
              style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }}
            >
              Entrar <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex-1 h-px bg-border" />
              ou continue com
              <span className="flex-1 h-px bg-border" />
            </div>
            <button
              type="button"
              className="w-full h-11 rounded-xl border border-border bg-secondary/40 hover:bg-secondary text-sm font-medium inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <img className="w-4 h-4" src={GoogleIcon} alt="teste" />
              Google
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
