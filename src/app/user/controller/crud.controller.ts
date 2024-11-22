import { Request, Response } from "express";
import service from "../services/crud.service";
import { z } from "zod";
import { handleError } from "../../../utils/handleError";
import { formatError } from "../../../utils/formatError";

const create = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const schema = z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email format"),
    });

    const {
      success: isValid,
      data: user,
      error
    } = schema.safeParse(body);

    if (!isValid)
      throw handleError({ error, status: 500 });

    const {
      email,
      name,
    } = user;

    const {
      success,
      data,
      e,
    } = await service.create({ email, name });

    if (!success)
      throw handleError({ error: e?.message, status: 500 });

    res.status(200).json({ success: true, message: "Usuário criado com sucesso.", data });
  } catch (e) {
    const error = formatError(e?.message);

    res.status(error.status).json({ success: false, message: error?.error });
  }
}

export default {
  create
};