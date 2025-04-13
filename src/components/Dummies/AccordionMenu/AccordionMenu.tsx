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
import { FC, useState } from 'react';

import { menuMockData } from './constants';

interface AccordionMenuProps {
    onPageChange: (path: string) => void;
}

export const AccordionMenu: FC<AccordionMenuProps> = ({ onPageChange }) => {
    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const handleSubItemClick = (parentHref: string, subItemHref: string) => {
        const parentName = parentHref.replace(/^\//, '');
        const subItemName = subItemHref.replace(/^\//, '');

        const path = `/${parentName}/${subItemName}`;
        onPageChange(path);
    };

    return (
        <Flex
            flexDirection='column'
            p='10px 16px 10px 10px'
            fontFamily='heading'
            fontWeight={500}
            fontSize='16px'
            color='#000'
            // borderRadius='12px'
            // shadow='0px 1px 0px 0px rgba(0, 0, 0, 0.1)'
            maxH='644px'
            overflowY='auto'
            // top='80px'
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                    mr: '10px',
                    mb: '10px',
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
            <Accordion defaultIndex={[0]} border='none' allowToggle>
                {menuMockData.map((item) => (
                    <AccordionItem key={item.id + item.label} border='none'>
                        <h2>
                            <AccordionButton
                                onClick={() => {
                                    setActiveItemId(0);
                                    handleSubItemClick(item.href, '');
                                }}
                                p='12px 8px'
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
                                            setActiveItemId(subItem.id);
                                            // onPageChange(subItem.href);
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
                                            display={activeItemId === subItem.id ? 'none' : 'block'}
                                        />
                                        <Box
                                            className='decorator-active'
                                            w='8px'
                                            h='28px'
                                            bg='customLime.300'
                                            position='absolute'
                                            left='2'
                                            display={activeItemId === subItem.id ? 'block' : 'none'}
                                        />
                                        <Link
                                            fontWeight={activeItemId === subItem.id ? '700' : '500'}
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
