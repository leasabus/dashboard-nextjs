import React from 'react'
import { data } from '@/data/data'
import { MdAccountCircle } from 'react-icons/md';


export const customers = () => {
    return (
        <div>
            <h1 className='p-4 font-bold text-2xl'>Last customers</h1>
            <div className='hidden md:grid grid-cols-4  font-bold items-center justify-center p-6 mt-4 text-purple-600'>
                <p>Customer</p>
                <p>Email</p>
                <p >Mehod</p>
                <p >Date</p>
            </div>
            {
                data.map((order, id) => (
                    <li key={id} className="list-none">

                        <div className='grid grid-cols-2 md:grid-cols-4 p-4 md:p-6'>
                            <div className='flex flex-row items-center gap-2 md:gap-4'>
                                <MdAccountCircle size={20} className='text-purple-500 bg-slate-300 rounded' />
                                <div className='flex flex-row gap-1 items-center  font-semibold'>
                                    <p>{order.name.first}</p>
                                    <p>{order.name.last}</p>
                                </div>
                            </div>

                            <div className='hidden md:flex flex-col md:flex-row items-center gap-2 text-slate-500'>
                                <p>{order.name.first}@gmail.com</p>

                            </div>

                            <div className='flex flex-row justify-center md:justify-start items-center text-slate-500 md:font-semibold gap-2'>
                                <p>{order.method}</p>

                            </div>

                            <div className='hidden md:flex  items-center text-slate-500 gap-2 '>
                                <p>{order.date}</p>
                            </div>
                        </div>

                    </li>

                ))
            }
        </div>
    )
}


export default customers;

