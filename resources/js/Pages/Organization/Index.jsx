import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { Link, router, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Index = () => {

    const {organizations} = usePage().props;
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message, {
                position: 'top-right',
                autoClose: 3000,
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
                // Inertia.delete(`/organizations/${id}`, {
                //     preserveState: true,
                // }).then(() => {
                //     Swal.fire('Deleted!', 'Your organization has been deleted.', 'success');
                // });
                router.delete(`/organizations/${id}`);
            }
        });
    }

    return (
        <div className="py-12 max-w-xl mx-auto">
            <ToastContainer></ToastContainer>
            <PrimaryButton className="mb-4">
                <Link href={route('organizations.create')} >Add Organization</Link>
            </PrimaryButton>
            
            <table className="table-fixed border-collapse border border-slate-500 border-spacing-2 w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-600 p-4">Name</th>
                        <th className="border border-slate-600 p-4">Location</th>
                        <th className="border border-slate-600 p-4">Member</th>
                        <th className="border border-slate-600 p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {organizations.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-slate-600 p-4">{item.name}</td>
                            <td className="border border-slate-600 p-4">{item.location}</td>
                            <td className="border border-slate-600 p-4">{item.member}</td>
                            <td className="border border-slate-600 p-4">
                                <Link href={route('organizations.edit', item.id)}>Edit</Link>
                                {' | '}
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
Index.layout = page => <Layout children={page} title="Organization List"></Layout>
export default Index;