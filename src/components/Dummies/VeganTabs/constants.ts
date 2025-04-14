import tomYam from '~/assets/images/succulent/tomYam.png';
import chesnok from '~/assets/images/tabs/chesnok.png';
import kartoshka from '~/assets/images/tabs/kartoshka.png';
import lazania from '~/assets/images/tabs/lazania.png';
import puri from '~/assets/images/tabs/puri.png';
import ruletiki from '~/assets/images/tabs/ruletiki.png';
import tefteli from '~/assets/images/tabs/tefteli.png';
import bookmark from '~/assets/svg/main/new/bookmark.svg';
import eyes from '~/assets/svg/main/new/eyes.svg';
import national from '~/assets/svg/main/succulent/national.svg';
import sb from '~/assets/svg/main/succulent/sb.svg';
import child from '~/assets/svg/main/tabs/child.svg';
import grill from '~/assets/svg/main/tabs/grill.svg';

export const veganTabsMockData = [
    {
        id: 12341234,
        title: 'Закуски',
    },
    {
        id: 12341235,
        title: 'Первые блюда',
    },
    {
        id: 12341236,
        title: 'Вторые блюда',
    },
    {
        id: 12341237,
        title: 'Гарниры',
    },
    {
        id: 12341238,
        title: 'Десерты',
    },
    {
        id: 12341239,
        title: 'Выпечка',
    },
    {
        id: 12341240,
        title: 'Сыроедческие блюда',
    },
    {
        id: 12341241,
        title: 'Напитки',
    },
];

export const veganTabsCardsMockData = [
    {
        id: 1,
        image: kartoshka,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 85,
            },
            {
                id: 2,
                icon: eyes,
                count: 152,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Национальные',
                icon: national,
            },
        ],
    },
    {
        id: 2,
        image: ruletiki,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 85,
            },
            {
                id: 2,
                icon: eyes,
                count: 152,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Детские блюда',
                icon: child,
            },
        ],
    },
    {
        id: 4,
        image: tomYam,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 258,
            },
            {
                id: 2,
                icon: eyes,
                count: 342,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Национальные',
                icon: national,
            },
        ],
    },
    {
        id: 423451,
        image: lazania,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 85,
            },
            {
                id: 2,
                icon: eyes,
                count: 152,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Блюда на гриле',
                icon: grill,
            },
        ],
    },
    {
        id: 42348234,
        image: tefteli,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 85,
            },
            {
                id: 2,
                icon: eyes,
                count: 152,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Вторые блюда',
                icon: sb,
            },
        ],
    },
    {
        id: 423432458234,
        image: tefteli,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 85,
            },
            {
                id: 2,
                icon: eyes,
                count: 152,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Вторые блюда',
                icon: sb,
            },
        ],
    },
    {
        id: 423472458234,
        image: chesnok,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 124,
            },
            {
                id: 2,
                icon: eyes,
                count: 324,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Национальные',
                icon: national,
            },
        ],
    },
    {
        id: 4234726358234,
        image: puri,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 124,
            },
            {
                id: 2,
                icon: eyes,
                count: 324,
            },
        ],
        tags: [
            {
                id: 1,
                name: 'Национальные',
                icon: national,
            },
        ],
    },
];
