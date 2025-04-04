import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
export const Breadcrumbs = () => (
    <Breadcrumb fontFamily='heading' fontSize='16px' fontWeight='400' color='#000'>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Главная</BreadcrumbLink>
        </BreadcrumbItem>

        {/* <BreadcrumbItem>
            <BreadcrumbLink href='#'>Веганская кухня</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Вторые блюда</BreadcrumbLink>
        </BreadcrumbItem> */}
    </Breadcrumb>
);
