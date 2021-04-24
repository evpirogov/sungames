const fs = require('fs')
const axios = require('axios')
const DomParser = require('dom-parser')

class Parser {

  parseCategory = async ({categoryUrl, firstPage, lastPage, categoryName}) => {
    console.log({categoryUrl, firstPage, lastPage, categoryName})
    const catPages = new Array(lastPage+1-firstPage)
      .fill('')
      .map((e,i) => `${categoryUrl}${i+firstPage}`)
    console.log(catPages)
    const catGames = (await Promise.all(catPages.map(pageUrl => this.getHtmlDocument(pageUrl))))
      .map(document => document.getElementsByClassName('jss101'))
      .flat()
      .map((e,i) => this.getGameBaseInfoFromElement(e,{id:i+1, category: categoryName}))

    return await this.mapGamesAddInfo(catGames)
  }

  getHtmlDocument = async (url) => {
    const parser = new DomParser();
    const res = await axios.get(url)
    const document = parser.parseFromString(res.data)
    return document
  }

  getGameBaseInfoFromElement = (element, game) => {
    const gamePageUrl = element.getAttribute('href')
    const sysName = gamePageUrl.split('/').pop()
    return {
      ...game,
      sysName,
      gamePageUrl,
      availableToPlay: !element.getElementsByClassName('undefined').length,
      // img: element.getElementsByTagName('img')[0].getAttribute('src'),
      alt0VideoUrl: `https://videos.crazygames.com/${sysName}.mp4`,
      alt1VideoUrl: `https://videos.crazygames.com/${sysName}b.mp4`,
      alt2VideoUrl: `https://videos.crazygames.com/${sysName}-trimmed.mp4`,
      alt3VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-thumbnail.mp4`,
      alt4VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-180x111.mov`,
      alt5VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-180x111.mp4`,
      alt6VideoUrl: `https://videos.crazygames.com/${sysName}/2/${sysName}-180x111.mp4`,
      alt7VideoUrl: `https://videos.crazygames.com/${sysName}/2/${sysName}-180x111.mov`,
      alt8VideoUrl: `https://videos.crazygames.com/${sysName}/3/${sysName}-180x111.mp4`,
      alt9VideoUrl: `https://videos.crazygames.com/${sysName}/3/${sysName}-180x111.mov`,
      alt11VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-360x222.mp4`,
      alt10VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-360x222.mov`,
      alt12VideoUrl: `https://videos.crazygames.com/${sysName}/2/${sysName}-360x222.mp4`,
      alt13VideoUrl: `https://videos.crazygames.com/${sysName}/2/${sysName}-360x222.mov`,
      alt14VideoUrl: `https://videos.crazygames.com/${sysName}/3/${sysName}-360x222.mp4`,
      alt15VideoUrl: `https://videos.crazygames.com/${sysName}/3/${sysName}-360x222.mov`,
      alt17VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-720x444.mp4`,
      alt16VideoUrl: `https://videos.crazygames.com/${sysName}/1/${sysName}-720x444.mov`,
      alt18VideoUrl: `https://videos.crazygames.com/${sysName}/2/${sysName}-720x444.mp4`,
      alt19VideoUrl: `https://videos.crazygames.com/${sysName}/2/${sysName}-720x444.mov`,
      alt20VideoUrl: `https://videos.crazygames.com/${sysName}/3/${sysName}-720x444.mp4`,
      alt21VideoUrl: `https://videos.crazygames.com/${sysName}/3/${sysName}-720x444.mov`,
    }
  }

  getAdditionalGameInfo = async (game) => {
    const pageUrl = game.gamePageUrl

    const gameHtmlPage = await this.getHtmlDocument(pageUrl)
    const imgUrl = gameHtmlPage
      .getElementsByClassName('GameContainer')[0]
      .getAttribute('style')
      .split(';')
      .filter(e => e.indexOf('background-image') !== -1)
      .shift()
      .slice(21,-1)

    const gameName = gameHtmlPage
      .getElementsByClassName('MuiTypography-h1')[0].textContent
      //MuiTypography-h1

    const votes = +gameHtmlPage
      .getElementsByClassName('jss266')[0].textContent.split(',').join('')

    const rating = +gameHtmlPage
      .getElementsByClassName('jss276')[0].textContent.split('.').join('')

    const likes = Math.floor(votes * rating / 100)
    const dislikes = votes - likes
    const gameTags = gameHtmlPage.getElementsByClassName('GameTags')[0].childNodes
    const tags = gameTags
      .map(e => e.getElementsByTagName('a')[0].getAttribute('href'))
      .filter(e => e.indexOf('/t/') >= 0)
      .map(e => e.slice(29))

    const categories = gameTags
      .map(e => e.getElementsByTagName('a')[0].getAttribute('href'))
      .filter(e => e.indexOf('/c/') >= 0)
      .map(e => e.slice(29))

    console.log(`${game.id} | ${rating} | ${votes}\t${gameName}`)

    return {
      ...game,
      imgUrl,
      gameName,
      votes,
      likes,
      dislikes,
      rating,
      tags,
      categories,
    }
  }

  mapGamesAddInfo = async (games) => {
    let addGames = []
    //
    for (let i = 0; i < games.length; i++) {
      addGames.push(await this.getAdditionalGameInfo(games[i]))
    }

    return addGames
  }

  saveToFile = (data, path) => {
    try {
      fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = {
  Parser
}

