import React, { useContext } from 'react'
import { Themecontext } from '../context/Themecontext'

export default function Button({children, onClick}) {
    const theme = useContext(Themecontext);
    const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  )
}
 