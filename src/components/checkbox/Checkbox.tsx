import { FC } from 'react'

type Props = {
  className?: string
}
export const Checkbox: FC<Props> = ({ className }) => {
  return (
    <input
      className={`tw3-w-[17px] tw3-outline-none tw3-h-[17px] ${className}`}
      type="checkbox"
    />
  )
}
