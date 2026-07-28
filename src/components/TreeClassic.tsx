import { Button, Grid as ClassicTree, type TGridRef } from '@tflex/uikit'
import { useRef, useState } from 'react'

import { generateChildren, generateRootTreeData, } from '@/__mocks__/data/tree/treeGenerator'
import { useTreeConfig } from '@/components/hooks/useConfig'

export const TreeListClassic = () => {
  const [data, setData] = useState(generateRootTreeData())
  const [selected, setSelected] = useState<string[]>(['2'])
  const gridRef = useRef<TGridRef>(null)
  const { config } = useTreeConfig()

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Button
        onClick={() => {
          console.log('classicTreeRef, 1-106',gridRef)
          setSelected(['1-108'])
          if ( gridRef.current) {
            gridRef.current.jumpTo('1-108');
          }
        }}>
        jumpTo 106
      </Button>

      <ClassicTree

        ref={gridRef}
        className={'grid'}
        data={data}
        config={{ ...config, columnDrag: true, hideHeader: true  }}
        dragAndDrop={false}
        treeConfig={{
          parentKey: 'parentId',
          expandedDefault: ['2'],
          childrenSource: 'parent',
          onExpand: async (item) => {
            const children = await generateChildren(item, 200)
            setData((prev) => [...prev, ...children])
          },
        }}
        selectedRowIds={selected}
        selectableRows={true}
      />
    </div>
  )
}

