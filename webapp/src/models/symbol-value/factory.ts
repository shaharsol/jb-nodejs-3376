import { Model } from "./model";
import mongo from "./mongo";

export function getModel(): Model {
    return mongo
}