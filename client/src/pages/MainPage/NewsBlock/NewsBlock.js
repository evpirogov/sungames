import React from 'react'
import classNames from 'classnames/bind'
import styles from './NewsBlock.module.scss'

const NewsBlock = () => {
  const cx = classNames.bind(styles)
  
  return <div className={cx('newsBlock')}>
    {/*<div className={cx('label')}>NewsBlock</div>*/}
  </div>
}

export default NewsBlock