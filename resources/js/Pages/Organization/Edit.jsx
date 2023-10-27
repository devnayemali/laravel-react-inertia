import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React from 'react';
import Layout from '../Layout/Layout';
import { useForm, usePage } from '@inertiajs/react';

const Edit = () => {

    const {id, name, location, member} = usePage().props.organization;
    const { data, setData, put, processing, errors, reset } = useForm({
        name: name,
        location: location,
        member: member,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('organizations.update', id), data);
    };

    return (
        <div className="py-12">
            <div className="max-w-lg mx-auto bg-gray-100 p-10 rounded">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Organization Name" />
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
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};
Edit.layout = page => <Layout children={page} title="Edit"></Layout>
export default Edit;