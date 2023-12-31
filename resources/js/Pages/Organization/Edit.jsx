import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { useForm, usePage } from '@inertiajs/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {

    const {id, name, start_date, location, member, category} = usePage().props.organization;

    const [startDate, setStartDate] = useState(new Date(start_date));
    const { data, setData, put, processing, errors, reset } = useForm({
        name: name,
        start_date: start_date,
        location: location,
        member: member,
        category : category,
    });

    const submit = (e) => {
        e.preventDefault();
        data.start_date = startDate;
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
                        <InputLabel htmlFor="Date" />
                        <DatePicker name="start_date" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <InputError message={errors.start_date} className="mt-2" />
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
                        <InputError message={errors.member} className="mt-2" />
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