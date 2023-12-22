const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port = 8000

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tutorMaster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const UserSchema = new mongoose.Schema({
    user_id: String,
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    age: Number,
    interests: [String]
});

const TutorSchema = new mongoose.Schema({
    user_id: String,
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    age: Number,
    subjects: [String]
});

const User = mongoose.model('User', UserSchema, 'users');
const Tutor = mongoose.model('Tutor', TutorSchema, 'tutors');


  




app.get('/check_user',async (req,res)=>{
    const id = req.body.id;
    const user = await User.findOne({ user_id: id });
    const tutor = await Tutor.findOne({ user_id: id });
  
    if (user || tutor) {
      res.send({ exists: true });
    } else {
      res.send({ exists: false });
    }

})

app.post('/register_user', async (req, res) => {
    const userData = {
      user_id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      interests: req.body.interests
    };
  
    const user = new User(userData);
  
    try {
      await user.save();
      res.send({ status: 'success' });
    } catch (err) {
      console.error(err);
      res.send({ status: 'error' });
    }
});

app.post('/register_tutor', async (req, res) => {
    const tutorData = {
      user_id: req.body.id,
      firstname: req.body.name.firstname,
      lastname: req.body.name.lastname,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      subjects: req.body.subjects
    };
  
    const tutor = new Tutor(tutorData);
  
    try {
      await tutor.save();
      res.send({ status: 'success' });
    } catch (err) {
      console.error(err);
      res.send({ status: 'error' });
    }
});

app.get('/get_user', async (req, res) => {
    const id = req.body.id;
    try {
      const user = await User.findOne({user_id: id});
      res.send(user);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
});

app.get('/get_tutor', async (req, res) => {
    const id = req.body.id;
    try {
      const tutor = await Tutor.findOne({user_id: id});
      res.send(tutor);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
});

app.get('/get_all_users', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
  });