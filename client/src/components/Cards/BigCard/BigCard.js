import React from 'react'
import {Link} from "react-router-dom";
import styles from './BigCard.module.scss'
import classNames from 'classnames/bind'

const BigCard = (props) => {
  const cx = classNames.bind(styles)

  const initialState = {
    id: null,
    gameName: null,
    gameUrl: null,
    previewImage: null,
    previewVideo: null,
    likes: null,
  }

  return  <Link to={`/game`}>
    <div className={cx('card')}
         style={{backgroundImage: `url(${props.bgUrl})`}}
    >
      <div className={cx('cardStats')}>
        <div><h4 className={cx('cardName')}>Hexagor.io</h4></div>
        <div><span className={cx('cardLikes')}>️235</span></div>
        <div className={cx('playButton')}>Play</div>
      </div>
    </div>
  </Link>
}

export default BigCard