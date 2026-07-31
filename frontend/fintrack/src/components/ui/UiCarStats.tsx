import { Helper } from '@/shared/helpers/Helper'
import { ArrowDownRight, ArrowUpRight, type LucideProps } from 'lucide-react'

export type CardStatsType = {
  label: string
  value: number
  delta: string
  up: boolean
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  accent: string
}

export default function UiCarStats(props: CardStatsType) {
  const Icon = props.icon
  return (
    <div
      key={props.label}
      className="card-elevated rounded-2xl p-4 lg:p-5 relative overflow-hidden"
    >
      <div
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl"
        style={{ background: props.accent }}
      />
      <div className="flex items-center justify-between">
        <div
          className="h-9 w-9 rounded-lg grid place-items-center"
          style={{ background: props.accent }}
        >
          <Icon className="h-4 w-4 text-background" />
        </div>
        <span
          className={`inline-flex items-center gap-0.5 text-[11px] font-medium px-2 py-0.5 rounded-full ${props.up ? 'text-primary bg-primary/10' : 'text-destructive bg-destructive/10'}`}
        >
          {props.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {props.delta}
        </span>
      </div>
      <div className="mt-4">
        <div className="text-xs text-muted-foreground">{props.label}</div>
        <div className="text-xl lg:text-2xl font-bold tracking-tight mt-1">
          {Helper.currency(props.value)}
        </div>
      </div>
    </div>
  )
}
