import {
  Bell,
  CheckCheck,
  ChevronDown,
  CreditCard,
  LogOut,
  Settings,
  Target,
  TrendingDown,
  TrendingUp,
  User
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './dropdown-menu'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/features/auth/store/auth.store'

type PropsType = {
  title: string
  subtitle?: string
}

type Notification = {
  id: string
  icon: typeof Bell
  title: string
  description: string
  time: string
  tone: 'primary' | 'success' | 'warning' | 'destructive'
  unread: boolean
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    icon: CreditCard,
    title: 'Fatura Nubank fecha em 3 dias',
    description: 'R$ 2.000,90 — vencimento 21/05',
    time: 'agora',
    tone: 'warning',
    unread: true
  },
  {
    id: '2',
    icon: Target,
    title: 'Meta Viagem Gramado atingiu 75%',
    description: 'Faltam R$ 3.750 para concluir',
    time: '2h',
    tone: 'primary',
    unread: true
  },
  {
    id: '3',
    icon: TrendingDown,
    title: 'Gasto incomum em Restaurantes',
    description: '32% acima da média mensal',
    time: '5h',
    tone: 'destructive',
    unread: true
  },
  {
    id: '4',
    icon: TrendingUp,
    title: 'Salário de Jason recebido',
    description: '+ R$ 8.500,00 em Conta Itaú',
    time: 'ontem',
    tone: 'success',
    unread: false
  },
  {
    id: '5',
    icon: Target,
    title: 'Reserva de emergência completa',
    description: 'Parabéns! Meta de R$ 30.000 atingida',
    time: '2 dias',
    tone: 'success',
    unread: false
  }
]

const toneStyles: Record<Notification['tone'], string> = {
  primary: 'bg-primary/15 text-primary',
  success: 'bg-emerald-500/15 text-emerald-400',
  warning: 'bg-amber-500/15 text-amber-400',
  destructive: 'bg-destructive/15 text-destructive'
}

export const UiTopbar = (props: PropsType) => {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter((n) => n.unread).length
  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))

  const logout = useAuthStore((state) => state.logout)

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="flex items-center gap-4 px-4 lg:px-8 h-16">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg lg:text-xl font-semibold tracking-tight truncate">
            {props.title}
          </h1>
          {props.subtitle && (
            <p className="text-xs text-muted-foreground truncate">{props.subtitle}</p>
          )}
        </div>
        {/* <div className="hidden md:flex items-center gap-2 px-3 h-9 rounded-lg bg-secondary/50 border border-border w-72">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Buscar transações, metas…"
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
          />
          <kbd className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
            ⌘K
          </kbd>
        </div> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative h-9 w-9 grid place-items-center rounded-lg bg-secondary/50 border border-border hover:bg-secondary transition outline-none">
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[22rem] p-0">
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Notificações</span>
                {unreadCount > 0 && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/15 text-primary">
                    {unreadCount} novas
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-[11px] text-muted-foreground hover:text-foreground transition flex items-center gap-1"
                >
                  <CheckCheck className="h-3 w-3" />
                  Marcar como lidas
                </button>
              )}
            </div>
            <div className="max-h-[24rem] overflow-y-auto">
              {notifications.map((n) => {
                const Icon = n.icon
                return (
                  <div
                    key={n.id}
                    className="flex gap-3 px-3 py-3 hover:bg-accent/50 transition cursor-pointer border-b border-border/50 last:border-0 relative"
                  >
                    <div
                      className={`h-9 w-9 shrink-0 rounded-lg grid place-items-center ${toneStyles[n.tone]}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium leading-tight truncate">{n.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 truncate">
                        {n.description}
                      </div>
                      <div className="text-[10px] text-muted-foreground/70 mt-1">{n.time}</div>
                    </div>
                    {n.unread && (
                      <span className="absolute right-3 top-4 h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="border-t border-border p-2">
              <button className="w-full text-center text-xs font-medium text-muted-foreground hover:text-foreground transition py-1.5 rounded-md hover:bg-accent">
                Ver todas as notificações
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg bg-secondary/50 border border-border hover:bg-secondary transition outline-none">
              <div
                className="h-7 w-7 rounded-md grid place-items-center text-xs font-bold text-background"
                style={{ background: 'var(--gradient-primary)' }}
              >
                JF
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-medium leading-tight">Jason &amp; Fernanda</div>
                <div className="text-[10px] text-muted-foreground">Conta compartilhada</div>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="text-sm">Jason &amp; Fernanda</span>
                <span className="text-[10px] font-normal text-muted-foreground">
                  jason@fintrack.app
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem onClick={() => navigate('/app/settings')}>
              <User className="h-4 w-4" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/app/settings')}>
              <Settings className="h-4 w-4" />
              Configurações
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem
              onClick={() => {
                logout()
                navigate('/login')
              }}
              className="text-destructive focus:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
