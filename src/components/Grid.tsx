import { Grid as GridComponent } from '@tflex/uikit'
import { useState } from 'react'

import { generateProjectIds } from '@/__mocks__'
import { fetchData, fetchHardData } from '@/components/helpers/fetchData'
import { useConfig } from '@/components/hooks/useConfig'
import { type ProjectItemSimple } from '@/models'

export const DataGrid = () => {
  const [data, setData] = useState(generateProjectIds(200))

  const { config } = useConfig()

  return (
    <GridComponent
      className={'grid'}
      data={data}
      config={config}
      dragAndDrop={true}
      onNeedData={async (items, { onDataReceived }) => {
        console.log(items)
        const fullData = await fetchData()

        const firstPortion = items.map((item) => {
          const fullItem = fullData.find((d) => d.guid === item.guid)

          if (fullItem) {
            return fullItem
          } else {
            return {
              guid: item.guid,
            } as unknown as Partial<ProjectItemSimple>
          }
        })
        onDataReceived(firstPortion)

        const customColumnsData = await fetchHardData()

        const secondPortion = items.map((item) => {
          const fullItem = customColumnsData.find((d) => d.guid === item.guid)

          if (fullItem) {
            return fullItem
          } else {
            return {
              guid: item.guid,
            } as unknown as Partial<ProjectItemSimple>
          }
        })
        onDataReceived(secondPortion)
      }}
      lazyRender={{
        chunkSize: 20,
        chunksVisibleBuffer: 1,
      }}
      // treeConfig={{
      //   childrenSource: 'parent',
      //   expandAll: false,
      //   parentKey: 'parent',
      // }}
    />
  )
}
