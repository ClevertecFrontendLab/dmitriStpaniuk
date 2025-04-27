interface Author {
    id: string;
    name: string;
    checked: boolean;
}

interface MeatType {
    id: string;
    label: string;
    checked: boolean;
}

interface SideType {
    id: string;
    label: string;
    checked: boolean;
    dataTestId?: string;
}

interface Category {
    id: string;
    label: string;
    checked: boolean;
    dataTestId?: string;
}

export const authors: Author[] = [
    { id: '1', name: 'Елена Мин', checked: false },
    { id: '2', name: 'Мирием Чоншвили', checked: false },
    { id: '3', name: 'Елена Прекрасная', checked: false },
    { id: '4', name: 'Alex Cook', checked: false },
    { id: '5', name: 'Екатерина Константинопольская', checked: false },
    { id: '6', name: 'Инна Высоцкая', checked: false },
    { id: '7', name: 'Сергей Разумов', checked: false },
    { id: '8', name: 'Анна Рогачева', checked: false },
    { id: '9', name: 'Иван Орлов', checked: false },
    { id: '10', name: 'Повар Ши', checked: false },
    { id: '11', name: 'Только новые авторы', checked: false },
];

export const meatTypes: MeatType[] = [
    { id: 'chicken', label: 'Курица', checked: false },
    { id: 'pork', label: 'Свинина', checked: false },
    { id: 'beef', label: 'Говядина', checked: false },
    { id: 'turkey', label: 'Индейка', checked: false },
    { id: 'duck', label: 'Утка', checked: false },
];

export const sideTypes: SideType[] = [
    { id: 'potato', label: 'Картошка', checked: false, dataTestId: 'checkbox-картошка' },
    { id: 'buckwheat', label: 'Гречка', checked: false },
    { id: 'pasta', label: 'Паста', checked: false },
    { id: 'spaghetti', label: 'Спагетти', checked: false },
    { id: 'rice', label: 'Рис', checked: false },
    { id: 'cabbage', label: 'Капуста', checked: false },
    { id: 'beans', label: 'Фасоль', checked: false },
    { id: 'other', label: 'Другие овощи', checked: false },
];

export const categories: Category[] = [
    { id: 'first-dish', label: 'Первые блюда', checked: false },
    { id: 'second-dish', label: 'Вторые блюда', checked: false },
    {
        id: 'vegan',
        label: 'Веганская кухня',
        checked: false,
        dataTestId: 'checkbox-веганская кухня',
    },
    { id: 'snacks', label: 'Закуски', checked: false },
    { id: 'children-dishes', label: 'Детские блюда', checked: false },
    { id: 'desserts-and-pastry', label: 'Десерты, выпечка', checked: false },
    { id: 'dietary-food', label: 'Лечебное питание', checked: false },
    { id: 'sauces', label: 'Соусы', checked: false },
    { id: 'drinks', label: 'Напитки', checked: false },
    { id: 'preparations', label: 'Заготовки', checked: false },
];
