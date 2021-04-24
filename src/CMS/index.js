class CMS {
  getGameById = async (id) => {
    const allBestGames = await this.getBestGames()
    return allBestGames.filter(e => e.id === id).shift()
  }

  getBestGames = async => {
    return [
      {
        id: 1,
        gameName: 'Hexagor.io',
        gameFrameUrl: 'https://raid.land/',
        categories: [],
        previewImage: 'https://i.ytimg.com/vi/JPKzu7slb_8/maxresdefault.jpg',
        previewVideo: null,
        likes: 159,
        dislikes: 6,
        isFavorite: false,
        description: '',
        // mobileVersion: {
        //   googlePlay: null,
        //   appStore: null,
        // },
        mobileFriendly: null,
        similarGames: [
          "https://images.crazygames.com/games/bullet-force-multiplayer/cover-1588010858655.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/shellshockersio/20200825110135/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/madalin-stunt-cars-2/cover-1600852186358.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/betrayal-io/cover-1608657008107.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/bullet-town/20200825111353/bullet-town-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
        ],
        recommendedGames: [
          "https://images.crazygames.com/games/bullet-force-multiplayer/cover-1588010858655.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/shellshockersio/20200825110135/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/madalin-stunt-cars-2/cover-1600852186358.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/betrayal-io/cover-1608657008107.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/bullet-town/20200825111353/bullet-town-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/repuls-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/forward-assault/cover-1584185910210.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/amazing-strange-rope-police-vice-spider/cover-1583259570029.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/slitherio/cover-1587331280441.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/games/krunker-io/cover-1591336739727.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/bullet-force-multiplayer/cover-1588010858655.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/shellshockersio/20200825110135/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/madalin-stunt-cars-2/cover-1600852186358.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/betrayal-io/cover-1608657008107.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/bullet-town/20200825111353/bullet-town-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/repuls-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/forward-assault/cover-1584185910210.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/amazing-strange-rope-police-vice-spider/cover-1583259570029.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
          "https://images.crazygames.com/games/slitherio/cover-1587331280441.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop",
          "https://images.crazygames.com/games/krunker-io/cover-1591336739727.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop",
        ]
      },{},{},{},{},{},{},{}
    ]
  }
}


module.exports = {
  CMS
}