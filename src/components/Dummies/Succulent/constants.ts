import knelli from '~/assets/images/succulent/knelli.png';
import lapsha from '~/assets/images/succulent/lapsha.png';
import tomYam from '~/assets/images/succulent/tomYam.png';
import vetchina from '~/assets/images/succulent/vetchina.png';
import bookmark from '~/assets/svg/main/new/bookmark.svg';
import eyes from '~/assets/svg/main/new/eyes.svg';
import national from '~/assets/svg/main/succulent/national.svg';
import sb from '~/assets/svg/main/succulent/sb.svg';

export const succulentCardsMockData = [
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
];
