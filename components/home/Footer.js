import React from 'react'
import Link from 'next/link'
import Button from '../base/Button'

function Footer() {
  return (
    <div>
        <div className=" lg:h-full md:h-full h-full lg:px-20 md:px-14 px-6 lg:py-12 md:py-12 py-20 flex flex-col lg:space-y-12 space-y-8 justify-center items-center w-full">
            <div className='lg:grid lg:grid-cols-7 lg:gap-10 md:grid md:grid-cols-7 md:space-y-0 lg:space-y-0 md:gap-10 flex flex-col space-y-6 justify-start items-start w-full'>
                <div className='lg:col-span-5 md:col-span-5 flex-col space-y-4 justify-start items-start w-full'>
                    <p className='text-gray-200'>contact me</p>
                    <h3 className='font-heading lg:text-7xl md:text-6xl text-5xl font-bold leading-none text-gray-100 lg:w-11/12 flex justify-start items-start text-left'>
                        Got an idea? Let&apos;s make magic happen!
                    </h3>
                </div>
                <div className='lg:col-span-2 lg:flex lg:justify-center md:col-span-2 md:flex md:justify-center md:items-center w-full h-full'>
                    <Button isPrimary text="say hello" linkTo="" />
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-2 lg:gap-0 md:grid md:grid-cols-2 md:gap-10 flex flex-col space-y-0 w-full'>
                
                <Link href="" className='lg:py-10 lg:px-8 md:py-8 md:px-4 py-8 px-0 flex justify-start items-start text-left w-full border-t border-gray-600 border-dashed text-gray-100 text-base font-light hover:bg-linkedin transition-all duration-150'>
                    <p>Linkedin</p>
                </Link>
                <Link href="" className='lg:py-10 lg:px-8 md:py-8 md:px-4 py-8 px-0 flex justify-start items-start text-left w-full border-t border-gray-600 border-dashed text-gray-100 text-base font-light hover:bg-twitter transition-all duration-150'>
                    <p>twitter</p>
                </Link>
                <Link href="" className='lg:py-10 lg:px-8 md:py-8 md:px-4 py-8 px-0 flex justify-start items-start text-left w-full border-t border-b border-gray-600 border-dashed text-gray-100 text-base font-light hover:bg-github transition-all duration-150'>
                    <p>github</p>
                </Link>
                <Link href="" className='lg:py-10 lg:px-8 md:py-8 md:px-4 py-8 px-0 flex justify-start items-start text-left w-full border-t border-b border-gray-600 border-dashed text-gray-100 text-base font-light hover:bg-instagram transition-all duration-150'>
                    <p>instagram</p>
                </Link>
            </div>
            
        </div>
        <div className='w-full py-0 lg:flex md:flex justify-center items-center hidden mb-8'>
            <h4 className='font-heading lg:text-20xl md:text-20xl text-20xl font-bold leading-none text-yellow-400 text-center'>Omodot Etukudo</h4>
        </div>
        <div className='w-full lg:py-8 md:py-8 py-20 mb-8 flex  justify-center items-center  text-gray-100'>
            <p>Designed and built with &#10084; by me</p>
        </div>
    </div>
  )
}

export default Footer
