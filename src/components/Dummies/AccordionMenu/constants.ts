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
        href: '/salaty',
        submenu: [
            {
                id: 45366,
                label: 'Мясные салаты',
                href: '/myasnye-salaty',
            },
            {
                id: 272465745768,
                label: 'Рыбные салаты',
                href: '/rybnye-salaty',
            },
            {
                id: 34562432,
                label: 'Овощные салаты',
                href: '/ovoshnye-salaty',
            },
            {
                id: 24557780,
                label: 'Теплые салаты',
                href: '/teplye-salaty',
            },
        ],
    },
    {
        id: 2,
        label: 'Закуски',
        icon: zakuski,
        href: '/zakusky',
        submenu: [
            {
                id: 106,
                label: 'Мясные закуски',
                href: '/myasnye-zakusky',
            },
            {
                id: 107,
                label: 'Рыбные закуски',
                href: '/rybnye-zakusky',
            },
            {
                id: 108,
                label: 'Овощные закуски',
                href: '/ovoshnye-zakusky',
            },
            {
                id: 109,
                label: 'Теплые закуски',
                href: '/teplye-zakusky',
            },
            {
                id: 110,
                label: 'Бутерброды',
                href: '/butterbrod',
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
        href: '/pervyye-blyuda',
        submenu: [
            {
                id: 112,
                label: 'Мясные супы',
                href: '/myasnye-supy',
            },
            {
                id: 113,
                label: 'Овощные супы',
                href: '/ovoshnye-supy',
            },
            {
                id: 114,
                label: 'Бульоны',
                href: '/buliony',
            },
            {
                id: 115,
                label: 'Холодные супы',
                href: '/holodnye-supy',
            },
            {
                id: 116,
                label: 'Диетические супы',
                href: '/dieticheskie-supy',
            },
        ],
    },
    {
        id: 4,
        label: 'Вторые блюда',
        icon: second,
        href: '/vtorye-blyuda',
        submenu: [
            {
                id: 117,
                label: 'Мясные',
                href: '/myasnye',
            },
            {
                id: 118,
                label: 'Рыбные',
                href: '/rybnye',
            },
            {
                id: 119,
                label: 'Овощные',
                href: '/ovoshnye',
            },
            {
                id: 120,
                label: 'Из птицы',
                href: '/iz-ptitsy',
            },
            {
                id: 121,
                label: 'Из грибов',
                href: '/iz-gribov',
            },
            {
                id: 122,
                label: 'Из субпродуктов',
                href: '/iz-subproduktov',
            },
            {
                id: 123,
                label: 'На пару',
                href: '/na-paru',
            },
            {
                id: 124,
                label: 'Пельмени, вареники',
                href: '/pelmeni-vareniki',
            },
            {
                id: 125,
                label: 'Мучные гарниры',
                href: '/muchnye-garniry',
            },
            {
                id: 126,
                label: 'Овощные гарниры',
                href: '/ovoshnye-garniry',
            },
            {
                id: 127,
                label: 'Пицца',
                href: '/pizza',
            },
            {
                id: 128,
                label: 'Суши',
                href: '/suushi',
            },
        ],
    },
    {
        id: 5,
        label: 'Десерты, выпечка',
        icon: dessert,
        href: '/deserty-i-vypechka',
        submenu: [
            {
                id: 129,
                label: 'Блины и оладьи',
                href: '/bliny-i-oladii',
            },
            {
                id: 18,
                label: 'Пироги и пончики',
                href: '/pirogi-i-ponchiki',
            },
            {
                id: 19,
                label: 'Торты',
                href: '/torty',
            },
            {
                id: 20,
                label: 'Рулеты',
                href: '/ruleti',
            },
            {
                id: 21,
                label: 'Кексы и маффины',
                href: '/keksy-i-maffiny',
            },
            {
                id: 22,
                label: 'Сырники и ватрушки',
                href: '/syrniki-i-vatrushki',
            },
            {
                id: 23,
                label: 'Из слоеного теста',
                href: '/iz-sleenogo-testa',
            },
            {
                id: 24,
                label: 'Из заварного теста',
                href: '/iz-zavarannogo-testa',
            },
            {
                id: 25,
                label: 'Из дрожжевого теста',
                href: '/iz-dzhizhevego-testa',
            },
            {
                id: 26,
                label: 'Булочки и сдоба',
                href: '/bulochki-i-sdooba',
            },
            {
                id: 27,
                label: 'Хлеб',
                href: '/hleb',
            },
            {
                id: 28,
                label: 'Тесто на пиццу',
                href: '/testo-na-pizza',
            },
            {
                id: 29,
                label: 'Кремы',
                href: '/kremy',
            },
        ],
    },
    {
        id: 6,
        label: 'Блюда на гриле',
        icon: grill,
        href: '/blyuda-na-grile',
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
                href: '/ptitsa',
            },
            {
                id: 33,
                label: 'Рыба',
                href: '/ryba',
            },
            {
                id: 34,
                label: 'Грибы',
                href: '/griby',
            },
            {
                id: 35,
                label: 'Овощи',
                href: '/ovoshy',
            },
        ],
    },
    {
        id: 7,
        label: 'Веганская кухня',
        icon: vegan,
        href: '/veganskaya-kuhnya',
        attributes: 'vegan-cuisine',
        submenu: [
            {
                id: 36,
                label: 'Закуски',
                href: '/zakusky',
            },
            {
                id: 37,
                label: 'Первые блюда',
                href: '/pervyye-blyuda',
            },
            {
                id: 38,
                label: 'Вторые блюда',
                href: '/vtorye-blyuda',
            },
            {
                id: 39,
                label: 'Гарниры',
                href: '/garniry',
            },
            {
                id: 40,
                label: 'Десерты',
                href: '/deserty',
            },
            {
                id: 41,
                label: 'Выпечка',
                href: '/vypechka',
            },
            {
                id: 42,
                label: 'Сыроедческие блюда',
                href: '/syroedcheskie-blyuda',
            },
            {
                id: 43,
                label: 'Напитки',
                href: '/napitki',
            },
        ],
    },
    {
        id: 8,
        label: 'Детские блюда',
        icon: children,
        href: '/detskie-blyuda',
        submenu: [
            {
                id: 44,
                label: 'Первые блюда',
                href: '/pervyye-blyuda',
            },
            {
                id: 45,
                label: 'Вторые блюда',
                href: '/vtorye-blyuda',
            },
            {
                id: 46,
                label: 'Гарниры',
                href: '/garniry',
            },
            {
                id: 47,
                label: 'Выпечка',
                href: '/vypechka',
            },
            {
                id: 48,
                label: 'Без глютена',
                href: '/bez-glutena',
            },
            {
                id: 49,
                label: 'Без сахара',
                href: '/bez-sahara',
            },
            {
                id: 50,
                label: 'Без аллергенов',
                href: '/bez-allergenov',
            },
            {
                id: 51,
                label: 'Блюда для прикорма',
                href: '/blyuda-dlya-prikorma',
            },
        ],
    },
    {
        id: 9,
        label: 'Лечебное питание',
        icon: hospital,
        href: '/lechebnoe-pitanie',
        submenu: [
            {
                id: 52,
                label: 'Детская диета',
                href: '/detskaya-dieta',
            },
            {
                id: 53,
                label: 'Диета №1',
                href: '/dieta-1',
            },
            {
                id: 54,
                label: 'Диета №2',
                href: '/dieta-2',
            },
            {
                id: 55,
                label: 'Диета №3',
                href: '/dieta-3',
            },
            {
                id: 56,
                label: 'Диета №5',
                href: '/dieta-5',
            },
            {
                id: 57,
                label: 'Диета №6',
                href: '/dieta-6',
            },
            {
                id: 58,
                label: 'Диета №7',
                href: '/dieta-7',
            },
            {
                id: 59,
                label: 'Диета №8',
                href: '/dieta-8',
            },
            {
                id: 60,
                label: 'Диета №9',
                href: '/dieta-9',
            },
            {
                id: 61,
                label: 'Диета №10',
                href: '/dieta-10',
            },
            {
                id: 62,
                label: 'Диета №11',
                href: '/dieta-11',
            },
            {
                id: 63,
                label: 'Диета №12',
                href: '/dieta-12',
            },
            {
                id: 64,
                label: 'Диета №13',
                href: '/dieta-13',
            },
            {
                id: 65,
                label: 'Диета №14',
                href: '/dieta-14',
            },
            {
                id: 66,
                label: 'Без глютена',
                href: '/bez-glutena',
            },
            {
                id: 67,
                label: 'Без аллергенов',
                href: '/bez-allergenov',
            },
        ],
    },
    {
        id: 10,
        label: 'Национальные',
        icon: national,
        href: '/nationalnye-blyuda',
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
        href: '/sousy',
        submenu: [
            {
                id: 83,
                label: 'Мясные соусы',
                href: '/myasnye-sousy',
            },
            {
                id: 84,
                label: 'Сырные соусы',
                href: '/syrnie-sousy',
            },
            {
                id: 85,
                label: 'Маринады',
                href: '/marinady',
            },
            {
                id: 86,
                label: 'Домашние заготовки',
                href: '/domashnie-zagotovki',
            },
            {
                id: 87,
                label: 'Мясные заготовки',
                href: '/myasnye-zagotovki',
            },
            {
                id: 88,
                label: 'Рыбные заготовки',
                href: '/rybnye-zagotovki',
            },
            {
                id: 89,
                label: 'Из огурцов',
                href: '/iz-ogurcov',
            },
            {
                id: 90,
                label: 'Из томатов',
                href: '/iz-tomatov',
            },
            {
                id: 91,
                label: 'Из грибов',
                href: '/iz-gribov',
            },
            {
                id: 92,
                label: 'Овощные заготовки',
                href: '/ovoshnye-zagotovki',
            },
            {
                id: 93,
                label: 'Салаты, икра',
                href: '/salaty-i-ikra',
            },
            {
                id: 94,
                label: 'Из фруктов и ягод',
                href: '/iz-fruktov-i-yagod',
            },
        ],
    },
    {
        id: 12,
        label: 'Напитки',
        icon: drink,
        href: '/napitki',
        submenu: [
            {
                id: 95,
                label: 'Соки и фреши',
                href: '/soki-i-freshi',
            },
            {
                id: 96,
                label: 'Смузи',
                href: '/smuzi',
            },
            {
                id: 97,
                label: 'Компоты',
                href: '/kompoty',
            },
            {
                id: 98,
                label: 'Кисели',
                href: '/kiselie',
            },
            {
                id: 99,
                label: 'Кофе',
                href: '/kofe',
            },
            {
                id: 100,
                label: 'Лечебный чай',
                href: '/lechebnyi-chai',
            },
            {
                id: 101,
                label: 'Квас',
                href: '/kvass',
            },
            {
                id: 102,
                label: 'Коктейли',
                href: '/kokteili',
            },
            {
                id: 103,
                label: 'Алкогольные напитки',
                href: '/alkogolnye-napitki',
            },
        ],
    },
    {
        id: 13,
        label: 'Заготовки',
        icon: zagotovki,
        href: '/zagotovki',
        submenu: [
            {
                id: 104,
                label: 'Мясные заготовки',
                href: '/myasnye-zagotovki',
            },
            {
                id: 105,
                label: 'Рыбные заготовки',
                href: '/rybnye-zagotovki',
            },
        ],
    },
];
