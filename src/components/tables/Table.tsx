import { FC } from 'react'
import { Checkbox } from '../checkbox/Checkbox'
import { User } from '../user/User'

import arrow from '../../assets/arrow.svg'
import file from '../../assets/file.svg'
import { TableType, TitleType } from '../../utils/table'
 
type Props = {
  filtered: string,
  onChangeFiltered: (text: string) => void,
  tables: TableType,
  titles: TitleType,
}

export const Table: FC<Props> = ({filtered, onChangeFiltered, tables, titles}) => {
  return (
    <div className="tw3-w-full scrollbar tw3-flex-nowrap tw3-overflow-x-auto">
      <table className='tw3-w-full tw3-mx-auto'>
        <thead>
          <tr  className="tw3-text-slate-500 tw3-h-[45px] tw3-text-xs">
            {
              titles.map((itemTitle, i) => {
                return itemTitle.width === 'none' 
                  ? <td key={i}><div className={` tw3-select-none ${i === 0 ? 'tw3-mr-4' : ''}`}><p>{itemTitle.title}</p></div></td> 
                  : <td key={i} style={{minWidth: itemTitle.width}}>
                    <div onClick={() => onChangeFiltered(itemTitle.title)} className='tw3-select-none tw3-cursor-pointer tw3-flex'>{itemTitle.title}
                      <img className={`tw3-ml-2 ${filtered === itemTitle.title ? 'tw3-rotate-180' : ''}`} src={arrow} alt="arrow" />
                    </div>
                  </td>
              })
            }
          </tr>
        </thead>
        <tbody>
          {tables.map(({task, date, category, createBy, responsible, type}, i) => {
            return(
              <tr key={i} className='tw3-border-y tw3-h-[55px]' >
                <td><div className='tw3-flex'><Checkbox  className="tw3-ml-4"/> </div></td>
                <td><p className="tw3-w-[250px] tw3-whitespace-nowrap tw3-overflow-hidden tw3-truncate">{task}</p></td>
                <td>{ `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` }</td>
                <td>{type}</td>
                <td><div className={`tw3-inline-block tw3-py-1 tw3-px-4 tw3-rounded-2xl ${category === 'Atlikti paskaičiavimą' ? 'tw3-bg-teal-50' : 'tw3-bg-sky-50'}`}>{category}</div></td>
                <td>
                  <div className='tw3-flex'>
                    {
                      createBy.map(({name}, iUser) => 
                        (
                          <User key={iUser} lastItem={tables.length - 1 === i} name={name}/>
                        ))
                    }
                  </div>
                </td>
                <td>
                  <div className='tw3-flex'>
                    {
                      responsible.map(({name}, iUser) => 
                        (
                          <User  key={iUser} lastItem={tables.length - 1 === i} name={name}/>
                        ))
                    }
                  </div>
                </td>
                <td><a className='tw3-select-none' href="/"><img src={file} alt="file" /></a> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}