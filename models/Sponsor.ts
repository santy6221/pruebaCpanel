import { Model } from "./Model";
import { ModelI } from "../interfaces/ModelI";

export default class sponsor extends Model implements ModelI{
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