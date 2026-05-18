import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { ComponentPropsWithoutRef } from 'react'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>

export function DropdownMenuContent({
  className = '',
  sideOffset = 8,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={`z-50 min-w-48 rounded-xl border border-border bg-card p-1 text-foreground shadow-xl outline-none ${className}`}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>

export function DropdownMenuItem({ className = '', ...props }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={`flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none transition-colors hover:bg-secondary focus:bg-secondary ${className}`}
      {...props}
    />
  )
}

type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>

export function DropdownMenuLabel({ className = '', ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={`px-3 py-2 text-sm font-semibold ${className}`}
      {...props}
    />
  )
}

type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>

export function DropdownMenuSeparator({ className = '', ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator className={`my-1 h-px bg-border ${className}`} {...props} />
  )
}
