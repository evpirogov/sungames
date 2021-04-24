import React from 'react'
import styles from './GamesBlock.module.scss'
import classNames from 'classnames/bind'
import SmallCard from "../../../components/Cards/SmallCard";

const GamesBlock = ({title, games}) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('gamesBlock')}>
      <div className={cx('blockHeader')}><h2>{title}</h2></div>
      <div className={cx('slider')}>
        {games?.map((e,i) => <SmallCard key={i} bgUrl={e}/>)}
      </div>
    </div>
  )
}

export default GamesBlock