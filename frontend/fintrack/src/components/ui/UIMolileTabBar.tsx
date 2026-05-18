import { ArrowLeftRight, BarChart3, CreditCard, LayoutDashboard, Tags, Target } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/transactions', label: 'Transações', icon: ArrowLeftRight },
  { to: '/categories', label: 'Categorias', icon: Tags },
  { to: '/cards', label: 'Cartões', icon: CreditCard },
  { to: '/goals', label: 'Metas', icon: Target },
  { to: '/reports', label: 'Relatórios', icon: BarChart3 }
  // { to: '/app/settings', label: 'Ajustes', icon: Settings }
]

export const UiMobileTabBar = () => {
  const { pathname: path } = useLocation()
  const tabs = items.slice(0, 5)
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl">
      <div className="grid grid-cols-5">
        {tabs.map((t) => {
          const Icon = t.icon
          const active = t.exact ? path === t.to : path.startsWith(t.to)
          return (
            <Link
              key={t.to}
              to={t.to}
              className={`flex flex-col items-center justify-center py-2.5 text-[10px] gap-1 ${active ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Icon className="h-5 w-5" />
              {t.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
