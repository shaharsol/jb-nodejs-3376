import mongoose from "mongoose";
import config from "config";

mongoose.connect(`mongodb://${config.get('mongo.host')}:${config.get('mongo.port')}/${config.get('mongo.database')}`)

export default mongoose;