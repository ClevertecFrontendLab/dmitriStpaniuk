import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import { matchPath, useLocation } from 'react-router';

import { menuMockData } from './constants';

interface AccordionMenuProps {
    onPageChange: (path: string) => void;
}

export const AccordionMenu: FC<AccordionMenuProps> = ({ onPageChange }) => {
    const handleSubItemClick = (parentHref: string, subItemHref: string) => {
        const parentName = parentHref.replace(/^\//, '');
        const subItemName = subItemHref.replace(/^\//, '');

        const path = `/${parentName}/${subItemName}`;
        onPageChange(path);
    };
    const location = useLocation();
    const activeParent = matchPath(
        {
            path: '/:parent',
            end: true,
        },
        location.pathname,
    );
    const activeSubItem = matchPath(
        {
            path: '/:parent/:subItem',
            end: true,
        },
        location.pathname,
    );

    console.log('activeParent', activeParent);
    console.log('activeSubItem', activeSubItem);

    // Определяем индекс активного элемента меню
    const defaultIndex = activeParent?.params?.parent
        ? menuMockData.findIndex((item) => item.href.slice(1) === activeParent.params.parent)
        : activeSubItem?.params?.subItem
          ? menuMockData.findIndex((item) =>
                item.submenu.some((sub) => sub.href.slice(1) === activeSubItem.params.subItem),
            )
          : 0;

    console.log('defaultIndex', defaultIndex);

    return (
        <Flex
            flexDirection='column'
            p={['0', '0', '0', '10px 16px 10px 10px', '10px 16px 10px 10px']}
            fontFamily='heading'
            fontWeight={500}
            fontSize='16px'
            color='#000'
            maxH={['640px', '640px', '630px', '620px', '620px']}
            overflowY='auto'
            sx={{
                'scrollbar-gutter': 'stable',
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'blackAlpha.50',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'blackAlpha.300',
                    borderRadius: '8px',
                },
            }}
        >
            <Accordion
                defaultIndex={[defaultIndex === -1 ? 0 : defaultIndex]}
                border='none'
                allowToggle
            >
                {menuMockData.map((item) => (
                    <AccordionItem key={item.id + item.label} border='none'>
                        <h2>
                            <AccordionButton
                                onClick={() => {
                                    handleSubItemClick(item.href, '');
                                }}
                                p='10px 8px'
                                border='none'
                                _hover={{ bg: 'customLime.50' }}
                                _expanded={{ bg: 'customLime.100', fontWeight: '700' }}
                                gap='12px'
                                data-test-id={item.attributes}
                            >
                                <Box>
                                    <Image src={item.icon} alt={item.label} />
                                </Box>
                                <Box
                                    as='span'
                                    flex='1'
                                    textAlign='left'
                                    letterSpacing='0.1px'
                                    textOverflow='ellipsis'
                                    overflow='hidden'
                                    whiteSpace='nowrap'
                                >
                                    {item.label}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel border='none' pb='4px'>
                            <Flex flexDirection='column' alignItems='flex-start' gap='12px'>
                                {item.submenu.map((subItem) => (
                                    <Flex
                                        key={subItem.id + subItem.label}
                                        position='relative'
                                        w='100%'
                                        alignItems='center'
                                        role='group'
                                        cursor='pointer'
                                        textOverflow='ellipsis'
                                        overflow='hidden'
                                        whiteSpace='nowrap'
                                        onClick={() => {
                                            handleSubItemClick(item.href, subItem.href);
                                        }}
                                        bg='transparent'
                                        _hover={{
                                            bg: 'customLime.50',
                                            '& .decorator': {
                                                display: 'none',
                                            },
                                        }}
                                    >
                                        <Box
                                            className='decorator'
                                            w='1px'
                                            h='24px'
                                            bg='customLime.300'
                                            position='absolute'
                                            left='3'
                                            display={
                                                subItem.href.slice(1) ===
                                                activeSubItem?.params.subItem
                                                    ? 'none'
                                                    : 'block'
                                            }
                                        />
                                        <Box
                                            className='decorator-active'
                                            w='8px'
                                            h='28px'
                                            bg='customLime.300'
                                            position='absolute'
                                            left='2'
                                            display={
                                                subItem.href.slice(1) ===
                                                activeSubItem?.params.subItem
                                                    ? 'block'
                                                    : 'none'
                                            }
                                        />
                                        <Link
                                            fontWeight={
                                                subItem.href.slice(1) ===
                                                activeSubItem?.params.subItem
                                                    ? '700'
                                                    : '500'
                                            }
                                            fontSize='16px'
                                            pl='35px'
                                            w='100%'
                                            textAlign='left'
                                            _hover={{ textDecoration: 'none' }}
                                        >
                                            {subItem.label}
                                        </Link>
                                    </Flex>
                                ))}
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Flex>
    );
};
