import { createBrowserRouter } from 'react-router';

import { menuMockData } from '~/components/Dummies/AccordionMenu/constants';
import RecipePage from '~/components/Dummies/RecipePage/RecipePage';
import { MainLayout } from '~/components/Layouts/MainLayout';
import Main from '~/components/Pages/Main/Main';
import Succulent from '~/components/Pages/Succulent/Succulent';
import Vegan from '~/components/Pages/Vegan/Vegan';

const mainCategoryRoutes = menuMockData.map((menuItem) => ({
    path: menuItem.href,
    Component: Vegan,
}));

const subCategoryRoutes = menuMockData.flatMap((menuItem) =>
    menuItem.submenu.map((subItem) => {
        const categoryPath = menuItem.href.replace(/^\//, '');
        const subCategoryPath = subItem.href.replace(/^\//, '');

        return {
            path: `/${categoryPath}/${subCategoryPath}`,
            Component: Vegan,
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
