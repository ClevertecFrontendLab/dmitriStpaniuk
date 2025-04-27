import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { menuMockData } from '../AccordionMenu/constants';
import { sliderMockData } from '../NewRecipe/constants';

interface BreadcrumbsProps {
    onClose: () => void;
}

export const Breadcrumbs = ({ onClose }: BreadcrumbsProps) => {
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

        if (pathSegments[0] === 'succulent') {
            items.push({
                label: 'Самое сочное',
                path: '/succulent',
            });
            return items;
        }

        if (pathSegments.length === 3) {
            const mainCategory = menuMockData.find((item) => item.href === `/${pathSegments[0]}`);
            if (mainCategory) {
                items.push({
                    label: mainCategory.label,
                    path: mainCategory.href,
                });

                const subCategory = mainCategory.submenu.find(
                    (item) => item.href === `/${pathSegments[1]}`,
                );

                if (subCategory) {
                    items.push({
                        label: subCategory.label,
                        path: `/${pathSegments[0]}/${pathSegments[1]}`,
                    });
                }

                const recipeId = pathSegments[2];
                const recipe = sliderMockData.find((item) => item.id === recipeId);

                if (recipe) {
                    items.push({
                        label: recipe.title,
                        path: `/${pathSegments[0]}/${pathSegments[1]}/${recipeId}`,
                    });
                }
            }
        } else if (pathSegments.length >= 2) {
            const mainCategory = menuMockData.find((item) => item.href === `/${pathSegments[0]}`);

            if (mainCategory) {
                items.push({
                    label: mainCategory.label,
                    path: mainCategory.href,
                });

                const subCategory = mainCategory.submenu.find(
                    (item) => item.href === `/${pathSegments[1]}`,
                );

                if (subCategory) {
                    items.push({
                        label: subCategory.label,
                        path: `/${pathSegments[0]}/${pathSegments[1]}`,
                    });
                }
            }
        } else if (pathSegments.length === 1) {
            const mainCategory = menuMockData.find((item) => item.href === `/${pathSegments[0]}`);

            if (mainCategory) {
                items.push({
                    label: mainCategory.label,
                    path: mainCategory.href,
                });
            }
        }

        return items;
    };

    const breadcrumbItems = getBreadcrumbItems();

    return (
        <Flex alignItems='center' gap='8px' flexWrap='wrap' maxW='100%' data-test-id='breadcrumbs'>
            {breadcrumbItems.map((item, index) => {
                const words = item.label.split(' ');
                const displayLabel =
                    words.length > 2 ? `${words.slice(0, 2).join(' ')}...` : item.label;

                return (
                    <Flex key={item.path} alignItems='center' flexShrink={0}>
                        {index > 0 && <ChevronRightIcon color='gray.500' mx='8px' />}
                        <Link to={item.path} onClick={onClose}>
                            <Text
                                color={index === breadcrumbItems.length - 1 ? 'black' : 'gray.500'}
                                fontSize='14px'
                                fontWeight={index === breadcrumbItems.length - 1 ? '600' : '400'}
                                _hover={{ color: 'black' }}
                                title={item.label}
                            >
                                {displayLabel}
                            </Text>
                        </Link>
                    </Flex>
                );
            })}
        </Flex>
    );
};
