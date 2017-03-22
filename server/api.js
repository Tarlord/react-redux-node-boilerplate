import express from 'express'
import superagent from 'superagent'

const router = express.Router()


router.get('/api/call/:town', (req, res) => {
  let { town } = req.query
  superagent
    .get(`http://samples.openweathermap.org/data/2.5/weather?q=${town}&appid=b1b15e88fa797225412429c1c50c122a1`)
    .end((err, data) => {
      return res.json(data.body)
    })
})

export default router
