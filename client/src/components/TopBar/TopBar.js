import React from "react"
import styles from './TopBar.module.scss'
import classNames from 'classnames/bind'
import {Link} from "react-router-dom";

const TopBar = () => {
  let cx = classNames.bind(styles)

  return (
    <div className={cx('topBar')}>
      {/*<div className={cx('label')}>TopBar: popular / new / categories </div>*/}
      <Link to={`/`}><div className={cx('topBarItem', 'homeItem')}>SunGames.fun</div></Link>
      <div className={cx('topBarItem', 'menuItem')}>New</div>
      <div className={cx('topBarItem', 'menuItem')}>Popular</div>
      <div className={cx('topBarItem', 'menuItem')}>Categories</div>
    </div>
  )
}

export default TopBar