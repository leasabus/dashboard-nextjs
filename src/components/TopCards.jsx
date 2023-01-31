import React from 'react'

export const TopCards = () => {
    return (
        <div className='flex flex-col gap-y-8 p-6 md:flex-row justify-center md:justify-between '>
            <div className='flex flex-row gap-4 justify-between w-full p-2'>
                <div className='flex flex-col  '>
                    <span className='font-bold'>$7.426</span>
                    <span className='text-slate-600 font-semibold'>Daily revenue</span>
                </div>

                <span className='bg-green-200 text-green-700 rounded-lg flex items-center p-1'>+18%</span>
            </div>
            <div className='flex flex-row gap-4 justify-between w-full p-2 '>
                <div className='flex flex-col'>
                    <span className='font-bold'>$1.820.485</span>
                    <span className='text-slate-600 font-semibold'>YTD revenue</span>
                </div>

                <span className='bg-green-200 text-green-700 rounded-lg flex items-center p-1'>+5%</span>
            </div>
            <div className='flex flex-row gap-4 justify-between w-full p-2 '>
                <div className='flex flex-col'>
                    <span className='font-bold'>$17.510</span>
                    <span className='text-slate-600 font-semibold'>Customers</span>
                </div>

                <span className='bg-green-200 text-green-700 rounded-lg flex items-center p-1'>+8%</span>
            </div>

        </div>
    )
}
