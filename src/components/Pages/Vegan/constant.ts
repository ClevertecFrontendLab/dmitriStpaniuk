import children from '~/assets/svg/children.svg';
import listik from '~/assets/svg/listik.svg';
import bookmark from '~/assets/svg/main/new/bookmark.svg';
import eyes from '~/assets/svg/main/new/eyes.svg';
import national from '~/assets/svg/national.svg';

export const veganCuisineListCardMockData = [
    {
        id: 12341,
        image: children,
        title: 'Домашние сырные палочки',
        button: 'Готовить',
    },
    {
        id: 243526546,
        image: national,
        title: 'Панкейки',
        button: 'Готовить',
    },
    {
        id: 3243575672,
        image: listik,
        title: 'Воздушное банановое печенье на сковороде',
        button: 'Готовить',
    },
];

export const relevantKitchenMockData = [
    {
        id: 1,
        title: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
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
                name: 'Детские блюда',
                icon: children,
            },
        ],
    },
    {
        id: 1223412341234,
        title: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
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
                name: 'Детские блюда',
                icon: children,
            },
        ],
    },
];

export const relevantKitchenTitleDescriptionMockData = {
    title: 'Десерты, выпечка',
    description:
        'Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.',
};
