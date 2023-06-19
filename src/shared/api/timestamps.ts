import { TimestampResponseType } from "../api";
import { instance } from "../config";

export const apiGetTimestamps = () => instance.get<TimestampResponseType>("5e60c5f53300005fcc97bbdd");
