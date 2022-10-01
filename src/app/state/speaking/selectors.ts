import { State } from '../definition';
import { createSelector } from '@ngrx/store';
import { selectState } from '../selectors';


export const selectSSpeakingList = createSelector(selectState, (state: State) => state.speaking);