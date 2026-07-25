import { type ProjectItemTreeSimple } from '@/models'

export const generateTreeProjects = (): Partial<ProjectItemTreeSimple>[] => {
  const result: Partial<ProjectItemTreeSimple>[] = []

  // Уровень 1: корневые (parent: null)
  for (let i = 1; i <= 3; i++) {
    result.push({
      id: `${i}`,
      guid: `${i}`,
      name: `Корневой проект ${i}`,
      parentId: null,
      type: i === 1 ? 'Портфель' : i === 2 ? 'Проект' : 'Программа',
      denotation: `ROOT-${i}`,
      responsiblePerson: `Руководитель ${i}`,
    })
  }

  // Уровень 2: дети корневых (parent ссылается на id корневого)
  for (let i = 1; i <= 6; i++) {
    const parentId = `${Math.floor((i - 1) / 2) + 1}`
    result.push({
      id: `${10 + i}`,
      guid: `${10 + i}`,
      name: `Подпроект ${i}`,
      parentId: parentId,
      type: 'Проект',
      denotation: `SUB-${i}`,
      responsiblePerson: `Менеджер ${i}`,
    })
  }

  // Уровень 3: дети второго уровня
  for (let i = 1; i <= 12; i++) {
    const parentId = `${10 + Math.floor((i - 1) / 4) + 1}`
    result.push({
      id: `${100 + i}`,
      guid: `${100 + i}`,
      name: `Задача ${i}`,
      parentId: parentId,
      type: 'Задача',
      denotation: `TASK-${i}`,
      responsiblePerson: `Исполнитель ${i}`,
    })
  }

  return result
}

export const generateTreeProjectsIds = (): Partial<ProjectItemTreeSimple>[] => {
  const result: Partial<ProjectItemTreeSimple>[] = []

  // Уровень 1: корневые (parent: null)
  for (let i = 1; i <= 3; i++) {
    result.push({
      id: `${i}`,
      guid: `${i}`,
      parentId: null,
    })
  }

  // Уровень 2: дети корневых (parent ссылается на id корневого)
  for (let i = 1; i <= 6; i++) {
    const parentId = `${Math.floor((i - 1) / 2) + 1}`
    result.push({
      id: `${10 + i}`,
      guid: `${10 + i}`,
      parentId: parentId,
    })
  }

  // Уровень 3: дети второго уровня
  for (let i = 1; i <= 12; i++) {
    const parentId = `${10 + Math.floor((i - 1) / 4) + 1}`
    result.push({
      id: `${100 + i}`,
      guid: `${10 + i}`,
      parentId: parentId,
    })
  }

  return result
}

