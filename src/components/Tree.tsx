import { Grid as GridComponent } from '@tflex/uikit'
import { useState } from 'react'

import { generateTreeProjectsIds } from '@/__mocks__/data/tree/treeGenerator'
import { fetchTreeData } from '@/components/helpers/fetchTreeData'
import { useTreeConfig } from '@/components/hooks/useConfig'
import { type ProjectItemSimple } from '@/models'

export const TreeList = () => {
  const [data, setData] = useState(generateTreeProjectsIds())

  const { config } = useTreeConfig()

  return (
    <GridComponent
      className={'grid'}
      data={data}
      config={config}
      dragAndDrop={true}
      onNeedData={async (items, { onDataReceived }) => {
        console.log('items', items)
        const fullData = await fetchTreeData()

        console.log('fullData', fullData)

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

        console.log('firstPortion', firstPortion)
        setData(firstPortion);
        onDataReceived(firstPortion)
      }}
      lazyRender={{
        chunkSize: 20,
        chunksVisibleBuffer: 1,
      }}
      treeConfig={{
        childrenSource: 'parent',
        expandAll: false,
        parentKey: 'parent',
      }}
    />
  )
}
