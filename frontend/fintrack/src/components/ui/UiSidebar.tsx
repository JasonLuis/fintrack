import { Link, useLocation } from 'react-router-dom'

import {
  ArrowLeftRight,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  // Settings,
  Sparkles,
  Tags,
  Target
} from 'lucide-react'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/transactions', label: 'Transações', icon: ArrowLeftRight },
  { to: '/categories', label: 'Categorias', icon: Tags },
  { to: '/cards', label: 'Cartões', icon: CreditCard },
  { to: '/goals', label: 'Metas', icon: Target },
  { to: '/reports', label: 'Relatórios', icon: BarChart3 }
  // { to: '/app/settings', label: 'Ajustes', icon: Settings }
]

export const UiSidebar = () => {
  const { pathname: path } = useLocation()
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar/60 backdrop-blur-xl">
      <div className="flex items-center gap-2 px-6 h-16 border-b border-border">
        <div
          className="h-9 w-9 rounded-xl grid place-items-center"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <Sparkles className="h-4 w-4 text-background" />
        </div>
        <div>
          <div className="text-sm font-bold tracking-tight">FinTrack</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
            finance OS
          </div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {items.map((item) => {
          const active = item.exact ? path === item.to : path.startsWith(item.to)
          const Icon = item.icon
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all relative group ${
                active
                  ? 'bg-primary/10 text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r bg-primary" />
              )}
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-3 m-3 rounded-xl card-elevated">
        <div className="text-xs text-muted-foreground">Plano</div>
        <div className="text-sm font-semibold mt-0.5">FinTrack Pro</div>
        <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-2/3" style={{ background: 'var(--gradient-primary)' }} />
        </div>
        <div className="mt-2 text-[11px] text-muted-foreground">68% das funcionalidades em uso</div>
      </div>
    </aside>
  )
}
