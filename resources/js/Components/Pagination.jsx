// Pagination.js

import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const PageLink = ({ active, label, url }) => {
    const className = classNames(
        'mr-1 mb-1 px-4 py-3 border border-solid border-gray-300 rounded text-sm hover:bg-white focus:outline-none focus:border-indigo-700 focus:text-indigo-700',
        { 'bg-white': active }
    );

    return (
        <InertiaLink className={className} href={url}>
            <span dangerouslySetInnerHTML={{ __html: label }}></span>
        </InertiaLink>
    );
};

const PageInactive = ({ label }) => {
    const className = 'mr-1 mb-1 px-4 py-3 text-sm border rounded border-solid border-gray-300 text-gray';
    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: label }} />
    );
};

const Pagination = ({ links = [] }) => {
    // If there's only 1 page (previous, 1, next), don't render pagination
    // if (links.length === 3) return null;

    return (
        <div className="flex flex-wrap mt-6 -mb-1">
            {links.map(({ active, label, url }) => (
                url === null
                    ? <PageInactive key={label} label={label} />
                    : <PageLink key={label} label={label} active={active} url={url} />
            ))}
        </div>
    );
};

export default Pagination;
