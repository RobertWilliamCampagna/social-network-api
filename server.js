const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userApiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/SocialNetworkdb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });