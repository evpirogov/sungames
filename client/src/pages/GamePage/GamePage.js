import React, {useCallback, useEffect, useState} from "react"
import {useHttp} from "../../hooks/http.hook";
import styles from './GamePage.module.scss'
import ContentBox from "../../components/ContentBox";
import TopBar from "../../components/TopBar";
import classNames from 'classnames/bind'
import GameControls from "./GameControls";
import GamesBlock from "./GamesBlock";
import GameFrame from "./GameFrame";
import SideAdvertise from "./SideAdvertise";

const GamePage = () => {
  const cx = classNames.bind(styles)
  const [gameData, setGameData] = useState([])
  const {loading, request} = useHttp()

  const fetchGameData = useCallback( async () => {
    try{
      const data = await request('api/games/game/1')
      setGameData(data)
    } catch(e) {}
  }, [request])

  useEffect(() => {
    fetchGameData()
  }, [fetchGameData])

  return (
    <>
      <ContentBox>
        <TopBar/>
        <div className={cx('gameSection')}>
          <div className={cx('gameCanvas')}>
            <div className={cx('gameHeader')}><h1>{gameData.gameName}</h1></div>
            <GameFrame gameFrameUrl={gameData.gameFrameUrl}/>
            <GameControls/>
            <GamesBlock title={'Similar games'} games={gameData.similarGames}/>
            <GamesBlock title={'Play this games'}  games={gameData.recommendedGames}/>
          </div>
          <SideAdvertise/>
        </div>
      </ContentBox>
    </>
  )
}

export default GamePage