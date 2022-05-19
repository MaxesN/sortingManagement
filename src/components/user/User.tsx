import { FC } from 'react'

type Props = {
  name: string
  lastItem: boolean
  className?: string
}

const stringToColor = (name: string) => {
  let hash = 0
  let i

  for (i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  return color
}

export const User: FC<Props> = ({ name, lastItem, className = '' }) => {
  return (
    <div className={`tw3-relative tw3-group ${className}`}>
      <div
        style={{ background: `${stringToColor(name)}` }}
        className="tw3-flex tw3-justify-center tw3-items-center tw3-mr-[-8px] tw3-w-[24px] tw3-h-[24px] tw3-text-lg tw3-text-white tw3-rounded-full  tw3-cursor-pointer tw3-select-none"
      >
        {name[0].toUpperCase()}
      </div>
      <div
        className={`tw3-bg-white group-hover:tw3-opacity-100 tw3-opacity-0 group-hover:tw3-visible tw3-invisible tw3-whitespace-nowrap tw3-z-40 tw3-shadow-md tw3-duration-150 tw3-rounded-md tw3-py-1 tw3-absolute tw3-px-3 ${
          lastItem ? 'tw3-bottom-9' : 'tw3-top-9'
        }`}
      >
        {name}
      </div>
    </div>
  )
}
