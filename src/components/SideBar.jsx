import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BsFillBriefcaseFill, BsFillPersonFill, BsGem, BsGridFill } from 'react-icons/bs'
import Link from 'next/link'


export const SideBar = ({ children }) => {
    return (
        <>
            <div className='flex'>
                <div className='flex fixed w-20 h-screen flex-col  justify-between border-r-[1px] p-4  '>
                    <div className='flex flex-col items-center space-y-8'>
                        <Link href="/">
                            <div className='bg-purple-700 text-white p-2 rounded-xl inline-block'>
                                <BsGem size={20} />
                            </div>
                        </Link>

                        <Link href="/">
                            <div className='bg-slate-100  p-2 rounded-xl'>
                                <BsGridFill size={20} />
                            </div>
                        </Link>

                        <Link href="/customers">
                            <div className='bg-slate-100  p-2 rounded-xl'>
                                <BsFillPersonFill size={20} />
                            </div>
                        </Link>

                        <Link href="/orders">
                            <div className='bg-slate-100  p-2 rounded-xl'>
                                <BsFillBriefcaseFill size={20} />
                            </div>
                        </Link>

                        <Link href="/">
                            <div className='bg-slate-100 w-full p-2 rounded-xl'>
                                <FiSettings size={20} />
                            </div>
                        </Link>

                    </div>
                </div>
                {/* los demas componentes son hijos de la navbar */}
                <main className='ml-20 w-full'>{children}</main>
            </div>
        </>
    )
};

