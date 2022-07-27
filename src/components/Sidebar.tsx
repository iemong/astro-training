import * as React from 'react'

type Props = {
  className: string
}

const Sidebar: React.FC<Props> = (props: Props) => {
    return (
        <aside className={`bg-[#ff0] ${props.className}`}>
          <p className={'font-bold'}>sidebar</p>
        </aside>
    )
}

export default Sidebar