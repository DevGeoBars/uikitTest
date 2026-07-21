import { Grid } from '@tflex/uikit'
import React, { useState } from 'react'

import { generateProjects } from '@/__mocks__'
import { useConfig } from '@/components/hooks/useConfig'

export const DataGridClassic = () => {
  const [data, setData] = useState(generateProjects(100, 1))
  const { config } = useConfig()

  console.log('DataGridClassic')

  return (
    <Grid
      data={data}
      config={config}
      page={1}
      pageSize={100}
      totalCount={1000}
      scrollPagination={true}
      onPageChange={async (page, callbacks) => {
        console.log('onPageChange', page, callbacks)

        //todo @bars - разобраться как дерево работает
        const objects = generateProjects(100, page)

        setData((prev) => [...prev, objects])
      }}
    />
  )
}
