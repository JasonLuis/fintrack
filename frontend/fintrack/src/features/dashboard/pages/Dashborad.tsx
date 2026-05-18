import { UiTopbar } from '@/components/ui/UiTopbar'

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
    </>
  )
}

export default Dashboard
