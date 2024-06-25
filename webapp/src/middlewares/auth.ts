import passport from "passport";
import { Profile, Strategy } from "passport-github2";
import config from 'config'
import { getModel } from "../models/user/factory";
import { DTO } from "../models/user/dto";

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user as any);
});

passport.use(new Strategy(
    {...config.get('github')},
    async (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        try {
            const githubId = profile.id;

            let user = await getModel().login({githubId});
            if (!user) {
                user = await getModel().signup({githubId});
            }

            done(null, user);
        } catch (err) {
            done(err)
        }

    }
))
export default passport;