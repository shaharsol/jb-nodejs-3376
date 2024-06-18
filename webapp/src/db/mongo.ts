import mongoose from "mongoose";
import config from 'config';

const { host, port, database } = config.get<any>('mongo');

mongoose.connect(`mongodb://${host}:${port}/${database}`)

export default mongoose;