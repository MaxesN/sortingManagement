import { FC } from "react"

type Props = {
    isChecked: boolean
    onChangeIsChecked: () => void
}

export const Switcher: FC<Props> = ({onChangeIsChecked, isChecked}) => {
  return (
    <div className="tw3-select-none">
      <div>
        <input onChange={onChangeIsChecked} checked={isChecked} className="tw3-invisible tw3-hidden tw3-w-0 tw3-h-0 tw3-opacity-0" type="checkbox" id="switch" />
      </div>
      <div  className={`tw3-text-black  tw3-text-sm tw3-border tw3-py-2 tw3-border-slate-300  before:tw3-bg-sky-100 tw3-inline-block tw3-rounded-3xl  before:tw3-top-0 before:-tw3-z-10 before:tw3-absolute tw3-relative before:tw3-duration-200 before:tw3-rounded-2xl before:tw3-h-9 ${isChecked ? "before:tw3-w-5/12  before:tw3-left-0" : "before:tw3-w-[62%] before:tw3-left-[38%]"}`}>
        <label className=" tw3-cursor-pointer tw3-py-2 tw3-pl-4 tw3-pr-3 " htmlFor="switch">Mano</label>
        <label className="tw3-cursor-pointer tw3-py-2 tw3-pr-4 tw3-pl-3" htmlFor="switch">Deleguotas</label>
      </div>
    </div>
  )
}