import ReactDatePicker from "react-datepicker"
import './DatePicker.css'

import { FC } from "react"

import dateIcon from '../../assets/date.svg'
import arrowSelect from '../../assets/arrowSelect.svg'

import "react-datepicker/dist/react-datepicker.css";

type Props = {
    className?: string
    classNameIcon?: string
    date: Date
    onChangeDate: (date: Date) => void
    withIcon?: boolean
}

export const DatePicker: FC<Props> = ({date, onChangeDate, withIcon = false, classNameIcon = '', className = '' }) => {
  return (
    <div className={`tw3-relative ${className}`}>
      <div  className={`tw3-absolute tw3-z-10 tw3-top-2 tw3-left-3 ${classNameIcon} ${withIcon ? '' : 'tw3-hidden'}`}> <img src={dateIcon} alt="dateIcon" /> </div>
      <ReactDatePicker placeholderText="" customInput={ <input className={` ${withIcon ? 'tw3-py-2 tw3-pl-10 tw3-pr-5' : 'tw3-py-2 tw3-pl-2 tw3-pr-5'} tw3-border-2 tw3-border-slate-300 tw3-rounded-md tw3-outline-none`} type='text' /> } className="tw3-w-full" onChange={onChangeDate} selected={date}  />
      <div className={`tw3-absolute tw3-z-10 tw3-top-5 tw3-right-4 ${classNameIcon}`}> <img src={arrowSelect} alt="dateIcon" /> </div>
    </div>
  )
}