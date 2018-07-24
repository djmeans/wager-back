const facebook = {
    clientID: '200206493998307',
    clientSecret: 'fa00a8ebfd7b5c6190f8983c3fe11866',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

const google = {
    clientID: '455894563217-8ftdu6tff4os0hd1sp4t202jmln7bj7j.apps.googleusercontent.com',
    clientSecret: 'U1tG54rKYMBe9Z4Bk0eUcv2Q',
    callbackURL: 'http://localhost:3000/auth/google/',
};

module.exports.facebook = facebook;
module.exports.google = google;