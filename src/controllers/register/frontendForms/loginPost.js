import passport from 'passport';

const loginPost = passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/login',
    failureFlash: true
})

export default loginPost;