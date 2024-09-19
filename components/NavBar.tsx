"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from './ui/button';
import { ModeToggle } from './theme-toggle';

const NavBar = () => {
    return (
        <nav className='h-16 bg-background/50 sticky top-0 border-b px-4 backdrop-blur-md flex items-center'>
            <Link href={'/'}>
                <div className='-ml-6'>
                    <Image src='/Logo.png' alt='Scriptoria Logo' width={200} height={50} />
                </div>
            </Link>
            <ul className='flex w-full justify-end items-center space-x-6 underline-offset-4 text-sm'>
                <li className='hover:underline'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='hover:underline'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='px-4 space-x-2'>
                    <Link href={"/login"} className={buttonVariants({ variant: "default" })}>
                        Sign in
                    </Link>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;