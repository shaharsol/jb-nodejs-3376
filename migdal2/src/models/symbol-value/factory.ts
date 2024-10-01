import { Model } from "./model";
import mongo from './mongo'

export default function getModel(): Model {
    return mongo;
}