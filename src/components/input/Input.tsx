import { ChangeEvent, HTMLInputTypeAttribute , FC } from "react"

type Props = {
    type: HTMLInputTypeAttribute
    placeholder: string
    isValid: boolean
    value: string 
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
  }

export const Input: FC<Props> = ({type, onChangeValue, placeholder, isValid, value}) => {
 
  return(
    <>
      <div className={ isValid ? "tw3-relative tw3-mb-6" : "tw3-relative"}>
        <div className="tw3-flex">
          <input 
            autoComplete={type ==="password" ? 'on' : 'off'}
            className={ `
           placeholder:tw3-text-sm focus:tw3-outline-none tw3-border-2 tw3-duration-200 tw3-border-slate-300   tw3-w-full tw3-py-2  tw3-pl-4 tw3-pr-12
           ${type === 'tel' ? ' tw3-rounded-r-md' : 'tw3-rounded-md'}
           ${isValid ? '' : 'focus:tw3-border-red-500'}` }
            placeholder={placeholder}
            value={value}
            onChange={onChangeValue}
          />
        </div>
      </div>
      { !isValid && <div className="tw3-text-left tw3-mb-1 tw3-text-red-500">{type === 'text' ? "Nurodytas neteisingas prisijungimas" : 'Nurodytas neteisingas slaptažodis'}</div>}
    </>
  )
}