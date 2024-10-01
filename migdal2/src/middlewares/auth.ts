import passport from "passport";
import { Strategy } from "passport-github2";
import config from 'config'

passport.use(new Strategy(
    config.get('github'),
    function (accessToken: string, refreshToken: string, profile: any, done: Function) {

        // get the github_id from the profile
        // do we have user in the db with this github_id?
        //      this is a login
        // if not
        //      this is signup
        // using the done function, we report to passport the results
        try {
            // done (null, user)
            // done (null, null)
        } catch (e) {
            done(e)
        }

    }
))

export default passport