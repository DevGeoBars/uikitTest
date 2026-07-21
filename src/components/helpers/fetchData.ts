import { generateCustomColumnsData, generateProjects } from '@/__mocks__'
import { type ProjectItemSimple } from '@/models'

export const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = generateProjects(200) as Partial<ProjectItemSimple>[]
  return data
}

export const fetchHardData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = generateCustomColumnsData(200) as Partial<ProjectItemSimple>[]
  return data
}
