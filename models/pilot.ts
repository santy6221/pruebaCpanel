import { ModelI } from "../interfaces/modelI";
import { Model } from "./Model";


export default class Pilot extends Model implements ModelI{
    
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
