import React from 'react'
import styles from './MainGamelist.module.scss'
import classNames from 'classnames/bind'
import SmallCard from '../../../components/Cards/SmallCard'

const MainGamelist = () => {
  let cx = classNames.bind(styles)

  return (
    <div className={cx('mainGamelist')}>
      <h2 className={cx('blockHeader')}>Popular games</h2>
      <div className={cx('slider')}>
        <SmallCard bgUrl={"https://images.crazygames.com/games/bullet-force-multiplayer/cover-1588010858655.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/shellshockersio/20200825110135/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/madalin-stunt-cars-2/cover-1600852186358.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/betrayal-io/cover-1608657008107.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/bullet-town/20200825111353/bullet-town-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/repuls-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/forward-assault/cover-1584185910210.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/amazing-strange-rope-police-vice-spider/cover-1583259570029.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/slitherio/cover-1587331280441.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/krunker-io/cover-1591336739727.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/paperminecraft.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/madalincarsmultiplayer.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/realisticzombiesurvivalwarfare.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/crazy-roll-3d/thumb-1551212403077.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/derby-crash-4/cover-1606116318105.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/dragon-simulator-3d-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/downtown-1930s-mafia/20201106164225/downtown-1930s-mafia-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/zombsroyaleio/cover-1587299840102.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/minecraft-classic/cover-1587300068895.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/russiancardriverzil130.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/air-wars-3-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/bullet-force-multiplayer/cover-1588010858655.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/shellshockersio/20200825110135/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/madalin-stunt-cars-2/cover-1600852186358.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/betrayal-io/cover-1608657008107.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/trackmania-blitz/20201203123545/trackmania-blitz-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/bullet-town/20200825111353/bullet-town-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/repuls-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/forward-assault/cover-1584185910210.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/amazing-strange-rope-police-vice-spider/cover-1583259570029.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/moto-x3m/cover-1586173923704.jpeg?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/slitherio/cover-1587331280441.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/krunker-io/cover-1591336739727.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/paperminecraft.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/madalincarsmultiplayer.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/realisticzombiesurvivalwarfare.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/crazy-roll-3d/thumb-1551212403077.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/derby-crash-4/cover-1606116318105.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/dragon-simulator-3d-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/downtown-1930s-mafia/20201106164225/downtown-1930s-mafia-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/zombsroyaleio/cover-1587299840102.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/crazy-roll-3d/thumb-1551212403077.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/basketball-stars-2019/cover-1583231506155.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/minecraft-classic/cover-1587300068895.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/russiancardriverzil130.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/air-wars-3-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/stabfish-io/20210113074741/stabfish-io-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/games/winter-clash-3d/cover-1584470160643.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
        <SmallCard bgUrl={"https://images.crazygames.com/parrot-simulator/20201223144648/parrot-simulator-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop"}/>
      </div>
    </div>
  )
}

export default MainGamelist

