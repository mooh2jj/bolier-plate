const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
var url = 'mongodb+srv://mooh2jj:doseong9114!!@cluster0.cwn7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(url,
//     // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// ).then(()=> console.log('MongoDB Connected...'))
//     .catch(err => console.log(err))
mongoose
.connect(url)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));


app.get('/', (req, res) => {
  res.send('Hello World!!! 안녕하세요!~~~222')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})