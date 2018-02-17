const orm = require('../config/orm.js')

const burger = {
  all: (callback) => {
    orm.all('burgers', (res) => {
      callback(res)
    })
  },
  new: (columns, values, callback) => {
    orm.create('burgers', columns, values, (res) => {
      callback(res)
    })
  },
  update: (objColVals, condition, callback) => {
    orm.update('burgers', objColVals, condition, (res) => {
      callback(res)
    })
  }
}

module.exports = burger