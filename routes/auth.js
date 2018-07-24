const passport = require('passport')
const express = require('express');
const app = express()
const router = express.Router()

router.get('/facebook', passport.authenticate('facebook', {session: false}));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),(req, res) => {
    res.redirect('Wager://?user=' + JSON.stringify(req.user))
});

router.get('/google', passport.authenticate('google', { scope: ['profile'], session: false }));

router.get('/google/callback', passport.authenticate('google', 
    { failureRedirect: '/auth/google' }), (req, res) => (res.redirect('Wager://?user=' + JSON.stringify(req.user))));


module.exports = router;