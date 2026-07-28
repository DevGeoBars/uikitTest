import { useRef, useState } from 'react'

import {
  DataGrid,
  DataGridClassic,
  TreeList,
  TreeListClassic, TreeViewTest,
} from '@/components'

import './App.css'

type TSelect =
  | 'gridWithOnNeedLoad'
  | 'treeWithOnNeedLoad'
  | 'gridClassic'
  | 'treeListClassic'
  | 'treeView'

function App() {
  const componentRef = useRef<any>(null)

  const [type, setType] = useState<TSelect>('gridWithOnNeedLoad')

  return (
    <div className={'example'}>
      <div className="grid-container">
        {type === 'gridWithOnNeedLoad' ? (
          <DataGrid />
        ) : type === 'gridClassic' ? (
          <DataGridClassic />
        ) : type === 'treeWithOnNeedLoad' ? (
          <TreeList />
        ) : type === 'treeListClassic' ? (
          <TreeListClassic />
        ) : type === 'treeView' ? (
          <TreeViewTest id={'1'}/>
        ) : (
          <>as</>
        )}
      </div>
      <div className={'footer'}>
        <div className={'select'}>
          <span className="mode-info">Тип компоненты</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as TSelect)}
            className="mode-select">
            <option value="gridWithOnNeedLoad">Таблица с догрузкой</option>
            <option value="gridClassic">Классическая таблица</option>
            <option value="treeWithOnNeedLoad">Дерево с догрузкой</option>
            <option value="treeListClassic">Дерево классическое</option>
            <option value="treeView">TreeView</option>
          </select>
        </div>


        <button
          onClick={() => console.log('componentRef', componentRef.current)}>
          data ref
        </button>
      </div>
    </div>
  )
}

export default App
