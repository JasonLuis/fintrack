import { Outlet } from 'react-router-dom'
import { UiSidebar } from '../ui/UiSidebar'
import { UiMobileTabBar } from '../ui/UIMolileTabBar'

export const Layout = () => {
  return (
    <div className="min-h-screen flex w-full bg-background text-foreground">
      <UiSidebar />
      <div className="flex-1 min-w-0 flex flex-col pb-20 lg:pb-0">
        <Outlet />
      </div>
      <UiMobileTabBar />
    </div>
  )
}
