import { Request, Response } from "express";
import { Disciplina } from "../models/Disciplina";

export const listarDisciplinas = async (req: Request, res: Response) => {
    const disciplinas = await Disciplina.findAll();
    return res.json(disciplinas);

};
