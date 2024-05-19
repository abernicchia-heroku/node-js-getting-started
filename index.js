const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001
const WEBAPP_VIRTUAL_ROOT = process.env.WEBAPP_VIRTUAL_ROOT || '/'

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(WEBAPP_VIRTUAL_ROOT, express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get(WEBAPP_VIRTUAL_ROOT, (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
