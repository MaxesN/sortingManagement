import { FC, useState } from 'react'
import { Input } from '../input'
import { Select } from '../select'
import { DatePicker } from '../datepicker'
import { DropZoneCustom } from '../dropzone'
import { FileWithPath } from 'react-dropzone'
import { TableItemType } from '../../utils/table'

import exit from '../../assets/exit.svg'
import glass from '../../assets/glass.svg'

const categoryOptions = [
  { value: 'Atlikti paskaičiavimą', label: 'Atlikti paskaičiavimą' },
  { value: 'Užklausti dėl apmokėjimo', label: 'Užklausti dėl apmokėjimo' },
]

const typeOptions = [
  { value: 'Ilgalaikė', label: 'Ilgalaikė' },
  { value: 'Paprasta', label: 'Paprasta' },
]

const createByOptions = [
  { value: 'Anna Kingston', label: 'Anna Kingston' },
  { value: 'Mary Kingston', label: 'Mary Kingston' },
]

const responsibleOptions = [
  { value: 'Anna Kingston', label: 'Anna Kingston' },
  { value: 'Mary Kingston', label: 'Mary Kingston' },
]

const initialValues = {
  task: '',
  date: new Date(),
  type: { value: '', label: '' },
  category: { value: '', label: '' },
  createBy: [{ value: '', label: '' }],
  responsible: [{ value: '', label: '' }],
  files: [] as FileWithPath[],
}

type Props = {
  isModal: boolean
  onChangeIsModal: () => void
  onItemCreate: (item: TableItemType) => void
}

export const Modal: FC<Props> = ({
  isModal,
  onItemCreate,
  onChangeIsModal,
}) => {
  const [form, setForm] = useState(initialValues)

  const formIsValid =
    form.task.length > 5 &&
    form.type.value !== '' &&
    form.category.value !== '' &&
    form.createBy[0].value !== '' &&
    form.responsible[0].value !== ''

  const sendItem = () => {
    if (formIsValid) {
      onItemCreate({
        task: form.task,
        date: form.date,
        type: form.type.value,
        category: form.category.value,
        createBy: [{ name: form.createBy[0].value }],
        responsible: [{ name: form.responsible[0].value }],
        files: form.files,
      })
      setForm(initialValues)
    }
  }
  return (
    <>
      {isModal && (
        <div
          onClick={onChangeIsModal}
          className="tw3-fixed tw3-top-0 tw3-z-50 tw3-px-4 tw3-w-full tw3-h-full tw3-bg-black/25"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="tw3-relative tw3-top-[5%] tw3-mx-auto tw3-max-w-[1000px] tw3-bg-white"
          >
            <div className="tw3-flex tw3-justify-between tw3-p-6 tw3-bg-sky-900">
              <p className="tw3-text-2xl tw3-font-medium tw3-text-white">
                Užduotis
              </p>
              <div
                onClick={onChangeIsModal}
                className="tw3-flex tw3-cursor-pointer"
              >
                <img src={exit} alt="exit" />
              </div>
            </div>
            <div className=" tw3-p-5 md:tw3-p-10 lg:tw3-p-20">
              <form className="tw3-text-sm tw3-font-semibold">
                <div className="tw3-flex">
                  <div className="tw3-mt-2 tw3-w-[120px]">
                    <p>Užduotis *</p>
                    <p className="tw3-my-11">Tipas</p>
                    <p>Kategorija *</p>
                    <p className="tw3-my-11">Atlikti iki *</p>
                    <p className="tw3-mb-12">Vykdytojas *</p>
                    <p
                      className={`${
                        form.files.length > 0 ? 'tw3-mb-28' : 'tw3-mb-20'
                      }`}
                    >
                      Failai
                    </p>
                    <p>Kartoti</p>
                  </div>
                  <div className="tw3-w-full">
                    <Input
                      value={form.task}
                      placeholder=""
                      onChangeValue={(e) =>
                        setForm({ ...form, task: e.target.value })
                      }
                      type="text"
                      isValid={form.task.length > 5 || form.task.length === 0}
                    />
                    <Select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e! })}
                      placeholder=""
                      options={typeOptions}
                    />
                    <Select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e! })}
                      placeholder=""
                      withIcon={true}
                      classNameIcon="tw3-top-2 tw3-left-3"
                      image={glass}
                      className="tw3-my-6"
                      options={categoryOptions}
                    />
                    <DatePicker
                      withIcon={true}
                      date={form.date}
                      onChangeDate={(e) => setForm({ ...form, date: e })}
                    />
                    <Select
                      value={form.createBy}
                      onChange={(e) => setForm({ ...form, createBy: [e!] })}
                      placeholder=""
                      withIcon={true}
                      classNameIcon="tw3-top-2 tw3-left-3"
                      image={glass}
                      className="tw3-my-6"
                      options={createByOptions}
                    />
                    <DropZoneCustom
                      file={form.files}
                      onChangeFile={(e) => setForm({ ...form, files: e })}
                    />
                    <Select
                      value={form.responsible}
                      onChange={(e) => setForm({ ...form, responsible: [e!] })}
                      className="tw3-my-6"
                      placeholder=""
                      options={responsibleOptions}
                    ></Select>
                    <div className="tw3-flex tw3-justify-end">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          sendItem()
                        }}
                        className={`tw3-outline-none  tw3-text-white tw3-py-4 tw3-px-16 tw3-rounded-md tw3-text-base ${
                          formIsValid
                            ? 'hover:tw3-bg-sky-600 tw3-bg-sky-500'
                            : 'tw3-cursor-default tw3-bg-sky-500/50'
                        }`}
                      >
                        Išsaugoti
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
