const express = require("express");
const router = express.Router();
const burger = require('../models/burgers.js')

router.get('/', (req, res) => {
  res.redirect('/index')
})

router.get('/index', (req, res) => {
  burger.all((data) => {
    let object = {
      burgers: data
    }
    console.log(object)
    res.render('index', object)
  })
})
  
router.post('/burgers/create', (req, res) => {
  burger.new(["burger_name", "devoued"], [req.body.burger_name, false], (result) => {
    res.redirect('/index')
  })
})

router.put('/burgers/update/:id', (req, res) => {
  let condition = `id = ${req.params.id}`
  
  burger.update(
    {devoued: req.body.devoued},
    condition, (result) => {
      res.redirect('/index')
    }
  )
})

module.exports = router