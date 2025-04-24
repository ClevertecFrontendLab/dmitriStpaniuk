import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Allergen } from '~/types/allergen';

import { ApplicationState } from './configure-store';

export type AppState = typeof initialState;

const initialState = {
    isLoading: false,
    error: '' as string | null,
    selectedAllergens: [] as Allergen[],
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload: error }: PayloadAction<string | null>) {
            state.error = error;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
        setSelectedAllergens(state, { payload: allergens }: PayloadAction<Allergen[]>) {
            state.selectedAllergens = allergens;
        },
    },
});

export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const selectedAllergensSelector = (state: ApplicationState) => state.app.selectedAllergens;

export const { setAppError, setAppLoader, setSelectedAllergens } = appSlice.actions;
export default appSlice.reducer;
