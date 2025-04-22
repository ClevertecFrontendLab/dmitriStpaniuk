import bookmark from '~/assets/svg/main/new/bookmark.svg';
import fb from '~/assets/svg/main/new/fb.svg';
import like from '~/assets/svg/main/new/like.svg';
import sb from '~/assets/svg/main/succulent/sb.svg';

export const relevantKitchenMockData = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        actives: [
            {
                id: 72457672,
                icon: bookmark,
                count: 1,
            },
            {
                id: 35776821,
                icon: like,
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
                icon: like,
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
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.',
};

export const relevantKitchenListCardMockData = [
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
        image: fb,
        title: 'Сырный суп с лапшой и брокколи',
        button: 'Готовить',
    },
];
