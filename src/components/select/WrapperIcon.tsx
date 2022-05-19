import { FC } from "react"

type Props = {
    className?: string
    classNameIcon?: string
    children: JSX.Element
    image?: string
}

export const WrapperIcon: FC<Props> = ({children, image, className, classNameIcon = ''}) => {
  return (
    <div className={`tw3-relative ${className}`}>
      <div className={`tw3-absolute tw3-z-10 tw3-pointer-events-none ${classNameIcon}`}>
        <img className="tw3-self-center" src={image} alt="img" />
      </div>
      {children}
    </div>
  )
}