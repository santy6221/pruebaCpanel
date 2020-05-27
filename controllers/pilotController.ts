import { Request, Response } from "express"
import pilotServices from "../services/pilotServices";

export async function getAllPilots(req: Request, res: Response){
res.status(200).json({
    "prueba": "Funciona"
})
}

export async function CreatePilot(req: Request, res: Response){

}

export async function update(req: Request, res: Response){

}

export async function del(req: Request, res: Response){

}

export async function seeByPodium(req: Request, res: Response){
    
}

export async function see3Best(req: Request, res: Response){
    
}

export async function updateNick(req: Request, res: Response){
    
}

export async function seeByPoints(req: Request, res: Response){
    
}