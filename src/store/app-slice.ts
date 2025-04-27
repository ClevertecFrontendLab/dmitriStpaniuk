import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sliderMockData } from '~/components/Dummies/NewRecipe/constants';
import { FilterState, Recipe } from '~/store/store';
import { Allergen } from '~/types/allergen';

import { hasAllergens } from './allergen';
import { ApplicationState } from './configure-store';
import {
    hasAuthors,
    hasCategories,
    hasMeatTypes,
    hasSideTypes,
    isRecipeTitleMatch,
} from './filters';

export type AppState = typeof initialState;

const initialState = {
    isLoading: false,
    error: '' as string | null,
    selectedAllergens: [] as Allergen[],
    recipes: sliderMockData as Recipe[],
    filteredRecipes: sliderMockData as Recipe[],
    filters: {
        searchQuery: '',
        categories: [],
        authors: [],
        meatTypes: [],
        sideTypes: [],
        allergens: {
            enabled: false,
            selected: [],
        },
    } as FilterState,
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
            // state.filteredRecipes = state.recipes.filter(
            //     (item) =>
            //         !hasAllergens(
            //             item.ingredients.map((ingredient) => ingredient.title.toLowerCase()),
            //             allergens.map((allergen) => allergen.name.toLowerCase()),
            //         ),
            // );
        },
        setRecipes(state, { payload: recipes }: PayloadAction<Recipe[]>) {
            state.recipes = recipes;
        },
        setSearchQuery(state, { payload: query }: PayloadAction<string>) {
            state.filters.searchQuery = query;
        },
        setCategories(state, { payload: categories }: PayloadAction<string[]>) {
            state.filters.categories = categories;
        },
        setAuthors(state, { payload: authors }: PayloadAction<string[]>) {
            state.filters.authors = authors;
        },
        setMeatTypes(state, { payload: meatTypes }: PayloadAction<string[]>) {
            state.filters.meatTypes = meatTypes;
        },
        setSideTypes(state, { payload: sideTypes }: PayloadAction<string[]>) {
            state.filters.sideTypes = sideTypes;
        },
        setAllergensEnabled(state, { payload: enabled }: PayloadAction<boolean>) {
            state.filters.allergens.enabled = enabled;
        },
        resetFilters(state) {
            state.filters = initialState.filters;
        },
    },
});

export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const recipesSelector = (state: ApplicationState) => state.app.recipes;
export const selectedAllergensSelector = (state: ApplicationState) => state.app.selectedAllergens;
export const filtersSelector = (state: ApplicationState) => state.app.filters;

export const filteredRecipesSelector = createSelector(
    [recipesSelector, selectedAllergensSelector, filtersSelector],
    (recipes, selectedAllergens, filters) =>
        recipes.filter(
            (item) =>
                !hasAllergens(
                    item.ingredients.map((ingredient) => ingredient.title.toLowerCase()),
                    selectedAllergens.map((allergen) => allergen.name.toLowerCase()),
                ) &&
                hasCategories(item.category, filters.categories) &&
                hasAuthors(item.author, filters.authors) &&
                hasMeatTypes(item.meat, filters.meatTypes) &&
                hasSideTypes(item.side, filters.sideTypes) &&
                isRecipeTitleMatch(item.title, filters.searchQuery),
        ),
);

export const {
    setAppError,
    setAppLoader,
    setSelectedAllergens,
    setRecipes,
    setSearchQuery,
    setCategories,
    setAuthors,
    setMeatTypes,
    setSideTypes,
    setAllergensEnabled,
    resetFilters,
} = appSlice.actions;

export default appSlice.reducer;
