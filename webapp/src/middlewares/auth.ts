import passport from "passport";
import { Profile, Strategy } from "passport-github2";
import config from 'config'

passport.use(new Strategy(
    {...config.get('github')},
    (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {

    }
))
export default passport;