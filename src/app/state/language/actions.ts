import { SET_LANGUAGE_LIST } from "./types";
import { Languages_list } from "src/models/language";

export const setLanguageList = (list: Languages_list[]) => ({ type: SET_LANGUAGE_LIST, payload: list });
