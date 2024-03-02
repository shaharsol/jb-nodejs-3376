import passport from 'passport';
import { Strategy } from 'passport-local';

const database = [
    {
        email: 'shahar@johnbryce.co.il',
        password: '123456'
    },
    {
        email: 'maynard@tool.com',
        password: 'PassowrdsAreForHumans'
    }
]


passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
            // try to fetch the user from the database
            // according to the user input
            const user = database.find(record => record.email === email && record. password === password);

            // if we didn't find a user in the database, inform Passport about it
            if (!user) {
                return done(null, false, { message: 'No such user' });
            }

            // if we did find a user in the database, inform passport about it
            return done(null, user);
        } catch (err) {
            // if any error occurred in the process, inform passport about it
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;
  