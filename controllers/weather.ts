import { Weather } from "../models/Weather";
import { Request, Response } from "express";

const fetchCards = async (req: Request, res: Response) => {
  try {
    const cards = await Weather.find();
    return res.status(200).json({ cards });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveCard = async (req: Request, res: Response) => {
  try {
    let {
      city,
      tempC,
      tempF,
      conditionImg,
      conditionText,
      humidity,
      feelsLike,
    } = await req.body;

    const entry = new Weather({
      city,
      tempC,
      tempF,
      conditionImg,
      conditionText,
      humidity,
      feelsLike,
    });

    await entry?.save();
    return res.status(201).json({ msg: "Card saved successfully!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteCard = async (req: Request, res: Response) => {
  try {
    const city = req?.params?.city;
    await Weather.findOneAndDelete({ city });
    return res.status(200).json({ msg: "Card deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { fetchCards, saveCard, deleteCard };
