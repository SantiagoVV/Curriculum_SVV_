import { State } from '../definition';
import { createSelector } from '@ngrx/store';
import { selectState } from '../selectors';


export const selectSLanguageList = createSelector(selectState, (state: State) => state.language);