import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useForm } from '@inertiajs/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from '@/Components/Checkbox';

const Create = () => {

    const [optionSubject, setOptionSubject] = useState({});

    const { data, setData, post, processing, errors } = useForm({
        present_address: '',
        permanent_address: '',
        optional_subjects: []
    });

    const handleOptionSubject = (subject, isChecked) => {
        setOptionSubject(prevState => ({
            ...prevState,
            [subject]: isChecked
        }));

        setSubjectInData(subject, isChecked);
    };

    const setSubjectInData = (subject, isChecked) => {
        setOptionSubject(prevState => {
            const updatedSubjects = {
                ...prevState,
                [subject]: isChecked
            };

            const subjectsArray = Object.entries(updatedSubjects).map(([subject, is_option]) => ({ subject, is_option }));
            setData('optional_subjects', subjectsArray);
            
            return updatedSubjects;
        });
    };

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setData('permanent_address', data.present_address);
        } else {
            setData('permanent_address', '');
        }
    }

    const submit = (e) => {
        e.preventDefault();
        // post(route('student.store'));
    };

    console.log(data);

    return (
        <div className="py-12">
            <div className="max-w-2xl mx-auto bg-gray-100 p-10 rounded">
                <form onSubmit={submit}>
                    <div className="flex gap-6">
                        <div>
                            <InputLabel htmlFor="biology" value="Biology" />
                            <Checkbox
                                id="biology"
                                name="biology"
                                onChange={(e) => handleOptionSubject('biology', e.target.checked)}
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="math" value="math" />
                            <Checkbox
                                id="math"
                                name="math"
                                onChange={(e) => handleOptionSubject('math', e.target.checked)}
                            />
                        </div>
                    </div>
                    <div>
                        <InputLabel htmlFor="present_address" value="Present address" />
                        <TextInput
                            id="present_address"
                            name="present_address"
                            value={data.present_address}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('present_address', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="is_present_permanent_same" value="Is present permanent same" />
                        <Checkbox
                            id="is_present_permanent_same"
                            name="is_present_permanent_same"
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="permanent_address" value="Permanent address" />
                        <TextInput
                            id="permanent_address"
                            name="permanent_address"
                            value={data.permanent_address}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('permanent_address', e.target.value)}
                        />
                    </div>

                    <div className="flex items-center mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Add student
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};


Create.layout = page => <Layout children={page} title="Student"></Layout>
export default Create;