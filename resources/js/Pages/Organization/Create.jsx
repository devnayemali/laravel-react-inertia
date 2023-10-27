import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React from 'react';
import Layout from '../Layout/Layout';
import { Head, Link, router, useForm } from '@inertiajs/react';

const Create = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        location: '',
        member: '',
        category: '',
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('organizations.index'));
    };

    console.log(errors);

    return (
        <div className="py-12">
            <div className="max-w-lg mx-auto bg-gray-100 p-10 rounded">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="category" value="Category" />
                        <select
                            id="category"
                            name="category"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                        >
                            <option value="">Select a category</option>
                            <option value="front-end">Front End Developer</option>
                            <option value="back-end">Back End Developer</option>
                            <option value="design">Designer</option>
                        </select>
                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="location" value="Location" />
                        <TextInput
                            id="location"
                            name="location"
                            value={data.location}
                            className="mt-1 block w-full"
                            autoComplete="location"
                            isFocused={true}
                            onChange={(e) => setData('location', e.target.value)}
                        />
                        <InputError message={errors.location} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="member" value="Member" />
                        <TextInput
                            id="member"
                            name="member"
                            value={data.member}
                            className="mt-1 block w-full"
                            autoComplete="location"
                            isFocused={true}
                            onChange={(e) => setData('member', e.target.value)}
                        />
                        <InputError message={errors.location} className="mt-2" />
                    </div>

                    <div className="flex items-center mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};
Create.layout = page => <Layout children={page} title="Register"></Layout>
export default Create;