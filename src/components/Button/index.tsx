import React, { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

import Icons from '../Icons'

const Button: React.FC<
  PropsWithChildren<{
    onClick?: () => void
    className?: string
    disabled?: boolean
    hide?: boolean
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
    size?: 'medium' | 'large'
    loading?: boolean
  }>
> = ({
  children,
  onClick,
  className,
  disabled,
  hide,
  type,
  loading,
  variant = 'primary',
  size = 'medium'
}) => {
  if (hide) {
    return null
  }
  return (
    <button
      type={type || 'button'}
      className={cn(
        'cursor-pointer rounded',
        'flex items-center justify-center gap-2',
        className,
        {
          'p-2.5': size === 'medium',
          'px-8 py-4': size === 'large'
        },
        {
          'bg-white-fe text-2xl': variant === 'primary',
          'bg-blue-300 active:bg-blue-300': disabled && variant === 'primary',
          '': variant === 'secondary',
          '': disabled && variant === 'secondary'
        }
      )}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <Icons.spinner className="animate-spin" size={20} /> : null}{' '}
      {children}
    </button>
  )
}

export default Button
