import knelli from '~/assets/images/main/kneliSoSpagetti.png';
import lapsha from '~/assets/images/succulent/lapsha.png';
import tomYam from '~/assets/images/succulent/tomYam.png';
import vetchina from '~/assets/images/succulent/vetchina.png';
import kartoshka from '~/assets/images/tabs/kartoshka.png';
import lazania from '~/assets/images/tabs/lazania.png';
import ruletiki from '~/assets/images/tabs/ruletiki.png';
import tefteli from '~/assets/images/tabs/tefteli.png';
import bookmark from '~/assets/svg/main/new/bookmark.svg';
import eyes from '~/assets/svg/main/new/eyes.svg';
import kastrulia from '~/assets/svg/main/succulent/kastrulia.svg';
import national from '~/assets/svg/main/succulent/national.svg';
import sb from '~/assets/svg/main/succulent/sb.svg';
import child from '~/assets/svg/main/tabs/child.svg';
import grill from '~/assets/svg/main/tabs/grill.svg';

export const veganCuisineListCardMockData = [
    {
        id: 12341,
        image: sb,
        title: 'Стейк для вегетарианцев',
        button: 'Готовить',
    },
    {
        id: 243526546,
        image: sb,
        title: 'Котлеты из гречки и фасоли',
        button: 'Готовить',
    },
    {
        id: 3243575672,
        image: kastrulia,
        title: 'Сырный суп с лапшой и брокколи',
        button: 'Готовить',
    },
];

export const relevantKitchenMockData = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        actives: [
            {
                id: 72451223672,
                icon: bookmark,
                count: 1,
            },
            {
                id: 357768223,
                icon: eyes,
                count: 1,
            },
        ],
        tags: [
            {
                id: 1356412341234,
                name: 'Вторые блюда',
                icon: sb,
            },
        ],
    },
    {
        id: 1223412341234,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        actives: [
            {
                id: 123412341234,
                icon: bookmark,
                count: 2,
            },
            {
                id: 213412341234,
                icon: eyes,
                count: 1,
            },
        ],
        tags: [
            {
                id: 123412341234,
                name: 'Вторые блюда',
                icon: sb,
            },
        ],
    },
];

export const relevantKitchenTitleDescriptionMockData = {
    title: 'Веганская кухня',
    description:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
};

export const succulentCardsMockData = [
    {
        id: 3,
        image: lapsha,
        title: 'Лапша с курицей и шафраном',
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
                name: 'Вторые блюда',
                icon: sb,
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
        id: 2,
        image: vetchina,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 159,
            },
            {
                id: 2,
                icon: eyes,
                count: 257,
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
        id: 1,
        image: knelli,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
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
        id: 54463245,
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
        id: 54463245,
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
];
