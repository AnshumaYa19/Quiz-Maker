const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/quizzes', quizRoutes);


mongoose.connect('mongodb+srv://Anshuma19:Anu19@cluster0.kixpnqw.mongodb.net/quizMaker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.error('Connection error:', err));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
