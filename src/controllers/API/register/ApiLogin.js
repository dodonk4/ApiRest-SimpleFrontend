import passport from 'passport';

const loginAPI = passport.authenticate('local', {
    successRedirect: '/api/loginSuccess',
    failureRedirect: '/api/loginFailure',
    successFlash: 'success',
    failureFlash: true
})

export default loginAPI;