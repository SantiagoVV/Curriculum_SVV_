
import { Education } from "src/models/education";
import { Experience } from "src/models/experience";
import { Languages_list } from "src/models/language";
import { Idioms } from "src/models/speaking";

export interface State {
    experience: Experience[];
    education: Education[]
    language: Languages_list[];
    speaking: Idioms[];

}