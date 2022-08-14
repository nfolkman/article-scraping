const data = require('./data')
const { MONGO_URI } = data

const mongoose = require('mongoose')

mongoose
   .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err))


// passing data from webscraper into model
const compareAndSaveResults = dataObj => {
   try{
      const Articles = require('./models/Articles')

      const newArticles = new Articles(dataObj)
      return newArticles.save().catch(err => console.log(err))

   }catch(err) {
      console.error(err)
   }
}

module.exports = compareAndSaveResults