import React from "react"
import styles from './MainPage.module.scss'
import ContentBox from "../../components/ContentBox";
import TopBar from "../../components/TopBar";
import Featured from "./Featured";
import MainGamelist from "./MainGamelist";
import NewsBlock from "./NewsBlock";
import GameReviewBlock from "./GameReviewBlock";

const MainPage = () => {

  return (
    <>
      <ContentBox>
        <TopBar/>
        <GameReviewBlock/>
        {/*<NewsBlock/>*/}
        <Featured/>
        <MainGamelist/>
      </ContentBox>
    </>
  )
}

export default MainPage