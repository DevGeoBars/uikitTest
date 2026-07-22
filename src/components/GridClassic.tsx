import { Grid } from '@tflex/uikit'
import React, { useState } from 'react'

import { generateProjects } from '@/__mocks__'
import { useConfig } from '@/components/hooks/useConfig'
import type { ProjectItemSimple } from "@/models";

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
        const objects = generateProjects(100, page)
        setData((prev) => [...prev, ...objects])
      }}
      dragAndDrop={false}
    />
  )
}
