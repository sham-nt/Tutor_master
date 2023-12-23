const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dayjs = require('dayjs');
const { v4: uuid } = require('uuid');
const { google } = require('googleapis');

const app = express()
const port = 8000

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tutorMaster' )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const UserSchema = new mongoose.Schema({
    user_id: String,
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    age: Number,
    interests: [String],
    isTutor: Boolean
});

const User = mongoose.model('User', UserSchema, 'users');

app.post('/register_user', async (req, res) => {
    const userData = {
      user_id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      interests: req.body.interests,
      isTutor: req.body.isTutor
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

app.get('/get_all_users', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
});


// Google Calendar API


const calendar = google.calendar({ version: 'v3' ,auth: "AIzaSyC_9cIp6dadNRyrWCa4h7weXwJJIujjyN4"}); // API Key

const oauth2Client = new google.auth.OAuth2(
  "177921271660-7f5639k6t5qh7p6kksdl11t9adpchid2.apps.googleusercontent.com",//CLIENT_ID,
  "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",//CLIENT_SECRET,
  "http://localhost:8000/google/redirect" //REDIRECT_URL
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar'
];

app.get('/google', (req, res) => {    
  const url = oauth2Client.generateAuthUrl({  
      access_type: 'offline',
      scope: scopes
  });
  res.redirect(url);
});

app.get('/google/redirect', async (req) => { 
  const code = req.query.code;
  
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);;

});

app.get("/schedule_event", async (req, res) => {
  await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      auth: oauth2Client,
      requestBody: {
          'summary': 'Math Session With Sumukha',
          'location': 'Mysore India',
          'description': 'Trignometry session with sumukha',
          'start': {
              'dateTime': dayjs(new Date()).add(3, 'day').toISOString(),
              'timeZone': 'Asia/Kolkata',
          },
          'end': {
              'dateTime': dayjs(new Date()).add(3, 'day').add(3, 'hour').toISOString(),
              'timeZone': 'Asia/Kolkata',
          },
          'conferenceData': {
              createRequest: {
                  requestId: uuid(),
              },
          },
          'attendees': [
              {
                  email: "adithyamurthy2003@gmail.com",
                  email: "ashishrao55@yahoo.com"
              },
          ],
      },
  });


  res.send({
      msg: 'Event scheduled'
  });
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
  });