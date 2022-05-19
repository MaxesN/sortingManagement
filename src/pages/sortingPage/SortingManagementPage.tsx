import { FC, useState } from "react"
import { Table } from "../../components"
import { Switcher } from "../../components/switcher/Switcher"
import { Select } from "../../components/select"
import { Modal } from "../../components/modal"
import { titles, TableItemType, tables } from "../../utils/table"


import arrow from '../../assets/arrow.svg'
import plus from '../../assets/plus.svg'
import listCheck from '../../assets/listCheck.svg'
import time from '../../assets/time.svg'


const optionsList = [
  {value: '1', label: 'šios dienos užduotys'},
  {value: '2', label: 'Rytoj'},
  {value: '3', label: 'Kitas 7 dienas'},
  {value: '4', label: 'Kitas 30 dienų'},
]

const optionsListTodo = [
  {value: '1', label: 'Neužbaigtos užduotys'},
  {value: '2', label: 'Užbaigtos užduotys'},
]

export const SortingManagementPage: FC = () => {

  const [isSwitcher, setIsSwitcher] = useState(false)
  const [filtered, setFiltered] = useState('')
  const [isModal, setIsModal] = useState(false)

  const onChangeIsSwitcher = () => setIsSwitcher(!isSwitcher)
  const onChangeFiltered = (text: string) => setFiltered(text)
  const onChangeIsModal = () => setIsModal(!isModal)

  const addNewItem = (item: TableItemType) => {
    tables.push(item)
    setIsModal(!isModal)
  }


  return (
    <>
      <div className="tw3-max-w-[1680px] tw3-text-slate-700 tw3-p-10 tw3-mx-auto">
        <div className="tw3-inline-block">
          <a className="tw3-flex w3-text-sm tw3-outline-none tw3-text-slate-400" href="/"><img className="tw3-rotate-90 tw3-mr-2" src={arrow} alt="" /> Back</a>
        </div>
        <div className="lg:tw3-flex tw3-mt-8 tw3-mb-12 tw3-justify-between">
          <button onClick={onChangeIsModal}  className="hover:tw3-bg-teal-700 tw3-duration-150 tw3-outline-none tw3-bg-teal-600 tw3-py-2 tw3-rounded-md tw3-font-medium tw3-text-white tw3-px-4 tw3-items-center tw3-flex">
            <img className="tw3-mr-2" src={plus} alt="plus" />
           Sukurti naują įrašą
          </button>
          <div className="md:tw3-flex tw3-mt-6 lg:tw3-mt-0">
            <Switcher onChangeIsChecked={onChangeIsSwitcher} isChecked={isSwitcher} />
            <div className=" tw3-my-3 md:tw3-my-0 md:tw3-mx-8 tw3-w-[200px]">
              <Select placeholder="list" classNameIcon="tw3-ml-5 tw3-mt-3" withIcon={true} image={listCheck} options={optionsList} />
            </div>
            <div className="tw3-w-[260px]">
              <Select placeholder="task" classNameIcon="tw3-ml-4 tw3-mt-3" withIcon={true} image={time} options={optionsListTodo} />
            </div>
          </div>
        </div>
        <p className="tw3-text-lg tw3-font-semibold tw3-mb-8">Užbaigtos užduotys</p>
        <Table tables={tables} titles={titles}  filtered={filtered} onChangeFiltered={onChangeFiltered}/>
      </div>
      <Modal addNewItem={addNewItem} onChangeIsModal={onChangeIsModal} isModal={isModal}/>
    </>  )
}