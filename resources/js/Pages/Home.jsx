import React from 'react';
import Header from './Header';
import Layout from './Layout/Layout';
import { Head } from '@inertiajs/react';

const Home = () => {
    return (
        <div>
            home
        </div>
    );
};

Home.layout = page => <Layout children={page} title="Welcome to React Laravel"></Layout>
export default Home;