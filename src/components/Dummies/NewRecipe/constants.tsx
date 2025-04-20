import kopustKotleta from '~/assets/images/main/kopustKotleta.png';
import lapshaSKyricey from '~/assets/images/main/lapshaSKyricey.png';
import salatZdorovie from '~/assets/images/main/salatZdorovie.png';
import tomYam from '~/assets/images/main/tomYam.png';
import chesnok from '~/assets/images/tabs/chesnok.png';
import kartoshka from '~/assets/images/tabs/kartoshka.png';
import lazania from '~/assets/images/tabs/lazania.png';
import puri from '~/assets/images/tabs/puri.png';
import ruletiki from '~/assets/images/tabs/ruletiki.png';
import national from '~/assets/svg/national.svg';
import salad from '~/assets/svg/salad.svg';
import second from '~/assets/svg/second.svg';
import sous from '~/assets/svg/sous.svg';
import vegan from '~/assets/svg/vegan.svg';
import zagotovki from '~/assets/svg/zagotovki.svg';
import zakuski from '~/assets/svg/zakuski.svg';

import { SliderMockData } from './newRecipe.d';

// export const newRecipeCardMockData = [
//     {
//         id: 1,
//         image: solianka,
//         title: 'Солянка с грибами',
//         description:
//             'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
//         actives: [
//             {
//                 id: 1,
//                 icon: bookmark,
//                 count: 1,
//             },
//         ],
//         tags: {
//             id: 1,
//             name: 'Первые блюда',
//             icon: fb,
//         },
//     },
//     {
//         id: 2,
//         image: kopustKotleta,
//         title: 'Капустные котлеты',
//         description:
//             'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
//         actives: [
//             {
//                 id: 1,
//                 icon: bookmark,
//                 count: 2,
//             },
//             {
//                 id: 2,
//                 icon: eyes,
//                 count: 1,
//             },
//         ],
//         tags: {
//             id: 1,
//             name: 'Веганские блюда',
//             icon: veg,
//         },
//     },
//     {
//         id: 3,
//         image: oladiiKefir,
//         title: 'Оладьи на кефире "Пышные"',
//         description:
//             'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
//         actives: [
//             {
//                 id: 1,
//                 icon: eyes,
//                 count: 1,
//             },
//         ],
//         tags: {
//             id: 1,
//             name: 'Десерты, выпечка',
//             icon: des,
//         },
//     },
//     {
//         id: 4,
//         image: salatZdorovie,
//         title: 'Салат "Здоровье"',
//         description:
//             'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
//         actives: [],
//         tags: {
//             id: 1,
//             name: 'Салаты',
//             icon: sal,
//         },
//     },
//     {
//         id: 5,
//         image: salatZdorovie,
//         title: 'Салат "Здоровье"',
//         description:
//             'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
//         actives: [],
//         tags: {
//             id: 1,
//             name: 'Салаты',
//             icon: sal,
//         },
//     },
// ];

export const badgesIcons = {
    vegan: { name: 'Веганские блюда', icon: vegan },
    'second-dish': { name: 'Вторые блюда', icon: second },
    snacks: { name: 'Закуски', icon: zakuski },
    national: { name: 'Национальные блюда', icon: national },
    'poultry-dish': { name: 'Птичные блюда', icon: zagotovki },
    vegetables: { name: 'Овощи', icon: vegan },
    'side-dishes': { name: 'Полуфабрикаты', icon: sous },
    salads: { name: 'Салаты', icon: salad },
};

export const sliderMockData: SliderMockData[] = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: kartoshka,
        bookmarks: 85,
        likes: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: kartoshka,
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: 'potatoes',
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: ruletiki,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: 'potatoes',
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: lazania,
        bookmarks: 85,
        likes: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: '',
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: puri,
        bookmarks: 85,
        likes: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: '',
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: chesnok,
        bookmarks: 124,
        likes: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: kopustKotleta,
        bookmarks: 2,
        likes: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: '',
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description:
            'Сытное рагу из сезонных овощей, приправленное травами. Самое вкусное и полезное блюдо для лета!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: tomYam,
        bookmarks: 8,
        likes: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: '',
    },
    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        image: lapshaSKyricey,
        bookmarks: 258,
        likes: 1342,
        date: '2024-03-08T00:00:00Z',
        time: '40 минут',
        portions: 4,
        nutritionValue: { calories: 400, proteins: 30, fats: 15, carbohydrates: 50 },
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить лапшу.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: kartoshka,
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
                image: kartoshka,
            },
        ],
        meat: 'chicken',
        side: '',
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description:
            'Салат с обжаренными на гриле овощами и легкой заправкой. Самое вкусное и полезное блюдо для лета!',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: salatZdorovie,
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: kartoshka,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: kartoshka,
            },
        ],
        meat: '',
        side: '',
    },
];
