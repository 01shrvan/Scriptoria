"use client";
import LoadingBar from 'react-top-loading-bar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from './ui/button';
import { ModeToggle } from './theme-toggle';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
    const [progress, setProgress] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // State to control sheet visibility
    const pathname = usePathname();

    useEffect(() => {
        setProgress(30);
        setTimeout(() => setProgress(70), 100);
        setTimeout(() => setProgress(100), 800);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setProgress(0), 900);
    }, []);

    // Function to handle link clicks and close the sheet
    const handleLinkClick = () => {
        setIsOpen(false); // Close the sheet
    };

    return (
        <nav className='h-16 bg-background/50 sticky top-0 -b px-4 backdrop-blur-md flex items-center justify-between z-10'>
            <LoadingBar
                color='#D8BFD8'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <Link href={'/'}>
                <div className='-ml-8'>
                    <Image src='/Logo.png' alt='Scriptoria Logo' width={200} height={50} />
                </div>
            </Link>
            <ul className='hidden md:flex w-full justify-end items-center space-x-5 underline-offset-4 text-sm'>
                <li className='hover:underline'><Link href='/'>Home</Link></li>
                <li className='hover:underline'><Link href='/about'>About</Link></li>
                <li className='hover:underline'><Link href='/blog'>Blog</Link></li>
                <li className='hover:underline'><Link href='/contact'>Contact</Link></li>
                <li className='px-4 space-x-2'>
                    <Link href={"/sign-in"} className={buttonVariants({ variant: "default" })}>
                        Sign in
                    </Link>
                </li>
            </ul>
            <div className='flex items-center gap-2'>
                <ModeToggle />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger><Menu className='size-7 md:hidden' /></SheetTrigger>
                    <SheetContent className="bg-black text-white">
                        <SheetHeader>
                            <SheetTitle>Quick Navigation</SheetTitle> {/* Updated title */}
                            <SheetDescription>Choose where you'd like to go:</SheetDescription> {/* Updated description */}
                        </SheetHeader>
                        {/* Add Links Here */}
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white hover:underline" onClick={handleLinkClick}>Home</Link></li>
                            <li><Link href="/about" className="text-white hover:underline" onClick={handleLinkClick}>About</Link></li>
                            <li><Link href="/blog" className="text-white hover:underline" onClick={handleLinkClick}>Blog</Link></li>
                            <li><Link href="/contact" className="text-white hover:underline" onClick={handleLinkClick}>Contact</Link></li>
                            <li><Link href="/sign-in" className={`${buttonVariants({ variant: "default" })} block text-center`} onClick={handleLinkClick}>Sign in</Link></li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default NavBar;