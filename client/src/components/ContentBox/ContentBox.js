import React from "react"
import $ from './ContentBox.module.scss'

const ContentBox = ({children}) => {

  return (
    <div className={$.contentBox}>{children}</div>
  )
}

export default ContentBox