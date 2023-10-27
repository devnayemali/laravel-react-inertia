import React from 'react';
import Header from '../Header';
import { Head } from '@inertiajs/react';

const Layout = ({children, title}) => {
    return (
        <>
        <Head><title>{title}</title></Head>
        <Header></Header>
        {
            children 
        }
        </>
    );
};

export default Layout;