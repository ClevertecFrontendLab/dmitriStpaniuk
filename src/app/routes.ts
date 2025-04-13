import { createBrowserRouter } from 'react-router';

import { menuMockData } from '~/components/Dummies/AccordionMenu/constants';
import { MainLayout } from '~/components/Layouts/MainLayout';
import Main from '~/components/Pages/Main/Main';
import Succulent from '~/components/Pages/Succulent/Succulent';
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
            { path: '/succulent', Component: Succulent },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
