


import FOLDER_LOGO from '@/assets/folderSSO.svg'

import type { TGridColumnConfig } from "@tflex/uikit";
import type { ProjectItemSimple } from "@/models";

const INFO_GROUP_TITLE = 'Основная информация'
const DATES_GROUP_TITLE = 'Сроки'
const EFFECT_GROUP_TITLE = 'Прогресс'

export const columns: TGridColumnConfig<Partial<ProjectItemSimple>>[] = [
  {
    key: 'id',
    header: 'ID',
    width: 'min-content',
    isTreeColumn: true,
  },
  {
    key: 'photo',
    header: 'Фото',
    width: 'min-content',
    cell: (props) => {
      return (
        <div
          style={{ height: '100%', width: '100%' }}
          className={'folder-column'}>
          <img src={FOLDER_LOGO} alt={props.item.photo} />
        </div>
      )
    },
    isTreeColumn: true,
  },
  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'Наименование',
    key: 'name',
    width: 'min-content',
  },
  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'ФИО',
    key: 'responsiblePerson',
    width: 'minmax(200px, 1fr)',
  },
  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'Тип',
    key: 'type',
    width: 'minmax(200px, 2fr)',
    isTreeColumn: true,
  },

  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'Обозначение',
    key: 'denotation',
    width: 'minmax(120px, 1fr)',
  },

  {
    groupTitle: DATES_GROUP_TITLE,
    header: 'Начало',
    key: 'startDate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: DATES_GROUP_TITLE,
    header: 'Окончание',
    key: 'endDate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: DATES_GROUP_TITLE,
    header: 'Длительность',
    key: 'projectTime',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: EFFECT_GROUP_TITLE,
    header: '% выполнения',
    key: 'progress',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: EFFECT_GROUP_TITLE,
    header: 'Результат',
    key: 'result',
    width: 'minmax(150px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Цель',
    key: 'goal',
    width: 'minmax(150px, 1fr)',
  },
]

export const columnsTree: TGridColumnConfig<Partial<ProjectItemSimple>>[] =
  [
    {
      key: 'photo',
      header: 'Фото',
      width: 'min-content',
      draggable: true,
      cell: (props) => {
        return (
          <div
            style={{ height: '100%', width: '100%' }}
            className={'folder-column'}>
            <img src={FOLDER_LOGO} alt={props.item.photo} />
          </div>
        )
      },
      isTreeColumn: true,
    },
    {
      draggable: true,
      groupTitle: INFO_GROUP_TITLE,
      header: 'Наименование',
      key: 'name',
      width: 'min-content',
    },
    {
      draggable: true,
      groupTitle: INFO_GROUP_TITLE,
      header: 'ФИО',
      key: 'responsiblePerson',
      width: 'minmax(200px, 1fr)',
    },
    {
      draggable: true,
      groupTitle: INFO_GROUP_TITLE,
      header: 'Тип',
      key: 'type',
      width: 'minmax(200px, 2fr)',
    },

    {
      draggable: true,
      groupTitle: INFO_GROUP_TITLE,
      header: 'Обозначение',
      key: 'denotation',
      width: 'minmax(120px, 1fr)',
    },
  ]
