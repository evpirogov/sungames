import React from "react"
import styles from './Featured.module.scss'
import classNames from 'classnames/bind'
import BigCard from "../../../components/Cards/BigCard";


const Featured = () => {
  let cx = classNames.bind(styles)

  return (
    <div className={cx('featured')}>
      <h1 className={cx('blockHeader')}>Best games</h1>
      <div className={cx('slider')}>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2020-08/1598623114_cover-71.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2019-11/1572791630_cover-8.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2021-01/1611225251_3-11.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2021-01/1611224346_2-9.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2021-01/1611222203_1-25.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2021-01/1611141818_3-9.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2021-01/1611140521_1-23.webp'}/>
        <BigCard bgUrl={'https://onlineigry.net/uploads/posts/2021-01/1611139147_1-22.webp'}/>
      </div>
    </div>
  )
}

export default Featured
