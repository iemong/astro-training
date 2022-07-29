import * as React from 'react'

type Props = {
  className: string
  title: string
  children: JSX.Element
  socialLinks: any[]
}

const Sidebar: React.FC<Props> = (props: Props) => {
    
    const handleClick = React.useCallback(() => {
      console.log('hogehoge')
    }, [])

    return (
        <aside className={`bg-[#ff0] ${props.className}`}>
          <header>{props.title}</header>
          <main>{props.children}</main>
          <button onClick={() => {handleClick()}}>button</button>
          <footer>{props.socialLinks}</footer>
        </aside>
    )
}

export default Sidebar