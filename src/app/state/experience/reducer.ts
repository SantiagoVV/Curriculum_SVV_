import { Experience } from "src/models/experience";

const initialState: Experience[] = [];


export const experience = (state: Experience[] = initialState, action: any) => {
   // let data: any = {...state};
    return action.type === 'SET_EXPERIENCE_LIST' ? action.payload : state;
}