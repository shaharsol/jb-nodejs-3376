import { Model } from "./model";
import mysql from './mysql';

export default function getModel(): Model {
    return mysql;
}