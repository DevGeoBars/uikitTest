import React, { useRef, useState } from 'react'

import {
  DataGrid,
  DataGridClassic, Dialog,
  TreeList,
  TreeListClassic, TreeViewTest,
} from '@/components'

import './App.css'
import { Button, IconButton, MonoIcon, MonoIconsName, MultiIcon, MultiIconsName } from "@tflex/uikit";


type TSelect =
  | 'gridWithOnNeedLoad'
  | 'treeWithOnNeedLoad'
  | 'gridClassic'
  | 'treeListClassic'
  | 'treeView'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    {
      id: 'save',
      title: 'Сохранить',
      icon:  <MultiIcon name={MultiIconsName.Button_apply} />,
      onClick: ({ close }: { visible: boolean; close: () => void }) => {
        console.log('Сохранение...');
        close();
      },
    },
  ];
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
        <button onClick={() => setIsOpen(true)}>Открыть</button>

        <Dialog
          tools={tools}
          visible={isOpen}
          size={0.7}
          onClose={() => setIsOpen(false)}
          title={<div style={{display: 'flex', alignItems: "center"}}><MultiIcon name={MultiIconsName.Cards_serviceDocumentation} /> Объект 1</div>}

          content={<p>Контент диалога</p>}
          footer={<div>
            <Button color="default" variant="text" iconLeft={<MonoIcon name={MonoIconsName.Calendar_titleBack} />} onClick={() => setIsOpen(false)}>
              Отменить
            </Button>
            <Button color="default" variant="text" iconLeft={<MultiIcon name={MultiIconsName.Button_apply} />}>
              Применить
            </Button>
          </div>}
        />
        <button
          onClick={() => console.log('componentRef', componentRef.current)}>
          data ref
        </button>
      </div>

    </div>
  )
}

export default App
