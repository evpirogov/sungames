import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../../hooks/http.hook";
import styles from './Dashboard.module.scss'
import classNames from 'classnames/bind'
import ContentBox from "../../components/ContentBox";
import TopBar from "../../components/TopBar";

const Dashboard = () => {
  const cx = classNames.bind(styles)
  const [games, setGames] = useState([])
  const {loading, request} = useHttp()

  const fetchLinks = useCallback(async ()=>{
    try {
      const fetchedData = await request('/api/games')

      setGames(fetchedData)
    } catch (e) {}
  },[request])

  useEffect(()=>{
    fetchLinks()
  },[fetchLinks])

  return (
    <>
      <ContentBox>
        <TopBar/>
        {loading ? 'loading' : `${games}`}
      </ContentBox>
    </>
  )
}

export default Dashboard