import React from 'react'
import {IconExpand, IconFillStar, IconThumbsDown, IconThumbsUp} from "../../../components/Icons/Icons";
import styles from './GameControls.module.scss'
import classNames from 'classnames/bind'

const GameControls = () => {

  const cx = classNames.bind(styles)

  return (
    <div className={cx('gameControls')}>
      <div className={cx('control','left')}>
        <IconFillStar className={cx('controlIcon')}/>
        <span className={cx('controlLabel')}>Add to favorite</span>
      </div>
      <div className={cx('control')}>
        <IconThumbsUp className={cx('controlIcon')}/>
      </div>
      <div className={cx('control')}>
        <IconThumbsDown className={cx('controlIcon')}/>
      </div>
      <div className={cx('control')}>
        <IconExpand className={cx('controlIcon')}/>
      </div>
    </div>
  )
}

export default GameControls