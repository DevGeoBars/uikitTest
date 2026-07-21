import { generateProjects } from '@/__mocks__'
import { generateTreeProjects } from '@/__mocks__/data/tree/treeGenerator'
import { type ProjectItemSimple } from '@/models'

export const fetchTreeData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = generateTreeProjects() as Partial<ProjectItemSimple>[]
  return data
}
