import React from 'react';
import Layout from './Layout/Layout';
const Contact = () => {
    return (
        <div>
            Contact
        </div>
    );
};
Contact.layout = page => <Layout children={page} title="About"></Layout>
export default Contact;