import { Link, router } from '@inertiajs/react';
import React from 'react';
const Header = () => {
    return (
        <div className="bg-black text-white text-center py-4">
            <nav>
                <ul className="flex gap-5 justify-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href={route('organizations.index')}>Organization</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;