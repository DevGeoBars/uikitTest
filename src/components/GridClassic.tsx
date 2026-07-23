import { Grid } from '@tflex/uikit'
import React, { useState } from 'react'

import { generateProjects } from '@/__mocks__'
import { useConfig } from '@/components/hooks/useConfig'
import type { ProjectItemSimple } from "@/models";

export const DataGridClassic = () => {
  const [data, setData] = useState(generateProjects(100, 1))
  const [page, setPage] = useState(1)
  const { config } = useConfig()

  return (
    <Grid
      data={data}
      config={config}
      page={page}
      pageSize={100}
      totalCount={1000}
      scrollPagination={true}
      onPageChange={async (page, callbacks) => {
        const objects = generateProjects(100, page)
        console.log('onPageChange',objects, page);
        setData((prev) => [...prev, ...objects])
        setPage(page)
      }}
      dragAndDrop={false}
    />
  )
}
