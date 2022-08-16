const dataString = require('./data')
const { MONGO_URI } = dataString

const mongoose = require('mongoose')

mongoose
   .connect(MONGO_URI, {
      useNewUrlParser: true})
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err))


// passing data from webscraper into model
const compareAndSaveResults = dataObj => {
   try{
      const Articles = require('./models/Articles')

      const newArticles = Articles.create(dataObj.data)
      return newArticles

   }catch(err) {
      console.error(err)
   }
}

module.exports = compareAndSaveResults