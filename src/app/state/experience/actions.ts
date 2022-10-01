import { SET_EXPERIENCE_LIST } from "./types";
import { Experience } from "src/models/experience";

export const setExperienceList = (list: Experience[]) => ({ type: SET_EXPERIENCE_LIST, payload: list });
