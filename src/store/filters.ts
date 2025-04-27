const hasCategories = (categories: string[], selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
        return true;
    }
    return categories.some((category) => selectedCategories.includes(category));
};

const hasAuthors = (authors: string, selectedAuthors: string[]) => {
    // debugger;
    if (selectedAuthors.length === 0) {
        return true;
    }
    return selectedAuthors.includes(authors);
};

const hasMeatTypes = (meatTypes: string, selectedMeatTypes: string[]) => {
    if (selectedMeatTypes.length === 0) {
        return true;
    }
    return selectedMeatTypes.includes(meatTypes);
};

const hasSideTypes = (sideTypes: string, selectedSideTypes: string[]) => {
    if (selectedSideTypes.length === 0) {
        return true;
    }
    return selectedSideTypes.includes(sideTypes);
};

const isRecipeTitleMatch = (title: string, query: string) => {
    if (!query || query.length < 3) return true;
    return title.toLowerCase().includes(query.toLowerCase());
};

export { hasAuthors, hasCategories, hasMeatTypes, hasSideTypes, isRecipeTitleMatch };
