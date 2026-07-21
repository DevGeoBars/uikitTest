import './App.css'


import { useRef, useState } from 'react'


import {
  DataGrid,
  DataGridClassic,
  TreeList,
  TreeListClassic,
} from '@/components'


function App() {
  const componentRef = useRef<any>(null)

  const [type, setType] = useState<
    | 'gridWithOnNeedLoad'
    | 'treeWithOnNeedLoad'
    | 'gridClassic'
    | 'treeListClassic'
  >('gridWithOnNeedLoad')

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
        ) : (
          <>as</>
        )}
      </div>
      <div className={'footer'}>
        <div className={'select'}>
          <span className="mode-info">Тип компоненты</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="mode-select">
            <option value="gridWithOnNeedLoad">Таблица с догрузкой</option>
            <option value="gridClassic">Классическая таблица</option>
            <option value="treeWithOnNeedLoad">Дерево с догрузкой</option>
            <option value="treeListClassic">Дерево классическое</option>
            <option value="tree">TreeView</option>
          </select>
        </div>
        {/*<div className={'select'}>*/}
        {/*  <span className="mode-info">*/}
        {/*    конфигурация данных (плоская / иерархическая)*/}
        {/*  </span>*/}
        {/*  <select*/}
        {/*    value={columnsConfig}*/}
        {/*    onChange={(e) => setColumnsConfig(e.target.value as any)}*/}
        {/*    className="mode-select">*/}
        {/*    <option value="gridWithOnNeedLoad">Простая таблица</option>*/}
        {/*    <option value="template">С шаблонными ячейками</option>*/}
        {/*    <option value="grouped">С группировкой колонок</option>*/}
        {/*  </select>*/}
        {/*</div>*/}

        <button
          onClick={() => console.log('componentRef', componentRef.current)}>
          data ref
        </button>
      </div>
    </div>
  )
}

export default App
