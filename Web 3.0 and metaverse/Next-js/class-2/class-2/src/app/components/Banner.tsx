import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (  
    <div className='flex justify-center items-center bg-gradient-to-r from-gray-50 to-black w-4/5'>
        <section className='flex flex-col p-10 justify-center'>
            <h1 className='text-blue-700 text-[50px] justify-center'>
                Welcome to NorthBy
            </h1>
            <p className='text-blue-50 p-5 flex justify-center'>
                A premium in sight and sound
            </p>
            <div className='flex justify-center'>
                <button className='w-1/3 pt-3 pb-5 border-2 border-black bg-blue-950 text-white rounded-md'>Learn More</button>
            </div>
        </section>
        <section className='float m-10'>
            <Image src="/logo.jpg" alt='logo' width='200' height='200' className='rounded-full'></Image>
        </section>
    </div>
  )
}

export default Banner;