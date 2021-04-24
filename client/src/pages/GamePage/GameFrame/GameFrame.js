import React from 'react'
import styles from './GameFrame.module.scss'
import classNames from 'classnames/bind'

const GameFrame = ({gameFrameUrl}) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('gameFrame', 'prototype')}>
      <div className={cx('label')}>iFrame</div>
    </div>
  )
}

export default GameFrame