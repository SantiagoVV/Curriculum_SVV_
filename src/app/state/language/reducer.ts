import { Experience } from "src/models/experience";
import { Languages_list } from "src/models/language";

const initialState: Languages_list[] = [];


export const language = (state: Languages_list[] = initialState, action: any) => {
   // let data: any = {...state};
    return action.type === 'SET_LANGUAGE_LIST' ? action.payload : state;
}