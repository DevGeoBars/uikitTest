import { type FC, useState } from 'react'
import { TreeView} from '@tflex/uikit'

import { generateChildren, generateRootTreeData } from "@/__mocks__";
import FOLDER_LOGO from "@/assets/folderSSO.svg";

type TreeViewProps = {
  id: string
}

export const TreeViewTest: FC<TreeViewProps> = () => {
  const [data, setData] = useState(generateRootTreeData())
  const [value, setValue] = useState('7')
  return (
    <div className="TreeView-container">
      <TreeView
        width={295}

        data={data}
        config={{
          parentKey: 'parentId',
          idKey: 'guid',
          labelKey: 'name',
        }}
        value={value}
        getItemProps={item => ({
          onClick: () => setValue(item.guid!),

          elements: [{ type: 'icon-text', content: item.name, icon: <img src={FOLDER_LOGO} alt={'logo'}/>}],
          onExpand: async () => {
            const children = await generateChildren(item, 20);
            setData((prev) => [...prev, ...children])
          },
        })}
      />
    </div>
  )
}
