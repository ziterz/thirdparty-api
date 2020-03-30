const axios = require('axios')
const zomato = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: { 'user-key': process.env.ZOMATO_KEY }
})

const restdb = axios.create({
  baseURL: 'https://email-d2ca.restdb.io/',
  headers: { 'x-apikey': process.env.RESTDB_KEY }
})

module.exports = {
  getCategories(req, res, next) {
    axios({
      method: 'GET',
      url: 'https://developers.zomato.com/api/v2.1/categories',
      headers: {
        'user-key': process.env.ZOMATO_KEY
      }
    })
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
  },
  getCategories2(req, res, next) {
    zomato
      .get(`/categories`)
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        res.status(200).json(err.message)
      })
  },
  sendEmail (req, res, next) {
    restdb
      .post(`/mail`)
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }
}