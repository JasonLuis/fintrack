import { Area, AreaChart, ResponsiveContainer } from 'recharts'

export function UiAreaChart() {
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
        <Area type="monotone" dataKey="income" stroke="#22C55E" strokeWidth={2.5} fill="url(#lg)" />
        <Area
          type="monotone"
          dataKey="expense"
          stroke="#EF4444"
          strokeWidth={2.5}
          fill="url(#gExpense)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
