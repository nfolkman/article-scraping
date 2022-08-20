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


      /*** Able to create documents in MongoDB fine, but unable to update/replace documents in database with the newly scraped data ***/
      
      const newArticles = Articles.create(dataObj.data)
      // const updateArticles = Articles.updateMany({},dataObj.data)

      // if(!dataObj) return newArticles
      // else return updateArticles

      return newArticles

   }catch(err) {
      console.error(err)
   }
}

module.exports = compareAndSaveResults