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
import { defaultIndex } from './useAccordionMenu';

interface AccordionMenuProps {
    onPageChange: (path: string) => void;
    onClose: () => void;
}

export const AccordionMenu: FC<AccordionMenuProps> = ({ onPageChange, onClose }) => {
    const handleSubItemClick = (parentHref: string, subItemHref: string) => {
        const parentName = parentHref.replace(/^\//, '');
        const subItemName = subItemHref.replace(/^\//, '');

        // первый элемент
        if (!subItemName) {
            const parentItem = menuMockData.find((item) => item.href.slice(1) === parentName);
            if (parentItem && parentItem.submenu.length > 0) {
                const firstSubItem = parentItem.submenu[0];
                const path = `/${parentName}/${firstSubItem.href.slice(1)}`;
                onPageChange(path);
                return;
            }
        }

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
                scrollbarGutter: 'stable',
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
                defaultIndex={[defaultIndex(activeParent, activeSubItem)]}
                border='none'
                allowToggle
            >
                {menuMockData.map((item) => (
                    <AccordionItem
                        key={item.id + item.label}
                        border='none'
                        data-test-id={`${item.label}`}
                    >
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
                                            onClose();
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
                                            data-test-id={`${subItem.label}-active`}
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
