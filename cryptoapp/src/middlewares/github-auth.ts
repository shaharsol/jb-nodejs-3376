import config from "config";
import passport from "passport";
import { Strategy } from "passport-github2";

passport.use(new Strategy({ ...config.get('github') }, () => { }))

export default passport;