import * as React from 'react'

type Props = {
  className: string
}

const Sidebar: React.FC<Props> = (props: Props) => {
    
    const handleClick = React.useCallback(() => {
      console.log('hogehoge')
    }, [])

    return (
        <aside className={`bg-[#ff0] ${props.className}`}>
          <p className={'font-bold'}>sidebar</p>
          <button onClick={() => {handleClick()}}>button</button>
        </aside>
    )
}

export default Sidebar