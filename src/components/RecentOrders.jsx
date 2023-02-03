import React from 'react'
import { data } from '@/data/data'
import { HiShoppingBag } from 'react-icons/hi';
import Link from 'next/link';

export const RecentOrders = () => {
    return (
        <>
            <h1 className='p-2 mt-4 text-xl'>Recent Orders</h1>
            {
                data.map((order, id) => (
                    <li className='list-none  '
                        key={id}>
                        <div className='h-full flex flex-row items-center justify-center md:justify-around gap-10 p-2 mt-2 md:p-1'>
                            <div className=' flex flex-row items-center justify-center w-[200px] md:w-full gap-4 m-auto '>
                                <div className='flex items-center justify-center text-center '>
                                    <Link href="customers"> <HiShoppingBag size={24} className='text-purple-700 bg-slate-300 rounded hover:text-slate-300 hover:bg-purple-700  ' /></Link>
                                </div>
                                <div className=' md:w-[100px]'>
                                    <p className='font-bold'>${order.total}</p>
                                    <p className='text-slate-600'>{order.name.first}</p>
                                </div>
                            </div>

                            <div className='flex flex-row items-center md:justify-center p-2 w-full ' >
                                <p className='font-semibold'>{order.date}</p>
                            </div>

                        </div>

                    </li>
                ))
            }

        </>
    )
}




