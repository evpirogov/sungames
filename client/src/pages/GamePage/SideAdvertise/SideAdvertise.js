import React from 'react'
import styles from './SideAdvertise.module.scss'
import classNames from 'classnames/bind'

const SideAdvertise = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('advertise')}>
      <div className={cx('ads1', 'prototype')}>
        <div className={cx('label')}>Ads</div>
      </div>
      <div className={cx('ads2', 'prototype')}>
        <div className={cx('label')}>Ads</div>
      </div>
    </div>
  )
}

export default SideAdvertise