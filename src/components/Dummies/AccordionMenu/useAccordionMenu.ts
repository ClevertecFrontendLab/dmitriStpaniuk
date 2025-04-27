import { PathMatch } from 'react-router';

import { menuMockData } from './constants';

export const defaultIndex = (
    activeParent: PathMatch<'parent'> | null,
    activeSubItem: PathMatch<'subItem'> | null,
) => {
    const index = activeParent?.params?.parent
        ? menuMockData.findIndex((item) => item.href.slice(1) === activeParent.params.parent)
        : activeSubItem?.params?.subItem
          ? menuMockData.findIndex((item) =>
                item.submenu.some((sub) => sub.href.slice(1) === activeSubItem.params.subItem),
            )
          : 0;
    return index === -1 ? 0 : index;
};
