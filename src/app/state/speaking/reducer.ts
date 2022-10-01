import { Idioms } from "src/models/speaking";

const initialState: Idioms[] = [];


export const speaking = (state: Idioms[] = initialState, action: any) => {
   // let data: any = {...state};
    return action.type === 'SET_SPEAKING_LIST' ? action.payload : state;
}