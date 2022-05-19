import { FileWithPath } from "react-dropzone"

export const tables: TableType = []

export type TableType = {
  task: string;
  date: Date;
  type: string;
  category: string;
  createBy: {
      name: string;
    }[];
  responsible: {
      name: string;
  }[];
  files?: FileWithPath[];
}[]

export type TableItemType = {
  task: string;
  date: Date;
  type: string;
  category: string;
  createBy: {
      name: string;
    }[];
  responsible: {
      name: string;
  }[];
  files?: FileWithPath[];
}


export const titles = [
  {title: 'Padaryta', width: 'none'},
  {title: 'Užduotys', width: '260px'},
  {title: 'Terminas', width: '140px'},
  {title: 'Tipas', width: '120px'},
  {title: 'Kategorija', width: '260px'},
  {title: 'Sukūrė', width: '140px'},
  {title: 'Atsakingas', width: '140px'},
  {title: 'Failai', width: 'none'},
]

export type TitleType = {
  title: string;
  width: string;
}[]
