import { useRef } from 'react'

import { columns, columnsTree } from '@/__mocks__'

export const useConfig = () => {
  const config = useRef({ columns, rowHeight: 48 })

  return { config: config.current }
}

export const useTreeConfig = () => {
  const config = useRef({ columns: columnsTree, rowHeight: 48 })

  return { config: config.current }
}
