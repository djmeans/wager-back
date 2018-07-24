const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router()

const user = require('./routes/user.js');
const bet = require('./routes/bet.js');
const members = require('./routes/members.js');
const message = require('./routes/message.js');
const group = require('./routes/group.js');
const auth = require('./routes/auth.js')

const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');
const { facebook, google } = require('./config');

const transformFacebookProfile = (profile) => (
    {
        name: profile.name,
        avatar: profile.picture.data.url,
});

const transformGoogleProfile = (profile) => (
    {
        name: profile.displayName,
        avatar: profile.image.url,
});

passport.use(new FacebookStrategy(facebook, async (accessToken, refreshToken, profile, done)=> {
    done(null, transformFacebookProfile(profile._json))
    }
));

passport.use(new GoogleStrategy(google,async (accessToken, refreshToken, profile, done) => {
    done(null, transformGoogleProfile(profile._json))
    }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth)
app.use('/users', user)
app.use('/bet', bet)
app.use('/members', members)
app.use('/group', group)
app.use('/message', message)

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});

module.exports = app;
