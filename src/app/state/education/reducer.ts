import { Education } from "src/models/education";

const initialState: Education[] = [];


export const education = (state: Education[] = initialState, action: any) => {
   // let data: any = {...state};
    return action.type === 'SET_EDUCATION_LIST' ? action.payload : state;
}