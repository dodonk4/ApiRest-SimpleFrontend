import passport from 'passport';

const apiLogin = passport.authenticate('local', {
    successRedirect: '/api/loginSuccess',
    failureRedirect: '/api/loginFailure',
    successFlash: 'success',
    failureFlash: true
})

export default apiLogin;