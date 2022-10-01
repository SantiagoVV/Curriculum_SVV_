import { SET_SPEAKING_LIST } from "./types";
import { Idioms } from "src/models/speaking";

export const setSpeakingList = (list: Idioms[]) => ({ type: SET_SPEAKING_LIST, payload: list });
