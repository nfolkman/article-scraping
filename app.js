// const puppeteer = require('puppeteer')
// const dotenv = require('dotenv')
// const connectDB = require('./config/db')
// // const { default: mongoose } = require('mongoose')
const data = require('./data')
const {URL} = data

const webscraper = require('./webscraper')
const compareAndSaveResults = require('./resultAnalysis')


webscraper(URL)
.then(dataObj => {
   compareAndSaveResults(dataObj)
})
.catch(console.error)

