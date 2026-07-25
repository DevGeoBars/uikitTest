export interface ProjectItemSimple {
  id: string
  guid: string
  photo: string
  name: string
  denotation: string
  type: string
  result: string
  progress: string
  responsiblePerson: string
  projectTime: number
  goal: string
  startDate: string
  endDate: string
}


export interface ProjectItemTreeSimple {
  id: string
  guid: string
  name: string
  denotation: string
  type: string

  responsiblePerson: string
  startDate: string
  endDate: string
  photo: string
  goal: string
  projectTime: number

  parentId: string | null
  __hasChildren?: boolean
  children?: ProjectItemTreeSimple[]
}

export interface Employee {
  id: string
  guid: string
  shortName: string // ФИО кратко (например: "Петров П.П.")
  fullName?: string // Полное ФИО
  photo?: string | null
  position?: string
  department?: string
  email?: string
  birthDate?: string // Дата рождения
}

export interface GridSimpleStructure {
  id: string
}

export interface TreeSimpleStructure {
  id: string
  parent: string
}
