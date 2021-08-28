import React from 'react'
import d from '../sass/Dialog.module.sass'

interface _prop{
  img: any,
  open: boolean,
  onClose: any
}
const Dialog = (prop: _prop) => {
  return(
    <>
    {
      prop.open ?
        <div onClick={prop.onClose} className={d.dialog}>
          <div>
            <img src={prop.img} alt=""/>
          </div>
        </div>
      : false
    }
    </>
  )
}

export default Dialog