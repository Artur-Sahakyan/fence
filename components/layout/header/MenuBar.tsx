'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import IconBar from "@/components/icons/IconBar";
import {usePathname} from "next/navigation";

type Props = {
    headerRoutes: {title: string, href: string}[]
}

const MenuBar = ({headerRoutes}: Props) => {
    const [openBar, setOpenBar] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpenBar(false);
    }, [pathname]);

    const transClass = openBar ? "flex" : "hidden";

    return (
        <>
            <div className='relative'>
                <IconBar onClick={() => setOpenBar(true)}/>
                <div
                    className={`absolute top-10 right-0 z-30 w-[250px] min-h-[200px] shadow-2xl flex flex-col p-4 bg-white rounded-lg ${transClass}`}>
                    <div className='flex flex-col items-center gap-4'>
                        {headerRoutes.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setOpenBar(false)}
                                className={`${pathname === link.href ? 'text-xl text-siteBlue pointer-events-none font-bold underline' : ''} font-semibold `}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {
                openBar
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={() => setOpenBar(!openBar)}
                    ></div>
                    :
                    <></>
            }
        </>

    );
};

export default MenuBar;