import { SET_EDUCATION_LIST } from "./types";
import { Education } from "src/models/education";

export const setEducationList = (list: Education[]) => ({ type: SET_EDUCATION_LIST, payload: list });
