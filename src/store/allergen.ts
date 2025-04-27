export interface AllergenIngredientMap {
    allergen: string;
    ingredients: string[];
}

export const allergenIngredientsMap: AllergenIngredientMap[] = [
    {
        allergen: 'Молочные продукты',
        ingredients: ['сыр', 'масло'],
    },
    {
        allergen: 'Яйцо',
        ingredients: [],
    },
    {
        allergen: 'Рыба',
        ingredients: [],
    },
    {
        allergen: 'Моллюски',
        ingredients: [],
    },
    {
        allergen: 'Орехи',
        ingredients: [],
    },
    {
        allergen: 'Томат (помидор)',
        ingredients: ['томатный соус'],
    },
    {
        allergen: 'Цитрусовые',
        ingredients: [],
    },
    {
        allergen: 'Клубника (ягоды)',
        ingredients: [],
    },
    {
        allergen: 'Шоколад',
        ingredients: [],
    },
];

/**
 * Функция для проверки, содержит ли рецепт аллергены
 * @param ingredients - массив ингредиентов рецепта
 * @param allergens - массив выбранных аллергенов
 * @returns true, если рецепт содержит хотя бы один из выбранных аллергенов
 */
export const hasAllergens = (ingredients: string[], allergens: string[]): boolean => {
    // Получаем все ингредиенты, которые соответствуют выбранным аллергенам
    const allergenIngredients = allergens.flatMap((allergen) => {
        const category = allergenIngredientsMap.find(
            (item) => item.allergen.toLowerCase() === allergen.toLowerCase(),
        );
        if (category) {
            return category.ingredients;
        }
        return allergen;
    });
    // Проверяем, есть ли хотя бы один ингредиент из списка аллергенов в рецепте
    return ingredients.some((ingredient) =>
        allergenIngredients.some((allergenIngredient) =>
            ingredient.toLowerCase().includes(allergenIngredient.toLowerCase()),
        ),
    );
};
