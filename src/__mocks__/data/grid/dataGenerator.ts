import { type ProjectItemSimple } from '@/models'

export const generateProjects = (
  count: number,
  page: number = 0,
): Partial<ProjectItemSimple>[] => {
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

  return Array.from({ length: count }, (_, i) => ({
    id: page ? `${100 + i + page}` : `${100 + i}`,
    guid: page ? `${100 + i + page}` : `${100 + i}`,
    name: projectNames[i % projectNames.length] + ` ${Math.floor(i / 10) + 1}`,
    denotation: `${denotations[i % denotations.length]}-${
      2024 + Math.floor(i / denotations.length)
    }`,
    type: i % 3 === 0 ? 'Портфель' : i % 3 === 1 ? 'Проект' : 'Подпроект',
    responsiblePerson: persons[i % persons.length],
    startDate: `01.0${(i % 9) + 1}.2025`,
    endDate: `31.1${i % 8}.2026`,
    photo: 'some',
    goal: goals[i % persons.length],
    projectTime: Math.floor(Math.random() * 365) + 30,
  }))
}

export const generateProjectIds = (
  count: number,
): Partial<ProjectItemSimple>[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${100 + i}`,
    guid: `${100 + i}`,
  }))
}

export const generateCustomColumnsData = (
  count: number,
): Partial<ProjectItemSimple>[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${100 + i}`,
    guid: `${100 + i}`,
    progress: `${(i * 7) % 101} %`,
    result: i % 4 === 0 ? 'Завершен' : i % 4 === 1 ? 'В процессе' : 'Не начат',
  }))
}
