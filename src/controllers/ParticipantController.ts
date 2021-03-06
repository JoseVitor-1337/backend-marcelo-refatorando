import { Request, Response } from "express";
import { CreateParticipant, GetParticipant } from "@usecases/participants";
import { GetAllParticipants } from "@usecases/participants";

class ParticipantController {
  async create(request: Request, response: Response) {
    const { fullName } = request.body;

    try {
      let createParticipant = CreateParticipant;

      await createParticipant.create(request.body);

      return response.json({
        message: `Participantes ${fullName} foi cadastrado com sucesso`,
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async show(request: Request, response: Response) {
    const id = String(request.headers.id);

    try {
      const participant = await GetParticipant.findOne(id);

      return response.json(participant);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async index(request: Request, response: Response) {
    const filters = request.query;

    try {
      const participants = await GetAllParticipants.find(filters);

      return response.json(participants);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ParticipantController();
