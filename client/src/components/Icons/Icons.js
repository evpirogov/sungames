import React from 'react'
import './css/fontawesome-all.css'

const IconGamepad = ({className}) => <i className={`fas fa-gamepad ${className}`}/>
const IconThumbsUp = ({className}) => <i className={`far fa-thumbs-up ${className}`}/>
const IconThumbsDown = ({className}) => <i className={`far fa-thumbs-down ${className}`}/>
const IconExpand = ({className}) => <i className={`fas fa-expand ${className}`}/>
const IconFillStar = ({className}) => <i className={`fas fa-star ${className}`}/>


export {
  IconGamepad,
  IconThumbsUp,
  IconThumbsDown,
  IconExpand,
  IconFillStar
}