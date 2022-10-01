import { State } from '../definition';
import { createSelector } from '@ngrx/store';
import { selectState } from '../selectors';


export const selectSEducationList = createSelector(selectState, (state: State) => state.education);