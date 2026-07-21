import { Button, Grid as ClassicTree, type TGridRef } from '@tflex/uikit'
import { useRef, useState } from 'react'

import { generateChildren, generateRootTreeData, } from '@/__mocks__/data/tree/treeGenerator'
import { useTreeConfig } from '@/components/hooks/useConfig'

export const TreeListClassic = () => {
  const [data, setData] = useState(generateRootTreeData())
  const gridRef = useRef<TGridRef>(null)
  const { config } = useTreeConfig()

  return (
    <>
      <Button
        onClick={() => {
          console.log('classicTreeRef',gridRef)
        }}>
        as
      </Button>
      <ClassicTree
        ref={gridRef}
        className={'grid'}
        data={data}
        config={config}
        dragAndDrop={false}
        treeConfig={{
          parentKey: 'parent',
          expandedDefault: ['2'],
          childrenSource: 'parent',
          onExpand: async (item) => {
            const children = await generateChildren(item, 3)
            setData((prev) => [...prev, ...children])
          },
        }}
        selectedRowIds={['2']}
        selectableRows={true}
      />
    </>
  )
}

