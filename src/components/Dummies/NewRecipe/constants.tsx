import kopustKotleta from '~/assets/images/main/kopustKotleta.png';
import oladiiKefir from '~/assets/images/main/oladiiKefir.png';
import salatZdorovie from '~/assets/images/main/salatZdorovie.png';
import solianka from '~/assets/images/main/solianka.png';
import bookmark from '~/assets/svg/main/new/bookmark.svg';
import des from '~/assets/svg/main/new/des.svg';
import eyes from '~/assets/svg/main/new/eyes.svg';
import fb from '~/assets/svg/main/new/fb.svg';
import sal from '~/assets/svg/main/new/sal.svg';
import veg from '~/assets/svg/main/new/veg.svg';

export const newRecipeCardMockData = [
    {
        id: 1,
        image: solianka,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 1,
            },
        ],
        tags: 
            {
                id: 1,
                name: 'Первые блюда',
                icon: fb,
            },
        
    },
    {
        id: 2,
        image: kopustKotleta,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        actives: [
            {
                id: 1,
                icon: bookmark,
                count: 2,
            },
            {
                id: 2,
                icon: eyes,
                count: 1,
            },
        ],
        tags: 
            {
                id: 1,
                name: 'Веганские блюда',
                icon: veg,
            },
        
    },
    {
        id: 3,
        image: oladiiKefir,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        actives: [
            {
                id: 1,
                icon: eyes,
                count: 1,
            },
        ],
        tags: 
            {
                id: 1,
                name: 'Десерты, выпечка',
                icon: des,
            },
        
    },
    {
        id: 4,
        image: salatZdorovie,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        actives: [],
        tags: 
            {
                id: 1,
                name: 'Салаты',
                icon: sal,
            },
        
    },
    {
        id: 5,
        image: salatZdorovie,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        actives: [],
        tags: 
            {
                id: 1,
                name: 'Салаты',
                icon: sal,
            },
        
    },
];
