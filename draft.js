const fs = require('fs')
const {Parser} = require('./src/Parser')
const parser = new Parser()


const categories = [
  {
    categoryName: 'action',
    categoryUrl: 'https://www.crazygames.com/c/action/',
    firstPage: 1,
    lastPage: 14,
  },{
    categoryName: 'adventure',
    categoryUrl: 'https://www.crazygames.com/c/adventure/',
    firstPage: 2,
    lastPage: 5,
  },{
    categoryName: 'arcade',
    categoryUrl: 'https://www.crazygames.com/c/arcade/',
    firstPage: 1,
    lastPage: 15,
  },{
    categoryName: 'driving',
    categoryUrl: 'https://www.crazygames.com/c/driving/',
    firstPage: 2,
    lastPage: 8,
  },{
    categoryName: 'girls',
    categoryUrl: 'https://www.crazygames.com/c/girls/',
    firstPage: 2,
    lastPage: 5,
  },{
    categoryName: 'puzzle',
    categoryUrl: 'https://www.crazygames.com/c/puzzle/',
    firstPage: 2,
    lastPage: 11,
  },{
    categoryName: 'shooting',
    categoryUrl: 'https://www.crazygames.com/c/shooting/',
    firstPage: 2,
    lastPage: 7,
  },{
    categoryName: 'sports',
    categoryUrl: 'https://www.crazygames.com/c/sports/',
    firstPage: 2,
    lastPage: 3,
  },{
    categoryName: 'io',
    categoryUrl: 'https://www.crazygames.com/c/io/',
    firstPage: 1,
    lastPage: 8,
  },{
    categoryName: 'clicker',
    categoryUrl: 'https://www.crazygames.com/c/clicker/',
    firstPage: 1,
    lastPage: 3,
  },
]

const logGame = async (category) => {
  const time = Date.now()
  const games = await parser.parseCategory(category)
  console.log(games[0])
  console.log(`${games.length} games for ${(Date.now() - time) / 10 / 60} seconds`)
  storeData(games, `./data/${category.categoryName}.json`)
}

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

categories.forEach(e => logGame(e))