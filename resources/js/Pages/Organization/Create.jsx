import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useForm } from '@inertiajs/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        start_date: '',
        start_time : '',
        location: '',
        member: '',
        category: '',
    });



    const submit = (e) => {
        e.preventDefault();
        data.start_date = startDate;
        data.start_time = startTime;
        console.log(data.start_time);
        post(route('organizations.index'));
    };


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
                        <InputLabel htmlFor="Date" />
                        <DatePicker name="start_date" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <InputError message={errors.start_date} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="Time" />
                        <DatePicker
                            selected={startTime}
                            onChange={(date) => setStartTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={5}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                        <InputError message={errors.start_time} className="mt-2" />
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
                        <InputError message={errors.member} className="mt-2" />
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