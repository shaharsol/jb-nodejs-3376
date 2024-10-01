import mongoose from "mongoose";
import config from "config"

const { host, port, database } = config.get<{host: string, port: number, database: string}>('mongo')

mongoose.connect(`mongodb://${host}:${port}/${database}`)

export default mongoose