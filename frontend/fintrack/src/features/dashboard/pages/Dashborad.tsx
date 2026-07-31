import { UiTopbar } from '@/components/ui/UiTopbar'
import UiCarStats, { type CardStatsType } from '@/components/ui/UiCarStats'

import { PiggyBank, TrendingDown, TrendingUp, Wallet } from 'lucide-react'

const stats: CardStatsType[] = [
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
            return <UiCarStats {...s} />
          })}
        </section>
      </main>
    </>
  )
}

export default Dashboard
