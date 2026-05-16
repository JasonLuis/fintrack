import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const Login = () => {

    const currency = (n: number) =>
        n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    const monthlySeries = [
        { month: "Jan", income: 12400, expense: 8200 },
        { month: "Fev", income: 11800, expense: 7950 },
        { month: "Mar", income: 13200, expense: 9100 },
        { month: "Abr", income: 12900, expense: 8600 },
        { month: "Mai", income: 13800, expense: 9400 },
        { month: "Jun", income: 14250, expense: 8950 },
        { month: "Jul", income: 14600, expense: 9650 },
        { month: "Ago", income: 15100, expense: 10120 },
        { month: "Set", income: 14800, expense: 9700 },
        { month: "Out", income: 15400, expense: 10500 },
        { month: "Nov", income: 15900, expense: 10800 },
        { month: "Dez", income: 16800, expense: 11200 },
    ];
    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">
            <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden" style={{ background: "linear-gradient(160deg, #0F172A 0%, #0a1f3d 60%, #0d2e1f 100%)" }}>
                <div className="absolute -top-32 -left-20 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-20 blur-3xl bg-accent" />

                <Link to="/" className="relative flex items-center gap-2 text-foreground">
                    <div className="h-10 w-10 rounded-xl grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                        <Sparkles className="h-5 w-5 text-background" />
                    </div>
                    <div>
                        <div className="font-bold tracking-tight">FinTrack</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">finance OS</div>
                    </div>
                </Link>

                <div className="relative space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight leading-tight max-w-md">
                        Controle suas finanças de forma <span className="gradient-text">simples e inteligente</span>.
                    </h2>
                    <div className="relative max-w-sm">
                        <div className="rounded-[2.5rem] border border-border bg-card/80 backdrop-blur p-4 shadow-2xl">
                            <div className="rounded-3xl bg-background p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                            Saldo
                                        </div>
                                        <div className="text-xl font-bold">{currency(28430.55)}</div>
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
                                        <div className="text-sm font-semibold text-primary">{currency(14800)}</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/40 p-2">
                                        <div className="text-[9px] text-muted-foreground">Receitas</div>
                                        <div className="text-sm font-semibold">{currency(14800)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;