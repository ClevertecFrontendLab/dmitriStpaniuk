import children from '~/assets/svg/children.svg';
import dessert from '~/assets/svg/dessert.svg';
import drink from '~/assets/svg/drink.svg';
import first from '~/assets/svg/first.svg';
import grill from '~/assets/svg/grill.svg';
import hospital from '~/assets/svg/hospital.svg';
import national from '~/assets/svg/national.svg';
import salad from '~/assets/svg/salad.svg';
import second from '~/assets/svg/second.svg';
import sous from '~/assets/svg/sous.svg';
import vegan from '~/assets/svg/vegan.svg';
import zagotovki from '~/assets/svg/zagotovki.svg';
import zakuski from '~/assets/svg/zakuski.svg';

export const menuMockData = [
    {
        id: 1,
        label: 'Салаты',
        icon: salad,
        href: '/salads',
        submenu: [
            {
                id: 45366,
                label: 'Мясные салаты',
                href: '/meat-salads',
            },
            {
                id: 272465745768,
                label: 'Рыбные салаты',
                href: '/fish-salads',
            },
            {
                id: 34562432,
                label: 'Овощные салаты',
                href: '/vegetable-salads',
            },
            {
                id: 24557780,
                label: 'Теплые салаты',
                href: '/warm-salads',
            },
        ],
    },
    {
        id: 2,
        label: 'Закуски',
        icon: zakuski,
        href: '/snacks',
        submenu: [
            {
                id: 106,
                label: 'Мясные закуски',
                href: '/meat-snacks',
            },
            {
                id: 107,
                label: 'Рыбные закуски',
                href: '/fish-snacks',
            },
            {
                id: 108,
                label: 'Овощные закуски',
                href: '/vegetable-snacks',
            },
            {
                id: 109,
                label: 'Теплые закуски',
                href: '/warm-snacks',
            },
            {
                id: 110,
                label: 'Бутерброды',
                href: '/toast',
            },
            {
                id: 111,
                label: 'Фастфуд',
                href: '/fastfood',
            },
        ],
    },
    {
        id: 3,
        label: 'Первые блюда',
        icon: first,
        href: '/first-dish',
        submenu: [
            {
                id: 112,
                label: 'Мясные супы',
                href: '/meat-soups',
            },
            {
                id: 113,
                label: 'Овощные супы',
                href: '/vegetable-soups',
            },
            {
                id: 114,
                label: 'Бульоны',
                href: '/broths',
            },
            {
                id: 115,
                label: 'Холодные супы',
                href: '/cold-soups',
            },
            {
                id: 116,
                label: 'Диетические супы',
                href: '/dietetic-soups',
            },
        ],
    },
    {
        id: 4,
        label: 'Вторые блюда',
        icon: second,
        href: '/second-dish',
        submenu: [
            {
                id: 117,
                label: 'Мясные',
                href: '/meat',
            },
            {
                id: 118,
                label: 'Рыбные',
                href: '/fish',
            },
            {
                id: 119,
                label: 'Овощные',
                href: '/vegetables',
            },
            {
                id: 120,
                label: 'Из птицы',
                href: '/bird',
            },
            {
                id: 121,
                label: 'Из грибов',
                href: '/mushrooms',
            },
            {
                id: 122,
                label: 'Из субпродуктов',
                href: '/subproducts',
            },
            {
                id: 123,
                label: 'На пару',
                href: '/par',
            },
            {
                id: 124,
                label: 'Пельмени, вареники',
                href: '/pelmeni-vareniki',
            },
            {
                id: 125,
                label: 'Мучные гарниры',
                href: '/pastry',
            },
            {
                id: 126,
                label: 'Овощные гарниры',
                href: '/vegetables-side-dish',
            },
            {
                id: 127,
                label: 'Пицца',
                href: '/pizza',
            },
            {
                id: 128,
                label: 'Суши',
                href: '/sushi',
            },
        ],
    },
    {
        id: 5,
        label: 'Десерты, выпечка',
        icon: dessert,
        href: '/desserts-and-pastry',
        submenu: [
            {
                id: 129,
                label: 'Блины и оладьи',
                href: '/pancakes-and-waffles',
            },
            {
                id: 18,
                label: 'Пироги и пончики',
                href: '/pies-and-donuts',
            },
            {
                id: 19,
                label: 'Торты',
                href: '/cakes',
            },
            {
                id: 20,
                label: 'Рулеты',
                href: '/rolls',
            },
            {
                id: 21,
                label: 'Кексы и маффины',
                href: '/cakes-and-muffins',
            },
            {
                id: 22,
                label: 'Сырники и ватрушки',
                href: '/syrniki-and-vatrushki',
            },
            {
                id: 23,
                label: 'Из слоеного теста',
                href: '/from-pastry-dough',
            },
            {
                id: 24,
                label: 'Из заварного теста',
                href: '/from-zavarnogo-dough',
            },
            {
                id: 25,
                label: 'Из дрожжевого теста',
                href: '/from-yeast-dough',
            },
            {
                id: 26,
                label: 'Булочки и сдоба',
                href: '/bread-and-pastry',
            },
            {
                id: 27,
                label: 'Хлеб',
                href: '/bread',
            },
            {
                id: 28,
                label: 'Тесто на пиццу',
                href: '/pizza-dough',
            },
            {
                id: 29,
                label: 'Кремы',
                href: '/cremes',
            },
        ],
    },
    {
        id: 6,
        label: 'Блюда на гриле',
        icon: grill,
        href: '/grill-dish',
        submenu: [
            {
                id: 30,
                label: 'Говядина',
                href: '/govyadina',
            },
            {
                id: 31,
                label: 'Свинина',
                href: '/svinina',
            },
            {
                id: 32,
                label: 'Птица',
                href: '/bird',
            },
            {
                id: 33,
                label: 'Рыба',
                href: '/fish',
            },
            {
                id: 34,
                label: 'Грибы',
                href: '/griby',
            },
            {
                id: 35,
                label: 'Овощи',
                href: '/vegetables',
            },
        ],
    },
    {
        id: 7,
        label: 'Веганская кухня',
        icon: vegan,
        href: '/vegan',
        attributes: 'vegan',
        submenu: [
            {
                id: 36,
                label: 'Закуски',
                href: '/snacks',
            },
            {
                id: 37,
                label: 'Первые блюда',
                href: '/first-dish',
            },
            {
                id: 38,
                label: 'Вторые блюда',
                href: '/second-dish',
            },
            {
                id: 39,
                label: 'Гарниры',
                href: '/garniry',
            },
            {
                id: 40,
                label: 'Десерты',
                href: '/desserts',
            },
            {
                id: 41,
                label: 'Выпечка',
                href: '/pastry',
            },
            {
                id: 42,
                label: 'Сыроедческие блюда',
                href: '/raw-food',
            },
            {
                id: 43,
                label: 'Напитки',
                href: '/drinks',
            },
        ],
    },
    {
        id: 8,
        label: 'Детские блюда',
        icon: children,
        href: '/children-dishes',
        submenu: [
            {
                id: 44,
                label: 'Первые блюда',
                href: '/first-dishes',
            },
            {
                id: 45,
                label: 'Вторые блюда',
                href: '/second-dish',
            },
            {
                id: 46,
                label: 'Гарниры',
                href: '/garniry',
            },
            {
                id: 47,
                label: 'Выпечка',
                href: '/pastry',
            },
            {
                id: 48,
                label: 'Без глютена',
                href: '/without-gluten',
            },
            {
                id: 49,
                label: 'Без сахара',
                href: '/without-sugar',
            },
            {
                id: 50,
                label: 'Без аллергенов',
                href: '/without-allergens',
            },
            {
                id: 51,
                label: 'Блюда для прикорма',
                href: '/food-for-baby-food',
            },
        ],
    },
    {
        id: 9,
        label: 'Лечебное питание',
        icon: hospital,
        href: '/dietary-food',
        submenu: [
            {
                id: 52,
                label: 'Детская диета',
                href: '/children-diet',
            },
            {
                id: 53,
                label: 'Диета №1',
                href: '/diet-1',
            },
            {
                id: 54,
                label: 'Диета №2',
                href: '/diet-2',
            },
            {
                id: 55,
                label: 'Диета №3',
                href: '/diet-3',
            },
            {
                id: 56,
                label: 'Диета №5',
                href: '/diet-5',
            },
            {
                id: 57,
                label: 'Диета №6',
                href: '/diet-6',
            },
            {
                id: 58,
                label: 'Диета №7',
                href: '/diet-7',
            },
            {
                id: 59,
                label: 'Диета №8',
                href: '/diet-8',
            },
            {
                id: 60,
                label: 'Диета №9',
                href: '/diet-9',
            },
            {
                id: 61,
                label: 'Диета №10',
                href: '/diet-10',
            },
            {
                id: 62,
                label: 'Диета №11',
                href: '/diet-11',
            },
            {
                id: 63,
                label: 'Диета №12',
                href: '/diet-12',
            },
            {
                id: 64,
                label: 'Диета №13',
                href: '/diet-13',
            },
            {
                id: 65,
                label: 'Диета №14',
                href: '/diet-14',
            },
            {
                id: 66,
                label: 'Без глютена',
                href: '/without-gluten',
            },
            {
                id: 67,
                label: 'Без аллергенов',
                href: '/without-allergens',
            },
        ],
    },
    {
        id: 10,
        label: 'Национальные',
        icon: national,
        href: '/national-dish',
        submenu: [
            {
                id: 68,
                label: 'Американская кухня',
                href: '/american-cuisine',
            },
            {
                id: 69,
                label: 'Армянская кухня',
                href: '/armenian-cuisine',
            },
            {
                id: 70,
                label: 'Греческая кухня',
                href: '/greek-cuisine',
            },
            {
                id: 71,
                label: 'Грузинская кухня',
                href: '/georgian-cuisine',
            },
            {
                id: 72,
                label: 'Итальянская кухня',
                href: '/italian-cuisine',
            },
            {
                id: 73,
                label: 'Испанская кухня',
                href: '/spanish-cuisine',
            },
            {
                id: 74,
                label: 'Китайская кухня',
                href: '/chinese-cuisine',
            },
            {
                id: 75,
                label: 'Мексиканская кухня',
                href: '/mexican-cuisine',
            },
            {
                id: 76,
                label: 'Паназиатская кухня',
                href: '/panasian-cuisine',
            },
            {
                id: 77,
                label: 'Русская кухня',
                href: '/russian-cuisine',
            },
            {
                id: 78,
                label: 'Турецкая кухня',
                href: '/turkish-cuisine',
            },
            {
                id: 79,
                label: 'Французская кухня',
                href: '/french-cuisine',
            },
            {
                id: 80,
                label: 'Шведская кухня',
                href: '/swedish-cuisine',
            },
            {
                id: 81,
                label: 'Японская кухня',
                href: '/japanese-cuisine',
            },
            {
                id: 82,
                label: 'Другая кухня',
                href: '/other-cuisine',
            },
        ],
    },
    {
        id: 11,
        label: 'Соусы',
        icon: sous,
        href: '/sauces',
        submenu: [
            {
                id: 83,
                label: 'Мясные соусы',
                href: '/meat-sauces',
            },
            {
                id: 84,
                label: 'Сырные соусы',
                href: '/cheese-sauces',
            },
            {
                id: 85,
                label: 'Маринады',
                href: '/marinades',
            },
            {
                id: 86,
                label: 'Домашние заготовки',
                href: '/home-preparations',
            },
            {
                id: 87,
                label: 'Мясные заготовки',
                href: '/meat-preparations',
            },
            {
                id: 88,
                label: 'Рыбные заготовки',
                href: '/fish-preparations',
            },
            {
                id: 89,
                label: 'Из огурцов',
                href: '/from-cucumbers',
            },
            {
                id: 90,
                label: 'Из томатов',
                href: '/from-tomatoes',
            },
            {
                id: 91,
                label: 'Из грибов',
                href: '/from-mushrooms',
            },
            {
                id: 92,
                label: 'Овощные заготовки',
                href: '/vegetable-preparations',
            },
            {
                id: 93,
                label: 'Салаты, икра',
                href: '/salads-and-pickles',
            },
            {
                id: 94,
                label: 'Из фруктов и ягод',
                href: '/from-fruits-and-berries',
            },
        ],
    },
    {
        id: 12,
        label: 'Напитки',
        icon: drink,
        href: '/drinks',
        submenu: [
            {
                id: 95,
                label: 'Соки и фреши',
                href: '/juices-and-shakes',
            },
            {
                id: 96,
                label: 'Смузи',
                href: '/smoothies',
            },
            {
                id: 97,
                label: 'Компоты',
                href: '/compotes',
            },
            {
                id: 98,
                label: 'Кисели',
                href: '/kiselies',
            },
            {
                id: 99,
                label: 'Кофе',
                href: '/coffee',
            },
            {
                id: 100,
                label: 'Лечебный чай',
                href: '/herbal-tea',
            },
            {
                id: 101,
                label: 'Квас',
                href: '/kvass',
            },
            {
                id: 102,
                label: 'Коктейли',
                href: '/cocktails',
            },
            {
                id: 103,
                label: 'Алкогольные напитки',
                href: '/alcoholic-drinks',
            },
        ],
    },
    {
        id: 13,
        label: 'Заготовки',
        icon: zagotovki,
        href: '/preparations',
        submenu: [
            {
                id: 104,
                label: 'Мясные заготовки',
                href: '/meat-preparations',
            },
            {
                id: 105,
                label: 'Рыбные заготовки',
                href: '/fish-preparations',
            },
        ],
    },
];
