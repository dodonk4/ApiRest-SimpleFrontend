import { Strategy as LocalStrategy } from "passport-local";
import authenticateUser from "./authenticateUser.js";
import getUserById from "../middlewares/getUserById.js";

const initializePassport = (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'email' },
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });

}

export default initializePassport;