export const generateProjectsWithChildren = (count: number): Partial<ProjectItemTreeSimple>[] => {
  // Просто возвращаем any[]
  const projectNames = [
    'Разработка системы',
    'Модернизация технологии',
    'Создание продукта',
    'Внедрение процесса',
    'Оптимизация оборудования',
    'Исследование рынка',
    'Разработка ПО',
    'Тестирование',
    'Документирование',
    'Обучение',
  ]

  const denotations = ['РСТ', 'РНП', 'МСТ', 'ЦПУФ', 'ОЛМ', 'АВР', 'СБР', 'ПРД']
  const persons = [
    'Иванов И.И.',
    'Петров П.П.',
    'Сидорова А.В.',
    'Кузнецов С.М.',
    'Васильева Е.К.',
    'Смирнов Д.С.',
  ]
  const goals = [
    'Разработать новый продукт',
    'Оптимизировать бизнес-процессы',
    'Внедрить инновационную технологию',
    'Повысить эффективность',
    'Сократить издержки',
    'Улучшить качество',
    'Автоматизировать процессы',
    'Модернизировать оборудование',
    'Создать цифровую платформу',
    'Обучить персонал',
  ]

  const usedIds = new Set<number>()

  const generateUniqueId = (): string => {
    let id: number
    do {
      id = Math.floor(Math.random() * 9000) + 1000
    } while (usedIds.has(id))

    usedIds.add(id)
    return id.toString()
  }

  const createProject = (depth: number, maxDepth: number): ProjectItemTreeSimple => {
    const id = generateUniqueId()
    const hasChildren = depth < maxDepth && Math.random() > 0.3

    const project: ProjectItemTreeSimple = {
      id,
      __hasChildren: hasChildren,
      children: [],
      guid: id,
      name: `${projectNames[Math.floor(Math.random() * projectNames.length)]} ${
        Math.floor(Math.random() * 100) + 1
      }`,
      denotation: `${
        denotations[Math.floor(Math.random() * denotations.length)]
      }-${2024 + Math.floor(Math.random() * 3)}`,
      type:
        Math.random() > 0.7
          ? 'Портфель'
          : Math.random() > 0.5
          ? 'Проект'
          : 'Подпроект',
      responsiblePerson: persons[Math.floor(Math.random() * persons.length)],
      startDate: `01.0${Math.floor(Math.random() * 9) + 1}.2025`,
      endDate: `31.1${Math.floor(Math.random() * 8) + 1}.2026`,
      photo: 'some',
      goal: goals[Math.floor(Math.random() * goals.length)],
      projectTime: Math.floor(Math.random() * 365) + 30,

      parentId: null,
    }

    if (hasChildren) {
      const childrenCount = Math.floor(Math.random() * 5) + 1
      project.children = Array.from({ length: childrenCount }, () =>
        createProject(depth + 1, maxDepth),
      )
    }

    return project
  }

  const maxDepth = 3
  return Array.from({ length: count }, () => createProject(0, maxDepth))
}

// Пример использования:
// const projects = generateProjectsWithChildren(50, 4, 6) // примерно 50 узлов всего

// В файле с типами добавьте поля


export const generateRootTreeData = (): Partial<ProjectItemTreeSimple>[] => {
  return [
    {
      id: '1',
      guid: '1',
      name: 'Корневой проект',
      type: 'Проект',
      responsiblePerson: 'Иванов И.И.',
      __hasChildren: true,
      parentId: null,
    },
    {
      id: '2',
      guid: '2',
      name: 'Подпроект 1',
      type: 'Подпроект',
      responsiblePerson: 'Петров П.П.',

      parentId: null,
    },
    {
      id: '3',
      guid: '3',
      name: 'Подпроект 2',
      type: 'Подпроект',
      responsiblePerson: 'Сидоров С.С.',

      parentId: null,
    },

    {
      id: '4',
      guid: '4',
      name: 'Подпроект 2',
      type: 'Подпроект',
      responsiblePerson: 'Сидоров С.С.',

      parentId: '2',
    },
    {
      id: '5',
      guid: '5',
      name: 'Подпроект 5',
      type: 'Подпроект',
      responsiblePerson: 'Сидоров С.С.',

      parentId: null,
    },
  ]
}

export const generateChildren = async (
  parent: Partial<ProjectItemTreeSimple>,
  count?: number,
): Promise<Partial<ProjectItemTreeSimple>[]> => {
  const childrenCount = count ?? Math.floor(Math.random() * 5) + 1 // 1-5 детей
  const result: Partial<ProjectItemTreeSimple>[] = []

  const names = [
    'Разработка',
    'Тестирование',
    'Документирование',
    'Внедрение',
    'Сопровождение',
  ]
  const types = ['Задача', 'Подзадача', 'Этап', 'Работа']
  const persons = ['Иванов И.И.', 'Петров П.П.', 'Сидоров С.С.', 'Козлов К.К.']

  const randomItem = <T>(arr: T[]): T =>
    arr[Math.floor(Math.random() * arr.length)]

  for (let i = 0; i < childrenCount; i++) {
    const id = `${parent.id}-${i + 1}`
    result.push({
      id: id,
      guid: id,
      name: `${randomItem(names)} ${i + 1}`,
      type: randomItem(types),
      responsiblePerson: randomItem(persons),
      __hasChildren: Math.random() > 0.6,
      parentId: parent.guid,
    })
  }

  return result
}
