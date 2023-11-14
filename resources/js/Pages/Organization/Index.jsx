import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { Link, router, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';

const Index = () => {

    const [query, setQuery] = useState('');
    const { pageOrganizations, flash } = usePage().props;
    const { data: organizations, links } = pageOrganizations;


    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message, {
                position: 'top-right'
            })
        }
    }, [flash]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this organization!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/organizations/${id}`);
            }
        });
    }

    useEffect(() => {
        const search = () => {
            router.get(route(route().current()), { search: query }, {
                replace: true,
                preserveState: true
            });
        }
        if (query != '') {
            search();
        }
    }, [query]);


    console.log(pageOrganizations);

    return (
        <div className="py-12 max-w-2xl mx-auto">
            <ToastContainer></ToastContainer>
            <div className="flex justify-between">
                <PrimaryButton className="mb-4">
                    <Link href={route('organizations.create')} >Add Organization</Link>
                </PrimaryButton>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        id="search"
                    />
                </div>
            </div>

            <table className="table-fixed border-collapse border border-slate-500 border-spacing-2 w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-600 p-4">Name</th>
                        <th className="border border-slate-600 p-4">Location</th>
                        <th className="border border-slate-600 p-4">Date</th>
                        <th className="border border-slate-600 p-4">Time</th>
                        <th className="border border-slate-600 p-4">Member</th>
                        <th className="border border-slate-600 p-4">Department</th>
                        <th className="border border-slate-600 p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {organizations.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-slate-600 p-4">{item.name}</td>
                            <td className="border border-slate-600 p-4">{item.location}</td>
                            <td className="border border-slate-600 p-4">{item?.start_date && moment(item?.start_date).format("MMMM D, YYYY")}</td>
                            <td className="border border-slate-600 p-4">{item.member}</td>
                            <td className="border border-slate-600 p-4">{item.category}</td>
                            <td className="border border-slate-600 p-4">
                                <Link href={route('organizations.edit', item.id)}>Edit</Link>
                                {' | '}
                                <button onClick={() => handleDelete(item.links.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <Pagination links={links} />
            </div>

        </div>
    );
};
Index.layout = page => <Layout children={page} title="Organization List"></Layout>
export default Index;