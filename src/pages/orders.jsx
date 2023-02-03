
import { data } from '@/data/data';
import React from 'react'
import { BsBriefcaseFill } from 'react-icons/bs'

export const orders = () => {
    return (
        <div>
            <h1 className='p-4 font-bold text-2xl'>Last orders</h1>
            <div className='hidden md:grid grid-cols-4  font-bold items-center justify-center p-6 mt-4 text-purple-600'>
                <p>Customer</p>
                <p>Payment</p>
                <p >Mehod</p>
                <p >Product</p>
            </div>
            {
                data.map((order, id) => (
                    <li key={id} className="list-none">

                        <div className='grid grid-cols-2 md:grid-cols-4 p-4 md:p-6'>
                            <div className='flex flex-row items-center gap-2 md:gap-4'>
                                <BsBriefcaseFill size={18} className='text-purple-500  rounded' />
                                <div className='flex flex-col gap-1 items-center  font-semibold'>
                                    <p>{order.name.first}</p>
                                    <p>${order.total}</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center gap-2 text-slate-500'>

                                <span className={
                                    order.status == 'Processing'
                                        ? 'bg-slate-400 rounded text-black font-semibold p-1'
                                        : order.status == 'Completed'
                                            ? 'bg-green-400 rounded text-black font-semibold p-1'
                                            : order.status == 'On Hold' ? 'bg-yellow-200 rounded text-black font-semibold p-1'
                                                : ''
                                }
                                >{order.status}</span>
                            </div>

                            <div className='hidden md:flex flex-row items-center text-slate-500 font-semibold gap-2'>
                                <p>{order.method}</p>

                            </div>

                            <div className='hidden md:flex items-center text-slate-500 gap-2 '>
                                <p>{order.product}</p>
                            </div>
                        </div>

                    </li>

                ))
            }
        </div>
    )
}

export default orders;