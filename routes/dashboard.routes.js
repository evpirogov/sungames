// const {Router} = require('express')
// const router = Router()
// const {CMS} = require('../src/CMS')
//
// router.get('/', async (req, res) => {
//   try {
//     const cms = new CMS()
//     res.json(await cms.getGameById(1))
//   } catch (e) {
//     res.status(500).json({message: 'Что-то пошло не так попробуйте снова'})
//   }
// })
//
// router.get('/game/:id', async (req, res) => {
//   try {
//     const cms = new CMS()
//     res.json(await cms.getGameById(1))
//   } catch (e) {
//     res.status(500).json({message: 'Что-то пошло не так попробуйте снова'})
//   }
// })
//
//
// module.exports = router