import config from "config";
import passport from "passport";
import { Profile, Strategy } from "passport-github2";
import getModel from "../models/user/factory";

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(
    new Strategy({ ...config.get('github') },
        async (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
            try {
                // now I have profile.id
                // top determine if it's a signup or sign in
                const user = await getModel().login(profile.id);
                // get user with githubId = profile.id
                // if succeed, then this is a login
                if (user) return done(null, user)

                // else, this is a signup
                const newUser = await getModel().signup(profile.id);
                if (newUser) return done(null, newUser);

                return done(null, false);

            } catch (err) {
                done(err)
            }

        })
)

export default passport;