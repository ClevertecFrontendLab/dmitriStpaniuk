import { createBrowserRouter } from 'react-router';

import { menuMockData } from '~/components/Dummies/AccordionMenu/constants';
import { sliderMockData } from '~/components/Dummies/NewRecipe/constants';
import RecipePage from '~/components/Dummies/RecipePage/RecipePage';
import { MainLayout } from '~/components/Layouts/MainLayout';
import CategoryPage from '~/components/Pages/Category/Category';
import Main from '~/components/Pages/Main/Main';
import Succulent from '~/components/Pages/Succulent/Succulent';

// для главных категорий в крошках
const mainCategoryRoutes = menuMockData.map((menuItem) => {
    const categoryPath = menuItem.href.replace(/^\//, '');
    const categoryData = sliderMockData.filter((item) => item.category.includes(categoryPath));

    return {
        path: menuItem.href,
        Component: () => (
            <CategoryPage
                headerText={menuItem.label}
                tabs={menuItem.submenu}
                parentHref={menuItem.href}
                categoryData={categoryData}
            />
        ),
    };
});

const subCategoryRoutes = menuMockData.flatMap((menuItem) =>
    menuItem.submenu.map((subItem) => {
        const categoryPath = menuItem.href.replace(/^\//, '');
        const subCategoryPath = subItem.href.replace(/^\//, '');
        const categoryData = sliderMockData.filter(
            (item) =>
                item.category.includes(categoryPath) && item.subcategory.includes(subCategoryPath),
        );

        return {
            path: `/${categoryPath}/${subCategoryPath}`,
            Component: () => (
                <CategoryPage
                    headerText={subItem.label}
                    tabs={menuItem.submenu}
                    parentHref={menuItem.href}
                    categoryData={categoryData}
                />
            ),
        };
    }),
);

const recipeDetailRoutes = [
    {
        path: '/:category/:subcategory/:id',
        Component: RecipePage,
    },
];

const routes = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            { index: true, Component: Main },
            ...mainCategoryRoutes,
            ...subCategoryRoutes,
            ...recipeDetailRoutes,
            { path: '/succulent', Component: Succulent },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
