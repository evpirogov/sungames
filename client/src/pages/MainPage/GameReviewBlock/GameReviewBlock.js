import React from 'react'
import style from './GameReviewBlock.module.scss'
import classNames from 'classnames/bind'

const GameReviewBlock = () => {
  const cx = classNames.bind(style)

  return (
    <div className={cx('gameReviewBlock','prototype')}>
      <div className={cx('label')}>GameReviewBlock</div>
    </div>
  )
}

export default GameReviewBlock