import React from 'react';

export const highlightMatch = (title: string, query: string) => {
    if (!query || query.length < 3) return title;

    const escaped = query.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');

    let lastIndex = 0;
    const result: React.ReactNode[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(title)) !== null) {
        if (match.index > lastIndex) {
            result.push(title.slice(lastIndex, match.index));
        }
        result.push(
            <span
                key={match.index}
                style={{
                    backgroundColor: '#b1ff2e',
                    color: '#134b00',
                    borderRadius: '2px',
                    padding: '0 2px',
                }}
            >
                {match[0]}
            </span>,
        );
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < title.length) {
        result.push(title.slice(lastIndex));
    }
    return result;
};
