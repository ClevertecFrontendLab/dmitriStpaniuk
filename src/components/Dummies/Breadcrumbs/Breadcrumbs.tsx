import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { menuMockData } from '../AccordionMenu/constants';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const getBreadcrumbItems = () => {
        const items = [
            {
                label: 'Главная',
                path: '/',
            },
        ];

        if (pathSegments.length === 0) {
            return items;
        }

        let currentPath = '';
        pathSegments.forEach((segment) => {
            currentPath += `/${segment}`;

            const menuItem = menuMockData.find((item) => item.href === currentPath);
            if (menuItem) {
                items.push({
                    label: menuItem.label,
                    path: menuItem.href,
                });
                return;
            }

            menuMockData.forEach((menu) => {
                const subItem = menu.submenu.find((item) => item.href === currentPath);
                if (subItem) {
                    items.push(
                        {
                            label: menu.label,
                            path: menu.href,
                        },
                        {
                            label: subItem.label,
                            path: subItem.href,
                        },
                    );
                }
            });
        });

        return items;
    };

    const breadcrumbItems = getBreadcrumbItems();

    return (
        <Flex alignItems='center' gap='8px'>
            {breadcrumbItems.map((item, index) => (
                <Flex key={item.path} alignItems='center'>
                    {index > 0 && <ChevronRightIcon color='gray.500' mx='8px' />}
                    <Link to={item.path}>
                        <Text
                            color={index === breadcrumbItems.length - 1 ? 'black' : 'gray.500'}
                            fontSize='14px'
                            fontWeight={index === breadcrumbItems.length - 1 ? '600' : '400'}
                            _hover={{ color: 'black' }}
                        >
                            {item.label}
                        </Text>
                    </Link>
                </Flex>
            ))}
        </Flex>
    );
};
