import { Model } from "./Model";
import { ModelI } from "../interfaces/modelI";

export default class Article extends Model implements ModelI{
    create(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    static read(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    del() {
        throw new Error("Method not implemented.");
    }
}