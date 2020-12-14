import React from 'react'
import Icons from './Icons'

export default function TopBar(props) {
  return (
    <div className='flex justify-center align-center ba w-100'>
                <div className='ba br-100 pa2 inline-flex items-center mv2'>
                  <Icons icon={props.icon}/>
                </div>
                <span className="self-center f4 ml3">{props.title}</span>
    </div>
  )
}
