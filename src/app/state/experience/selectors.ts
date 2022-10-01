import { State } from '../definition';
import { createSelector } from '@ngrx/store';
import { selectState } from '../selectors';


export const selectSExperienceList = createSelector(selectState, (state: State) => state.experience);