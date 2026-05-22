import { UiTopbar } from '@/components/ui/UiTopbar'
import { Helper } from '@/shared/helpers/Helper'
import {
  ArrowDownRight,
  ArrowUpRight,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet
} from 'lucide-react'

const stats = [
  {
    label: 'Saldo total',
    value: 28430.55,
    delta: '+8.2%',
    up: true,
    icon: Wallet,
    accent: 'var(--gradient-primary)'
  },
  {
    label: 'Receitas do mês',
    value: 14800,
    delta: '+12.4%',
    up: true,
    icon: TrendingUp,
    accent: 'linear-gradient(135deg,#22C55E,#16a34a)'
  },
  {
    label: 'Despesas do mês',
    value: 9650,
    delta: '-3.1%',
    up: false,
    icon: TrendingDown,
    accent: 'linear-gradient(135deg,#EF4444,#b91c1c)'
  },
  {
    label: 'Economia mensal',
    value: 5150,
    delta: '+22.0%',
    up: true,
    icon: PiggyBank,
    accent: 'linear-gradient(135deg,#3B82F6,#1d4ed8)'
  }
]

const Dashboard = () => {
  const currencyDate = () => {
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date())
    const year = new Date().getFullYear()

    return `${month} · ${year}`
  }

  return (
    <>
      <UiTopbar
        title="Olá, Jason 👋"
        subtitle={`Aqui está o resumo financeiro de ${currencyDate()}`}
      />
      <main className="p-4 lg:p-8 space-y-6">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Stats */}
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="card-elevated rounded-2xl p-4 lg:p-5 relative overflow-hidden"
              >
                <div
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl"
                  style={{ background: s.accent }}
                />
                <div className="flex items-center justify-between">
                  <div
                    className="h-9 w-9 rounded-lg grid place-items-center"
                    style={{ background: s.accent }}
                  >
                    <Icon className="h-4 w-4 text-background" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-0.5 text-[11px] font-medium px-2 py-0.5 rounded-full ${s.up ? 'text-primary bg-primary/10' : 'text-destructive bg-destructive/10'}`}
                  >
                    {s.up ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {s.delta}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="text-xl lg:text-2xl font-bold tracking-tight mt-1">
                    {Helper.currency(s.value)}
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default Dashboard
