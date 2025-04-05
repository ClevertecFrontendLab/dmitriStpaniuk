import { createBrowserRouter } from 'react-router';

import { menuMockData } from '~/components/Dummies/AccordionMenu/constants';
import { MainLayout } from '~/components/Layouts/MainLayout';
import Main from '~/components/Pages/Main/Main';
import Vegan from '~/components/Pages/Vegan/Vegan';

const routes = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            { index: true, Component: Main },
            ...menuMockData.flatMap((menuItem) =>
                menuItem.submenu.map((subItem) => ({
                    path: subItem.href,
                    Component: Vegan,
                })),
            ),
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
