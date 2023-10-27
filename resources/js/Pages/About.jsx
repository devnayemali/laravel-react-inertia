import React from 'react';
import Layout from './Layout/Layout';
const About = () => {
    return (
        <div>
            About 
        </div>
    );
};
About.layout = page => <Layout children={page} title="About"></Layout>
export default About;