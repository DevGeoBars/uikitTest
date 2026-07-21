import { TreeView} from '@tflex/uikit'
import { type FC } from 'react'

type TreeViewProps = {}

export const TreeViewTest: FC<TreeViewProps> = () => {
  return (
    <div className="TreeView-container">
      <TreeView/>
    </div>
  )
}
