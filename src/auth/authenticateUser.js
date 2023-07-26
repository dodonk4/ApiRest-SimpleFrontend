import bcrypt from 'bcrypt';
import getUserByEmail from '../middlewares/getUserByEmail.js';

const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if(user == null){
        return done(null, false, { message: 'No user with that email'})
    }

    try {
        if(await bcrypt.compare(password, user.password)){
            return done(null, user);
        }else{
            return done(null, false, { message: 'Wrong password'})
        }
    } catch (error) {
        return done(error);
    }
}

export default authenticateUser;