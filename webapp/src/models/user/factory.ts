import { Model } from "./model";
import mysql from "./mysql";

export function getModel(): Model {
    return mysql
}