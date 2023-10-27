import React from 'react';
import Layout from './Layout/Layout';

const Service = () => {
    return (
        <div>
            services
        </div>
    );
};
Service.layout = page => <Layout children={page} title="About"></Layout>
export default Service;