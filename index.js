const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { city } = req.body

  console.log(city)
  res.render('index')
})

app.listen(400, () => {
  console.log('Server has started on port 400...')
})