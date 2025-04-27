import { useCallback, useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { hasAllergens } from './allergen';
import {
    setAllergensEnabled,
    setAuthors,
    setCategories,
    setMeatTypes,
    setRecipes,
    setSearchQuery,
    setSideTypes,
} from './app-slice';
import { filtersSelector, recipesSelector } from './app-slice';
import { ApplicationState, store } from './configure-store';
import { Recipe } from './store';
type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Хук для рецептов
export const useRecipes = () => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(recipesSelector);
    const filters = useAppSelector(filtersSelector);

    const setRecipesList = useCallback(
        (recipes: Recipe[]) => {
            dispatch(setRecipes(recipes));
        },
        [dispatch],
    );

    const filteredRecipes = useMemo(
        () =>
            recipes.filter((recipe) => {
                // Поиск по названию и описанию
                if (filters.searchQuery) {
                    const searchLower = filters.searchQuery.toLowerCase();
                    const matchesSearch =
                        recipe.title.toLowerCase().includes(searchLower) ||
                        recipe.description.toLowerCase().includes(searchLower);
                    if (!matchesSearch) return false;
                }

                // Фильтр по категориям
                if (filters.categories.length > 0) {
                    const matchesCategories = recipe.category.some((cat) =>
                        filters.categories.includes(cat),
                    );
                    if (!matchesCategories) return false;
                }

                // Фильтр по авторам
                if (filters.authors.length > 0) {
                    // Здесь нужно добавить логику фильтрации по авторам, если она есть в данных
                }

                // Фильтр по типам мяса
                if (filters.meatTypes.length > 0 && recipe.meat) {
                    if (!filters.meatTypes.includes(recipe.meat)) return false;
                }

                // Фильтр по гарнирам
                if (filters.sideTypes.length > 0 && recipe.side) {
                    if (!filters.sideTypes.includes(recipe.side)) return false;
                }

                // Фильтр по аллергенам
                if (filters.allergens.enabled && filters.allergens.selected.length > 0) {
                    // Получаем список ингредиентов рецепта
                    const recipeIngredients = recipe.ingredients.map(
                        (ingredient) => ingredient.title,
                    );

                    // Проверяем, содержит ли рецепт выбранные аллергены
                    if (hasAllergens(recipeIngredients, filters.allergens.selected)) {
                        return false;
                    }
                }

                return true;
            }),
        [recipes, filters],
    );

    return {
        recipes: filteredRecipes,
        setRecipes: setRecipesList,
    };
};

// Хук для фильтров
export const useFilters = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(filtersSelector);

    const handleSearchChange = useCallback(
        (query: string) => {
            dispatch(setSearchQuery(query));
        },
        [dispatch],
    );

    const handleCategoriesChange = useCallback(
        (categories: string[]) => {
            dispatch(setCategories(categories));
        },
        [dispatch],
    );

    const handleAuthorsChange = useCallback(
        (authors: string[]) => {
            dispatch(setAuthors(authors));
        },
        [dispatch],
    );

    const handleMeatTypesChange = useCallback(
        (meatTypes: string[]) => {
            dispatch(setMeatTypes(meatTypes));
        },
        [dispatch],
    );

    const handleSideTypesChange = useCallback(
        (sideTypes: string[]) => {
            dispatch(setSideTypes(sideTypes));
        },
        [dispatch],
    );

    const handleAllergensEnabledChange = useCallback(
        (enabled: boolean) => {
            dispatch(setAllergensEnabled(enabled));
        },
        [dispatch],
    );

    // const handleSelectedAllergensChange = useCallback(
    //     (allergenNames: string[]) => {
    //         dispatch(setSelectedAllergenNames(allergenNames));
    //     },
    //     [dispatch],
    // );

    return {
        filters,
        handleSearchChange,
        handleCategoriesChange,
        handleAuthorsChange,
        handleMeatTypesChange,
        handleSideTypesChange,
        handleAllergensEnabledChange,
        // handleSelectedAllergensChange,
    };
};
